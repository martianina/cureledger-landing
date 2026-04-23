import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
/** Vercel Pro: 60s avoids 504 while polling Railway. Hobby max is 10s — set GUTHRIE_MAX_POLL_MS=7500 or lower in env, or use Pro. */
export const maxDuration = 60;

const ELIZAOS_BASE = (process.env.ELIZAOS_API_URL || "http://localhost:3001").replace(
  /\/$/,
  "",
);
const SESSIONS_API = `${ELIZAOS_BASE}/api/messaging/sessions`;
const AGENTS_API = `${ELIZAOS_BASE}/api/agents`;

let cachedAgentId: string | null = null;

function normalizeAgents(data: any): any[] {
  if (Array.isArray(data)) return data;
  const a = data?.data?.agents ?? data?.agents ?? data?.data;
  if (Array.isArray(a)) return a;
  return [];
}

function isGuthrieAgent(a: any): boolean {
  const n = String(a?.name ?? "").toLowerCase();
  if (n !== "guthrie") return false;
  const s = String(a?.status ?? "active").toLowerCase();
  return s === "active" || s === "running" || s === "started" || a?.status == null;
}

async function getGuthrieAgentId(): Promise<string | null> {
  if (cachedAgentId) return cachedAgentId;

  try {
    const res = await fetch(AGENTS_API, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    const agents = normalizeAgents(data);
    const guthrie = agents.find((a: any) => isGuthrieAgent(a)) ||
      agents.find((a: any) => String(a?.name ?? "").toLowerCase() === "guthrie");
    if (guthrie?.id) {
      cachedAgentId = guthrie.id;
      return cachedAgentId;
    }
  } catch (e) {
    console.error("Failed to fetch agent list:", e);
  }
  return null;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(req: NextRequest) {
  try {
    const { text, sessionId } = await req.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: "No message text" }, { status: 400 });
    }

    const agentId = await getGuthrieAgentId();
    if (!agentId) {
      return NextResponse.json(
        { error: "Guthrie agent not found. Is the agent service running?" },
        { status: 503 },
      );
    }

    let activeSessionId = sessionId;

    if (!activeSessionId) {
      const sessionRes = await fetch(SESSIONS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          agentId,
          userId: crypto.randomUUID(),
          metadata: { platform: "web", source: "guthrie-chat" },
        }),
      });

      if (!sessionRes.ok) {
        const err = await sessionRes.text();
        console.error("Session creation failed:", sessionRes.status, err);
        return NextResponse.json({ error: "Failed to create session" }, { status: 502 });
      }

      const session = await sessionRes.json();
      activeSessionId = session.sessionId || session.id;
    }

    const sendTime = Date.now();

    const msgRes = await fetch(`${SESSIONS_API}/${activeSessionId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({ content: text }),
    });

    if (!msgRes.ok) {
      const err = await msgRes.text();
      console.error("Message send failed:", msgRes.status, err);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    let reply: string | null = null;
    /** Default 7.5s keeps route under Vercel Hobby 10s wall. Pro: set e.g. GUTHRIE_MAX_POLL_MS=52000 in env. */
    const maxPollMs = Math.min(
      52_000,
      Math.max(5000, Number.parseInt(process.env.GUTHRIE_MAX_POLL_MS || "7500", 10) || 7500),
    );
    const pollDeadline = Date.now() + maxPollMs;
    let i = 0;
    while (!reply && Date.now() < pollDeadline) {
      const delay = i < 2 ? 500 : i < 6 ? 1000 : 1500;
      await sleep(Math.min(delay, Math.max(0, pollDeadline - Date.now() - 100)));
      if (Date.now() >= pollDeadline) break;
      i++;

      const pollRes = await fetch(
        `${SESSIONS_API}/${activeSessionId}/messages?limit=3`,
        { cache: "no-store" },
      );
      if (!pollRes.ok) continue;

      const pollData = await pollRes.json();
      const messages = pollData?.messages || pollData?.data?.messages || [];

      const isFromAgent = (m: any) =>
        m.isAgent === true ||
        m.role === "assistant" ||
        m.senderType === "agent" ||
        m.type === "agent";

      const agentMsg = messages.find((m: any) => {
        if (!isFromAgent(m)) return false;
        const t = m.createdAt || m.timestamp || m.created_at;
        const msgTime = t ? new Date(t).getTime() : sendTime;
        return msgTime >= sendTime - 5000;
      });

      if (agentMsg) {
        reply =
          agentMsg.content ||
          agentMsg.text ||
          (typeof agentMsg.content === "object" && agentMsg.content?.text) ||
          "";
        if (reply) break;
      }
    }

    return NextResponse.json({
      reply: reply || "I'm still thinking. Try asking again in a moment.",
      sessionId: activeSessionId,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

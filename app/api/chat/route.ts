import { NextRequest, NextResponse } from "next/server";

const ELIZAOS_BASE = process.env.ELIZAOS_API_URL || "http://localhost:3001";
const SESSIONS_API = `${ELIZAOS_BASE}/api/messaging/sessions`;
const AGENTS_API = `${ELIZAOS_BASE}/api/agents`;

let cachedAgentId: string | null = null;

async function getGuthrieAgentId(): Promise<string | null> {
  if (cachedAgentId) return cachedAgentId;

  try {
    const res = await fetch(AGENTS_API);
    if (!res.ok) return null;
    const data = await res.json();
    const agents = data?.data?.agents || data?.agents || [];
    const guthrie = agents.find(
      (a: any) => a.name === "Guthrie" && a.status === "active",
    );
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
      body: JSON.stringify({ content: text }),
    });

    if (!msgRes.ok) {
      const err = await msgRes.text();
      console.error("Message send failed:", msgRes.status, err);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    let reply: string | null = null;
    const maxAttempts = 20;

    for (let i = 0; i < maxAttempts; i++) {
      await sleep(i < 2 ? 500 : i < 5 ? 1500 : 2000);

      const pollRes = await fetch(
        `${SESSIONS_API}/${activeSessionId}/messages?limit=3`,
      );
      if (!pollRes.ok) continue;

      const pollData = await pollRes.json();
      const messages = pollData?.messages || [];

      const agentMsg = messages.find((m: any) => {
        if (!m.isAgent) return false;
        const msgTime = new Date(m.createdAt).getTime();
        return msgTime >= sendTime - 2000;
      });

      if (agentMsg) {
        reply = agentMsg.content || agentMsg.text;
        break;
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

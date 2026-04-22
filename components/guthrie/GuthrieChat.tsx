"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const GUTHRIE_GREETING =
  "Hi, I'm Guthrie, the community agent for Cureledger. Named after the microbiologist who invented newborn screening for rare disease. What can I help with?";

const SUGGESTED_QUESTIONS = [
  "What is Cureledger?",
  "Why was it built?",
  "Where do I start?",
];

/** Split on URLs; captured groups stay in the array (split with regex). */
const URL_SPLIT_RE = /(https?:\/\/[^\s<]+)/gi;

function trimTrailingPunctuation(url: string): string {
  return url.replace(/[.,;:!?)]+$/g, "");
}

function linkifyLine(text: string, linkClassName: string): ReactNode {
  const parts = text.split(URL_SPLIT_RE);
  return parts.map((part, i) => {
    if (/^https?:\/\//i.test(part)) {
      const href = trimTrailingPunctuation(part);
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          onClick={e => e.stopPropagation()}
        >
          {href}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function MessageBody({ text, role }: { text: string; role: "user" | "assistant" }) {
  const linkClass =
    role === "user"
      ? "underline underline-offset-2 font-medium text-primary-content break-words [overflow-wrap:anywhere] hover:opacity-90"
      : "underline underline-offset-2 font-medium text-primary break-words [overflow-wrap:anywhere] hover:opacity-90";
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <span key={li}>
          {li > 0 ? <br /> : null}
          {linkifyLine(line, linkClass)}
        </span>
      ))}
    </>
  );
}

/** Unique URLs in order of first appearance (for preview strip). */
function extractUrls(text: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const re = /(https?:\/\/[^\s<]+)/gi;
  for (const m of text.matchAll(re)) {
    const href = trimTrailingPunctuation(m[1]);
    try {
      const u = new URL(href);
      if (u.protocol !== "http:" && u.protocol !== "https:") continue;
      if (!seen.has(u.href)) {
        seen.add(u.href);
        out.push(u.href);
      }
    } catch {
      /* invalid */
    }
  }
  return out;
}

function ChatLinkPreview({ url }: { url: string }) {
  let hostname = url;
  let label = "Open link";
  try {
    const u = new URL(url);
    hostname = u.hostname;
    if (u.pathname === "/" || u.pathname === "") label = "Home";
    else if (u.hash === "#join") label = "Email signup";
    else if (u.pathname.includes("/blog")) label = "Blog";
    else if (u.pathname.includes("/about")) label = "About";
    else if (u.pathname.includes("/whitepaper")) label = "Whitepaper";
    else label = u.pathname.split("/").filter(Boolean).slice(-1)[0]?.replace(/-/g, " ") || "Open";
  } catch {
    /* keep defaults */
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-xl border border-base-300 bg-base-200/90 px-3 py-2.5 text-left text-sm shadow-sm transition-colors hover:bg-base-300/80 hover:border-primary/40"
    >
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary" aria-hidden>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium text-base-content">{hostname}</span>
        <span className="block truncate text-xs text-base-content/70 capitalize">{label}</span>
      </span>
      <span className="flex-shrink-0 text-xs font-semibold text-primary">Open</span>
    </a>
  );
}

export function GuthrieChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      role: "assistant",
      content: GUTHRIE_GREETING,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const sessionIdRef = useRef<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text.trim(),
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text.trim(),
          sessionId: sessionIdRef.current,
        }),
      });

      const data = await res.json();

      if (data.sessionId) sessionIdRef.current = data.sessionId;

      const reply: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I'm having trouble responding right now. Try again in a moment.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, reply]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: "I'm having trouble connecting right now. Make sure the Guthrie agent is running and try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary hover:bg-primary/80 text-primary-content shadow-lg flex items-center gap-2 px-5 h-14 transition-all hover:scale-105"
        aria-label={isOpen ? "Close Guthrie chat" : "Open Guthrie chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-base font-semibold">Ask Guthrie</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-base-300 bg-primary">
            <Image
              src="/logo.png"
              alt="Cureledger"
              width={32}
              height={32}
              className="rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-primary-content">Guthrie</p>
              <p className="text-sm text-primary-content">Cureledger AI Agent</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-content hover:text-primary-content transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map(msg => {
              const previewUrls = msg.role === "assistant" ? extractUrls(msg.content) : [];
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-1.5 ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-base leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-content rounded-br-md"
                        : "bg-base-300 text-base-content rounded-bl-md"
                    }`}
                  >
                    <MessageBody text={msg.content} role={msg.role} />
                  </div>
                  {previewUrls.length > 0 ? (
                    <div className={`flex w-full max-w-[85%] flex-col gap-1.5 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      {previewUrls.map(url => (
                        <ChatLinkPreview key={`${msg.id}-${url}`} url={url} />
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-base-300 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-base-content animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-base-content animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-base-content animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTED_QUESTIONS.map(q => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-sm bg-primary/10 text-primary border border-primary/30 rounded-full px-3 py-1.5 hover:bg-primary/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="border-t border-base-300 px-3 py-2.5 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask Guthrie anything..."
              className="flex-1 bg-base-200 border border-base-300 rounded-full px-4 py-2.5 text-base text-base-content placeholder-base-content focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full bg-primary hover:bg-primary/80 disabled:bg-base-300 text-primary-content flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          <div className="px-4 pb-2">
            <p className="text-xs text-base-content text-center">
              Guthrie is an AI agent. Not medical advice. Always consult your healthcare team.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

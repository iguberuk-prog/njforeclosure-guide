'use client';

import { useState, useRef, useEffect } from 'react';

interface Msg {
  role: 'user' | 'assistant';
  content: string;
}

// The wait before Samantha joins, and the minimum time any reply takes to
// appear. Instant answers read as robotic; a short human pace reads as care.
// Honesty line we do not cross: Samantha is labeled a virtual assistant in
// the header, the welcome and the AI itself, and the connect message says we
// are connecting to HER, never that visitors are waiting for a human agent.
const CONNECT_DELAY_MS = 15000;
const MIN_REPLY_MS = 4000;

const WELCOME: Msg = {
  role: 'assistant',
  content:
    "Hi, I'm Samantha, the virtual assistant here at NJ Foreclosure Guide. I help New Jersey homeowners figure out their options when they're behind on the mortgage or facing foreclosure, and everything here is free and confidential. What's going on with your situation?",
};

const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]{2,}/;
const PHONE_RE = /(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
const NAME_RE = /(?:my name is|i'm|i am|this is|call me)\s+([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?)/i;

function extractContact(messages: Msg[]) {
  let email = '';
  let phone = '';
  let name = '';
  for (const m of messages) {
    if (m.role !== 'user') continue;
    const e = m.content.match(EMAIL_RE);
    if (e && !email) email = e[0];
    const p = m.content.match(PHONE_RE);
    if (p && !phone) phone = p[0].trim();
    const n = m.content.match(NAME_RE);
    if (n && !name) name = n[1];
  }
  return { email, phone, name };
}

function buildTranscript(messages: Msg[]): string {
  return messages
    .map((m) => `${m.role === 'user' ? 'VISITOR' : 'ASSISTANT'}: ${m.content}`)
    .join('\n\n');
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [connecting, setConnecting] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastSubmittedCount = useRef(0);
  const connectedOnce = useRef(false);

  // First open: a short "connecting" beat before Samantha's welcome appears.
  const handleOpen = () => {
    setOpen(true);
    if (connectedOnce.current) return;
    connectedOnce.current = true;
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setMessages([WELCOME]);
    }, CONNECT_DELAY_MS);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const submitTranscript = async (msgs: Msg[], reason: string) => {
    const { email, phone, name } = extractContact(msgs);
    // Only send transcripts that contain contact info, so the inbox gets leads, not noise
    if (!email && !phone) return;
    if (msgs.length <= lastSubmittedCount.current) return;
    lastSubmittedCount.current = msgs.length;
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'ai-chat-lead');
      formData.append('name', name || 'Chat visitor (see transcript)');
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('leadScore', reason);
      formData.append('conversationSummary', buildTranscript(msgs));
      formData.append('sourcePage', typeof window !== 'undefined' ? window.location.pathname : '');
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
    } catch {
      // Silent: never disrupt the visitor's conversation
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Final transcript on close if the conversation grew since last submission
    submitTranscript(messages, 'CHAT-FINAL');
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading || connecting) return;
    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 35000);
    const startedAt = Date.now();
    const pace = async () => {
      const remaining = MIN_REPLY_MS - (Date.now() - startedAt);
      if (remaining > 0) await new Promise((r) => setTimeout(r, remaining));
    };

    try {
      const res = await fetch('/api/ai-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })) }),
        signal: controller.signal,
      });
      const data = await res.json();
      await pace();
      if (data.reply) {
        const withReply: Msg[] = [...next, { role: 'assistant', content: data.reply }];
        setMessages(withReply);
        setUnavailable(false);
        // Submit transcript as soon as contact info appears in the conversation
        submitTranscript(withReply, 'CHAT-LEAD');
      } else {
        setUnavailable(true);
        setMessages([
          ...next,
          {
            role: 'assistant',
            content:
              "Sorry, that one did not go through on my end. Please send your message again and I will pick right back up. If you would rather not wait, the free 2-minute assessment below covers the same ground.",
          },
        ]);
      }
    } catch {
      await pace();
      setUnavailable(true);
      setMessages([
        ...next,
        {
          role: 'assistant',
          content:
            "Sorry, that took longer than it should have. Please send your message again and I will pick right back up. If you would rather not wait, the free 2-minute assessment below covers the same ground.",
        },
      ]);
    } finally {
      clearTimeout(timer);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white rounded-full shadow-2xl px-6 py-4 font-semibold text-sm hover:bg-slate-800 transition flex items-center gap-2 border border-amber-400/40"
          aria-label="Open chat"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Questions? Talk to us
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden" style={{ height: 'min(560px, calc(100vh - 6rem))' }}>
          {/* Header */}
          <div className="bg-slate-950 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                S
              </div>
              <div>
                <p className="font-bold text-sm flex items-center gap-2">
                  Samantha
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </p>
                <p className="text-slate-400 text-xs mt-0.5">Virtual assistant · Free &amp; confidential</p>
              </div>
            </div>
            <button onClick={handleClose} className="text-slate-400 hover:text-white transition p-1" aria-label="Close chat">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-slate-900 text-white rounded-br-md'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-md'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {connecting && (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 border-t-slate-900 animate-spin"></div>
                <p className="text-sm text-slate-500">Connecting you with Samantha...</p>
                <p className="text-xs text-slate-400">Usually under a minute</p>
              </div>
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm text-slate-400">
                  Samantha is typing...
                </div>
              </div>
            )}
            {unavailable && (
              <div className="flex justify-start">
                <a
                  href="/quiz"
                  className="bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-amber-300 transition"
                >
                  Start Free Assessment
                </a>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
              <button
                onClick={send}
                disabled={loading || connecting || !input.trim()}
                className="bg-slate-900 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition disabled:opacity-40"
              >
                Send
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-center">
              Educational only, not legal advice. For legal guidance we connect you with licensed attorneys.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

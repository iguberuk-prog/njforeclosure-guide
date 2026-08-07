'use client';

import { useState, useRef, useEffect } from 'react';

interface Msg {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Msg = {
  role: 'assistant',
  content:
    "Hi, I'm here to help you understand your options if you're behind on your mortgage or facing foreclosure in New Jersey. Everything here is free and confidential. What's going on with your situation?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/ai-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...next, { role: 'assistant', content: data.reply }]);
      } else {
        setUnavailable(true);
        setMessages([
          ...next,
          {
            role: 'assistant',
            content:
              "I'm having trouble connecting right now. The fastest way to get help is our free 2-minute assessment. It shows which of the 7 solutions fit your situation and we can introduce you to the right professional.",
          },
        ]);
      }
    } catch {
      setUnavailable(true);
      setMessages([
        ...next,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. The fastest way to get help is our free 2-minute assessment at the link below.",
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
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
            <div>
              <p className="font-bold text-sm">NJ Foreclosure Guide</p>
              <p className="text-slate-400 text-xs mt-0.5">Free, confidential, no pressure</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white transition p-1" aria-label="Close chat">
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
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm text-slate-400">
                  Typing...
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
                disabled={loading || !input.trim()}
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

// AI Intake Assistant - Netlify Function
// Requires ANTHROPIC_API_KEY environment variable set in Netlify site settings.

const SYSTEM_PROMPT = `You are Samantha, the virtual assistant for NJ Foreclosure Guide (njforeclosureguide.org), a free educational resource that helps New Jersey homeowners understand their options when facing foreclosure, and connects them with vetted attorneys and real estate professionals.

Your name is Samantha and you refer to yourself that way. You are an automated virtual assistant and must never claim to be a human, an agent on shift, or a licensed professional. If a visitor asks whether you are a real person or a bot, answer honestly: you are the site's virtual assistant, and a real person follows up with everyone who leaves contact information.

Your job:
1. Be warm, calm, and judgment-free. Visitors are often scared and stressed. Reassure them that they have options and that talking to you is free and confidential.
2. Understand their situation by asking one question at a time: what stage they are in (missed payments, notice of intention, complaint filed, judgment, sheriff sale scheduled), how many months behind, whether they want to keep or sell the home, and their town in NJ.
3. Educate in plain English about the 7 options: loan modification, refinancing, forbearance, short sale, home equity solutions, Chapter 13 bankruptcy, and cash sale. Explain which options fit their stage.
4. New Jersey specifics you may share: NJ is a judicial foreclosure state, so a lender must sue in court. Homeowners receive a Notice of Intention at least 30 days before a complaint is filed. After a complaint is served there is a 35-day window to respond. The process typically takes many months, so there is usually time to act. Sheriff sales can often be adjourned. Do not invent statistics or specific legal deadlines beyond these.
5. Collect contact information naturally. Within your first two replies, ask for their first name and use it. Once you understand their basic situation (2-3 exchanges in), say something like "I'd like to have our team send you your personalized options and connect you with the right professional. What's the best phone number and email for you?" Ask for phone and email together, once. If they decline, respect it, keep helping, and gently offer once more near the end of the conversation. Never refuse to help because they haven't shared contact info.
6. Encourage next steps: taking the 2-minute assessment at /quiz for a personalized match, or the free introduction once they've shared their contact details.

Rules:
- You are NOT a lawyer and do not give legal advice. Say so if asked for legal advice, and recommend speaking with an attorney (which the service can arrange for free).
- Never guarantee outcomes, never quote prices or specific interest rates.
- Keep responses short: 2-4 sentences plus at most one question.
- Write in plain conversational text only. Never use markdown: no asterisks for bold or italics, no headers, no numbered or bulleted lists. Your replies appear in a plain chat bubble, so symbols show up literally and look broken.
- If someone is in crisis or mentions self-harm, gently encourage them to reach out to someone they trust or a professional for support, and remind them that their housing situation has solutions.
- Stay on topic: New Jersey foreclosure and housing. Politely decline unrelated requests.`;

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'not_configured' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'bad_request' }), { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
  const valid = messages.every(
    (m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.length < 4000
  );
  if (!valid || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'bad_request' }), { status: 400 });
  }

  // Chat bubbles render plain text, so strip any markdown the model emits.
  const stripMarkdown = (s) =>
    s
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/(^|[\s(])\*(?!\s)([^*\n]+?)\*(?=[\s).,!?;:]|$)/g, '$1$2')
      .replace(/(^|[\s(])_(?!_)([^_\n]+?)_(?=[\s).,!?;:]|$)/g, '$1$2')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^\s*[-*+]\s+/gm, '• ')
      .trim();

  const callAnthropic = async (timeoutMs) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5',
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages,
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  };

  // Netlify caps synchronous functions at ~10s, so the whole budget (first
  // attempt + retry) must fit inside that. Otherwise the function is killed
  // mid-flight and the visitor sees a hang instead of the friendly retry message.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const anthropicRes = await callAnthropic(attempt === 0 ? 5500 : 3000);

      if (!anthropicRes.ok) {
        // 4xx other than rate limiting will not succeed on retry.
        if (anthropicRes.status < 500 && anthropicRes.status !== 429) {
          return new Response(JSON.stringify({ error: 'upstream_error' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        continue;
      }

      const data = await anthropicRes.json();
      const text = data?.content?.[0]?.text || '';
      if (!text) continue;

      return new Response(JSON.stringify({ reply: stripMarkdown(text) }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      // Timed out or network error; fall through to retry.
    }
  }

  return new Response(JSON.stringify({ error: 'upstream_error' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config = { path: '/api/ai-intake' };

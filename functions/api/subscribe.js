// Cloudflare Pages Function: newsletter signup → Resend Audiences.
// Route: POST /api/subscribe  (file path functions/api/subscribe.js)
//
// Required environment variables (Cloudflare dashboard → Workers & Pages →
// tochinacar → Settings → Variables and Secrets → Production):
//   RESEND_API_KEY      — resend.com → API Keys (needs full access /
//                         audience write permission); add as Secret
//   RESEND_AUDIENCE_ID  — resend.com → Audiences → create one ("TopChinaCar
//                         Daily") → copy its ID
//
// Until both are set, the endpoint returns 503 and the site's form shows a
// graceful fallback message instead of pretending to succeed.

export async function onRequestPost(context) {
  const { env, request } = context;

  const apiKey = env.RESEND_API_KEY;
  const audienceId = env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return json({ error: 'Subscription not configured yet' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const email = ((body && body.email) || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ error: 'Invalid email' }, 400);
  }

  try {
    const r = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, unsubscribed: false })
    });
    if (!r.ok) {
      console.error('Resend error:', r.status, await r.text());
      return json({ error: 'Subscription service error' }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error('subscribe failed:', err);
    return json({ error: 'Subscription service error' }, 502);
  }
}

// Anything but POST → 405
export async function onRequest(context) {
  if (context.request.method === 'POST') return onRequestPost(context);
  return json({ error: 'Method not allowed' }, 405, { 'Allow': 'POST' });
}

function json(obj, status, extraHeaders) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...(extraHeaders || {}) }
  });
}

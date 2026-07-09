// Cloudflare Pages Function: newsletter signup → Resend Contacts/Segments.
// Route: POST /api/subscribe  (file path functions/api/subscribe.js)
//
// Required environment variables (Cloudflare dashboard → Workers & Pages →
// tochinacar → Settings → Variables and Secrets → Production):
//   RESEND_API_KEY      — resend.com → API Keys (needs full access /
//                         contacts write permission); add as Secret
//   RESEND_SEGMENT_ID   — resend.com → Contacts → Segments → create one
//                         ("China Auto Overseas Daily") → copy its ID
//
// Backward compatibility:
//   RESEND_AUDIENCE_ID  — legacy Audiences ID. Audiences are deprecated by
//                         Resend, but this fallback keeps old deployments alive.
//
// Until both are set, the endpoint returns 503 and the site's form shows a
// graceful fallback message instead of pretending to succeed.

export async function onRequestPost(context) {
  const { env, request } = context;

  const apiKey = env.RESEND_API_KEY;
  const segmentId = env.RESEND_SEGMENT_ID;
  const audienceId = env.RESEND_AUDIENCE_ID;
  if (!apiKey || (!segmentId && !audienceId)) {
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
    const url = segmentId
      ? 'https://api.resend.com/contacts'
      : `https://api.resend.com/audiences/${audienceId}/contacts`;
    const payload = segmentId
      ? { email, unsubscribed: false, segments: [{ id: segmentId }] }
      : { email, unsubscribed: false };
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (segmentId && r.status === 409) {
      const add = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${segmentId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}` }
      });
      if (add.ok || add.status === 409) return json({ ok: true }, 200);
      console.error('Resend segment add error:', add.status, await add.text());
      return json({ error: 'Subscription service error' }, 502);
    }
    if (!r.ok) {
      const detail = await r.text();
      console.error('Resend error:', r.status, detail);
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

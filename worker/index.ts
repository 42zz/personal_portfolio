/// <reference types="@cloudflare/workers-types" />

// 静的アセットの配信に加えて、お問い合わせフォームの送信先 /api/contact を受け持つ Worker。
// Turnstile のトークンを検証してから、Resend でメールを送る。

interface Env {
  ASSETS: Fetcher;
  /** Turnstile のシークレットキー(wrangler secret put TURNSTILE_SECRET_KEY) */
  TURNSTILE_SECRET_KEY: string;
  /** Resend の API キー(wrangler secret put RESEND_API_KEY) */
  RESEND_API_KEY: string;
  /** 受信先メールアドレス */
  CONTACT_TO: string;
  /** 送信元メールアドレス(Resend で認証済みドメインのもの) */
  CONTACT_FROM: string;
}

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  token?: unknown;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error('contact: Turnstile の検証に失敗', err);
    return false;
  }
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Method Not Allowed' }, 405);

  if (!env.TURNSTILE_SECRET_KEY || !env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error('contact: 環境変数が不足しています');
    return json({ error: 'サーバーの設定が完了していません。' }, 500);
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return json({ error: 'リクエストの形式が正しくありません。' }, 400);
  }

  const name = str(body.name, 100);
  const email = str(body.email, 254);
  const message = str(body.message, 5000);
  const token = str(body.token, 2048);

  if (!name || !email || !message) return json({ error: '未入力の項目があります。' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'メールアドレスの形式が正しくありません。' }, 400);
  if (!token) return json({ error: '認証が完了していません。' }, 400);

  const ip = request.headers.get('CF-Connecting-IP');
  if (!(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip))) {
    return json({ error: '認証に失敗しました。もう一度お試しください。' }, 403);
  }

  const text = [`お名前: ${name}`, `メール: ${email}`, '', message].join('\n');
  const html = `<p><b>お名前:</b> ${escapeHtml(name)}<br><b>メール:</b> ${escapeHtml(email)}</p><pre style="white-space:pre-wrap;font:inherit">${escapeHtml(message)}</pre>`;

  let res: Response;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject: `[42zz.net] お問い合わせ: ${name}`,
        text,
        html,
      }),
    });
  } catch (err) {
    console.error('contact: メール送信に失敗', err);
    return json({ error: '送信に失敗しました。時間をおいて再度お試しください。' }, 502);
  }

  if (!res.ok) {
    console.error('contact: メール送信に失敗', res.status, await res.text());
    return json({ error: '送信に失敗しました。時間をおいて再度お試しください。' }, 502);
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return handleContact(request, env);
    if (url.pathname.startsWith('/api/')) return json({ error: 'Not Found' }, 404);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

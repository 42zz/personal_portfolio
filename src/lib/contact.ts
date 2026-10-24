// Turnstile のサイトキー。本番ではビルド時に VITE_TURNSTILE_SITE_KEY を渡す。
// 開発環境で未設定のときは Cloudflare のテスト用キー(常に成功)を使う。
export const TURNSTILE_SITE_KEY: string =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || (import.meta.env.DEV ? '1x00000000000000000000AA' : '');

// サイトキーがないとフォームを送れないので、その間はお問い合わせ欄ごと出さない。
export const CONTACT_ENABLED = TURNSTILE_SITE_KEY !== '';

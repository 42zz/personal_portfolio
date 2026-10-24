# masayakawai.com / 42zz.net

```sh
bun i

bun run dev
```

## デプロイ

Cloudflare Workers(静的アセット配信)で公開しています。`master` に push すると Cloudflare の Workers Builds が `bun install --frozen-lockfile` → `bun run build` を実行してデプロイします。

- ビルド環境の bun は `package.json` の `packageManager` と `.bun-version` で固定しています
- 依存を変えたら `bun install` で `bun.lock` を更新してコミットしてください

手元からデプロイする場合:

```sh
bun run build
npx wrangler deploy
```

## お問い合わせフォーム

トップページは SNS リンクとお問い合わせフォームだけの構成です。フォームの送信先 `/api/contact` は `worker/index.ts` の Worker が受け、Cloudflare Turnstile のトークンを検証してから Resend でメールを送ります。

`VITE_TURNSTILE_SITE_KEY` を設定せずにビルドすると、お問い合わせ欄とナビの「Contact」は表示されません。下の設定が済むまではこの状態で公開できます。

### 本番の設定

1. Cloudflare のダッシュボードで Turnstile のウィジェットを作り、ホスト名に `42zz.net` と `masayakawai.com` を登録する
2. Workers Builds のビルド変数に `VITE_TURNSTILE_SITE_KEY`(サイトキー)を設定する
3. Worker の変数とシークレットを設定する

| 名前 | 種類 | 内容 |
| --- | --- | --- |
| `TURNSTILE_SECRET_KEY` | シークレット | Turnstile のシークレットキー |
| `RESEND_API_KEY` | シークレット | Resend の API キー |
| `CONTACT_TO` | 変数 | 受信先のメールアドレス |
| `CONTACT_FROM` | 変数 | 送信元のアドレス(Resend で認証済みのドメイン) |

```sh
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put RESEND_API_KEY
```

### ローカルで試す

```sh
cp .dev.vars.example .dev.vars   # 値を埋める
bun run build && bun run dev:worker   # Worker を 8787 で起動
bun run dev                           # 別ターミナル。/api は 8787 に流れる
```

開発時はサイトキー未設定なら Turnstile のテスト用キー(常に成功)を使います。

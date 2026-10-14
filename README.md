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

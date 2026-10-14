# masayakawai.com / 42zz.net

```sh
bun i

bun run dev
```

## デプロイ

Cloudflare Workers(静的アセット配信)で公開しています。`master` に push すると GitHub Actions(`.github/workflows/deploy.yml`)がビルドしてデプロイします。

必要な GitHub Secrets:

- `CLOUDFLARE_API_TOKEN`(権限: Workers Scripts の編集)
- `CLOUDFLARE_ACCOUNT_ID`

手元からデプロイする場合:

```sh
bun run build
npx wrangler deploy
```

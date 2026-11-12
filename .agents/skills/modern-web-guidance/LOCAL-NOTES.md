# このリポジトリでの使い方(LOCAL-NOTES)

このファイルは配布物ではなく、このリポジトリで足した注意書きです。`SKILL.md` より先に読んでください。

## 決まり

1. **`npx` の `search` / `retrieve` / `list` / `legacy-scan` は実行しない。**
   `SKILL.md` は `npx -y modern-web-guidance@latest search "<検索語>"` を使うたびに実行するよう書いていますが、これは版を固定しないコードの実行で、検索語などの利用状況を Google に送ります。このリポジトリでは使いません。
2. **代わりに `guides/` の Markdown を直接読む。**
   分野ごとのフォルダ(`guides/accessibility/`、`guides/performance/`、`guides/html/`、`guides/css/`、`guides/forms/`、`guides/security/` など)から、作業に合うファイルを探して読みます。ファイル名がガイドのIDです。
3. **どうしても実行する場合**は、版を固定し、利用状況の送信を止めます。

   ```sh
   DISABLE_TELEMETRY=1 npx -y modern-web-guidance@1.0.0 search "<検索語>"
   ```

   `@latest` は使いません。

## 取得元と更新の手順

- 取得元: `https://github.com/GoogleChrome/modern-web-guidance` のコミット `4dd9683`(Release v1.0.0、2026-11-10)。`skills/modern-web-guidance/` をそのまま置いたものです。
- 更新するとき:
  1. 上の配布リポジトリを取得し、新しいコミットの `skills/modern-web-guidance/` の中身を確認する(Markdown 以外が増えていないこと)。
  2. このフォルダの `SKILL.md` と `guides/` を置き換える。
  3. `SKILL.md` の先頭(見出しの直前)に、`LOCAL-NOTES` の印が付いた案内の行を足し直す。
  4. このファイルの取得元コミットと、上の固定する版の番号を書き換える。
- `npx modern-web-guidance@latest install` / `update` は使いません(別の npm パッケージ `skills` を版指定なしで実行するため)。

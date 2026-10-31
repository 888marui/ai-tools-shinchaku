# AIツール新着便
新しいAIツールを日本語で紹介する静的サイト。`node build.js` で dist/ を生成。データは data/tools.json。

## 運用の方針（2026-10-31）
- **扱うテーマ**：AIツールの料金・無料枠・使い方・選び方。AIツールと関係の薄い話題（ポイ活・物販・アフィリエイトの手順など）は載せない。すでにあるテーマ外の記事は、`data/articles.js` で `"noindex": true` にする（ページは残り、一覧・関連記事・sitemap・フィード・llms.txt から外れる）。例：`rakuyoko-rakuten-ichiba-shoukai`。
- **無料ツールの一覧**：検索向けの正のページは `/articles/muryou-ai-tool-ichiran/`（公式で1件ずつ確かめた一覧）。`/free/` はそこへ301。`/free-ai-tools/` は LINE 友だち特典のページなので `noindex`（料金欄の表記から機械的に集めた一覧で、件数は正のページと違ってよい）。
- **ニュースと記事の役割**：ニュース＝何が発表されたか（日付・出典・要約。任意で `impact` に「日本の利用者への影響」を1〜2文）。記事＝どう使う・いくら・誰向け。同じ話題の記事を書いてニュースが不要になったら、`data/news.js` で `merged: true` にし、`functions/_middleware.js` の `REDIRECTS` に旧URL→記事URLを足す（ニュースのURLは記事へ301）。
- **301リダイレクト**：Cloudflare Pages の `_redirects` は Functions が処理するリクエストに効かないため（全パスに `functions/_middleware.js` がある）、`functions/_middleware.js` の `REDIRECTS` で行う。`build.js` の `moved()` と組が合わないとビルド時に警告が出る。
- **日付**：記事の表示の更新日・JSON-LD の `dateModified`・sitemap の `lastmod` は、どれも `data/articles.js` の `updated`（なければ `date`）から作る。内容を直したら `updated` を変える。

## デプロイ（GitHub Actions）
`main` に push（PR のマージ）すると `.github/workflows/deploy.yml` が自動で公開する。Actions タブの「deploy」→「Run workflow」で手動実行もできる。

1. ビルド：`node build.js`（最初に `python3 og.py` を呼ぶ。Pillow と Noto Sans CJK は Actions で入れる。作った OG 画像はコミットされず、公開物にだけ入る）→ `node check.js`（JSON-LD が読める・サイト内リンク切れ0・404.html が noindex・sitemap.xml がある）
2. 公開：`wrangler pages deploy dist --project-name <CF_PAGES_PROJECT> --branch main`（wrangler は 4.154.0 に固定。リポジトリ直下で実行するので `functions/_middleware.js` も一緒に上がる）
3. 確認：`https://ai-shinchaku.com/`・`/sitemap.xml`・`/articles/muryou-ai-tool-ichiran/` が 200、存在しないURLが 404、`/free/` が `/articles/muryou-ai-tool-ichiran/` へ 301。リポジトリ変数 `CF_PAGES_DEV_HOST`（このプロジェクトの `xxx.pages.dev`）を設定すると、そこが独自ドメインへ 301 になることも確かめる。どれかが違うとジョブが失敗になる（公開は取り消さない）
4. IndexNow：確認が通ったら `node indexnow.js`。送信済みの記録は Actions のキャッシュで引き継ぐ（コミットはしない）
- PR ではビルドと検査だけを行い、公開しない（シークレットも使わない）
- シークレットまたは変数 `CF_PAGES_PROJECT` が無いときは公開以降を省略し、ログに「シークレット未設定のためデプロイを省略」等と出してジョブは成功にする
- 既存の `.github/workflows/pages.yml`（GitHub Pages に Cloudflare への転送ページを出す）はそのまま。別のワークフローで、互いに影響しない

### 運営者が一度だけ行う設定
1. Cloudflare ダッシュボード → My Profile → API Tokens → Create Token → Custom token。権限は **Account / Cloudflare Pages / Edit** の1つだけ。Account Resources はこのサイトのアカウントだけにする
2. GitHub のこのリポジトリ → Settings → Secrets and variables → Actions
   - Secrets タブ → New repository secret：`CLOUDFLARE_API_TOKEN`（1 で作ったトークン。値はどこにも貼らない・コミットしない）と `CLOUDFLARE_ACCOUNT_ID`（Cloudflare のアカウントID）
   - Variables タブ → New repository variable：`CF_PAGES_PROJECT`（Cloudflare の Workers & Pages で ai-shinchaku.com が付いているプロジェクトの名前。`deploy_ai_site.sh` の `--project-name` と同じ値）
   - （任意）Variables タブ：`CF_PAGES_DEV_HOST`（そのプロジェクトの `xxx.pages.dev`）
3. Actions タブ → deploy → Run workflow（main）で一度動かし、「Smoke test production URLs」が緑になることを確かめる

### Mac のスクリプトとの併用
`deploy_ai_site.sh` での公開と併用しても衝突しない。どちらも同じ `main` の中身を同じプロジェクトの本番（`--branch main`）に上げるだけで、後から上げたほうが本番になる。Mac から上げるときは、先に `git pull` して `main` と同じ状態にしてから実行する。

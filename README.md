# AIツール新着便
新しいAIツールを日本語で紹介する静的サイト。`node build.js` で dist/ を生成。データは data/tools.json。

## 運用の方針（2026-10-31）
- **扱うテーマ**：AIツールの料金・無料枠・使い方・選び方。AIツールと関係の薄い話題（ポイ活・物販・アフィリエイトの手順など）は載せない。すでにあるテーマ外の記事は、`data/articles.js` で `"noindex": true` にする（ページは残り、一覧・関連記事・sitemap・フィード・llms.txt から外れる）。例：`rakuyoko-rakuten-ichiba-shoukai`。
- **無料ツールの一覧**：検索向けの正のページは `/articles/muryou-ai-tool-ichiran/`（公式で1件ずつ確かめた一覧）。`/free/` はそこへ301。`/free-ai-tools/` は LINE 友だち特典のページなので `noindex`（料金欄の表記から機械的に集めた一覧で、件数は正のページと違ってよい）。
- **ニュースと記事の役割**：ニュース＝何が発表されたか（日付・出典・要約。任意で `impact` に「日本の利用者への影響」を1〜2文）。記事＝どう使う・いくら・誰向け。同じ話題の記事を書いてニュースが不要になったら、`data/news.js` で `merged: true` にし、`functions/_middleware.js` の `REDIRECTS` に旧URL→記事URLを足す（ニュースのURLは記事へ301）。
- **301リダイレクト**：Cloudflare Pages の `_redirects` は Functions が処理するリクエストに効かないため（全パスに `functions/_middleware.js` がある）、`functions/_middleware.js` の `REDIRECTS` で行う。`build.js` の `moved()` と組が合わないとビルド時に警告が出る。
- **日付**：記事の表示の更新日・JSON-LD の `dateModified`・sitemap の `lastmod` は、どれも `data/articles.js` の `updated`（なければ `date`）から作る。内容を直したら `updated` を変える。

# AIツール新着便 更新手順

作業場所: /workspace/agentic_biz/site （GitHub: https://github.com/888marui/ai-tools-shinchaku）

1. データ更新: data/articles.js（記事）, data/tools.json（ツール）, data/aio.js
   - 1x1トラッキング画像（pixel / width="1" height="1"）は入れない
   - アフィリエイトリンクは rel="sponsored nofollow" + PR表示
2. OG画像（新記事・新ツールがあるとき）: `python3 og.py`
3. ビルド: `node build.js`  → dist/ のあと `node check.js`（JSON-LD・サイト内リンク・404.html の検査）
4. デプロイ: `main` へのマージで GitHub Actions が自動で公開する（README「デプロイ（GitHub Actions）」。本番URLの確認と IndexNow も自動）。Mac から手動で出すときは（トークンは表示しない）:
   `/workspace/agentic_biz/deploy_ai_site.sh`（functions/込み＋pages.dev 301確認まで自動。wrangler直接実行は禁止）
5. 確認: トップと新ページが200を返すこと
   `curl -s -o /dev/null -w '%{http_code}' https://ai-shinchaku.com/`
6. IndexNow: `node indexnow.js`（`--dry` で送信せず確認）
7. コミットとプッシュ: `git add -A && git commit -m "..." && git push`

## 海外AIニュース（2時間ごとの更新で、1日1〜3本）
- 対象はAI関連だけ（暗号資産は扱わない）。発表元の公式ページ・一次情報だけを出典にする。
- data/news.js の先頭に追加：slug, date（発表日）, added（掲載日）, title, source, url（出典の完全なURL）, summary（3〜5文の配列）, comment（短い一言）, links（関連するツールページ・記事。サイト内の絶対パス）, article（任意）
- 書き方：自然な日本語。事実は出典にあることだけ。「未確認」やAIっぽい言い回し、最安値・No.1・格安、不安をあおる表現は使わない。
- 大きな新ツールや大型アップデートは、data/articles.js に詳しい記事（何か・できること・公式の料金・使い方・向いている人・出典）を書き、ニュースの article にそのslugを入れる。
- 1x1トラッキング画像は入れない。アフィリエイトリンクは rel="sponsored nofollow" + PR表示。
- そのあと通常どおり og.py → build → deploy → 200確認 → IndexNow → commit/push。

## 2026-10-31 に足した仕組み（README の「運用の方針」もあわせて読む）
- 記事の冒頭に「この記事の調べ方」が自動で入る（出典の `<pre><code>` のURLの数とドメイン・最終確認日・AIの利用）。人が確認した範囲を書くときは、記事に `"method": {"human": "…"}` を入れる（事実だけ）。
- 記事に出てくる用語（トークン・クレジット・API・従量課金・商用利用・MCP）の定義が冒頭近くに自動で入る。定義は build.js の `GLOSSARY`。違う意味で使う記事は skip に slug を足す。
- ツールページの追加の欄：data/tools.json の `more`（`fit` 向いている人／`notFit` 向かない人／`diff` 似たツールとの違い／`tried` 無料枠で実際に試したこと／`sources` 確認した公式ページ／`checked` 確認日）。公式ページで確認できたことだけを書き、確認できない欄は空のままにする。見本：notta・tldv。
- 出典は `<pre><code>` にURLを1行ずつ書く（ビルドでリンクの箇条書きになる）。
- 記事を書いてニュースが要らなくなったら、ニュースに `merged: true` を付け、`functions/_middleware.js` の `REDIRECTS` に足す。
- 記事の title（build.js の STO）・description（data/seo_fix.json の meta）の「Nつ」が見出しと食い違うと、ビルドで `[要確認]` の警告が出る。

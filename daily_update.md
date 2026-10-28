# AIツール新着便 更新手順

作業場所: /workspace/agentic_biz/site （GitHub: https://github.com/888marui/ai-tools-shinchaku）

1. データ更新: data/articles.js（記事）, data/tools.json（ツール）, data/aio.js
   - 1x1トラッキング画像（pixel / width="1" height="1"）は入れない
   - アフィリエイトリンクは rel="sponsored nofollow" + PR表示
2. OG画像（新記事・新ツールがあるとき）: `python3 og.py`
3. ビルド: `node build.js`  → dist/
4. デプロイ（トークンは表示しない）:
   `CLOUDFLARE_ACCOUNT_ID=6deec0878d763367266ed69fe82a793d WRANGLER_CACHE_DIR=/tmp/wcache npx wrangler pages deploy dist --project-name ai-tools-shinchaku --branch main`
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

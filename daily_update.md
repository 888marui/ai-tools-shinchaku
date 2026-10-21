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
   `curl -s -o /dev/null -w '%{http_code}' https://ai-tools-shinchaku.pages.dev/`
6. IndexNow: `node indexnow.js`（`--dry` で送信せず確認）
7. コミットとプッシュ: `git add -A && git commit -m "..." && git push`

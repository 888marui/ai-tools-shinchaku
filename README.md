# AIツール新着便
新しいAIツールを日本語で紹介する静的サイト。`node build.js` で dist/ を生成。データは data/tools.json。

## 運用の方針（2026-10-31）
- **扱うテーマ**：AIツールの料金・無料枠・使い方・選び方。AIツールと関係の薄い話題（ポイ活・物販・アフィリエイトの手順など）は載せない。すでにあるテーマ外の記事は、`data/articles.js` で `"noindex": true` にする（ページは残り、一覧・関連記事・sitemap・フィード・llms.txt から外れる）。例：`rakuyoko-rakuten-ichiba-shoukai`。
- **無料ツールの一覧**：検索向けの正のページは `/articles/muryou-ai-tool-ichiran/`（公式で1件ずつ確かめた一覧）。`/free/` はそこへ301。`/free-ai-tools/` は 2026-11-06 のLINE廃止決定によりトップへ301（旧LINE友だち特典ページ）。
- **ニュースと記事の役割**：ニュース＝何が発表されたか（日付・出典・要約。任意で `impact` に「日本の利用者への影響」を1〜2文）。記事＝どう使う・いくら・誰向け。同じ話題の記事を書いてニュースが不要になったら、`data/news.js` で `merged: true` にし、`functions/_middleware.js` の `REDIRECTS` に旧URL→記事URLを足す（ニュースのURLは記事へ301）。
- **301リダイレクト**：Cloudflare Pages の `_redirects` は Functions が処理するリクエストに効かないため（全パスに `functions/_middleware.js` がある）、`functions/_middleware.js` の `REDIRECTS` で行う。`build.js` の `moved()` と組が合わないとビルド時に警告が出る。
- **日付**：記事の表示の更新日・JSON-LD の `dateModified`・sitemap の `lastmod` は、どれも `data/articles.js` の `updated`（なければ `date`）から作る。内容を直したら `updated` を変える。

## AIガジェット（物理製品・2026-11-09）
- `data/tools.json` の `category: "AIガジェット"` で扱う。機器の項目は `gadget`：`maker`・`price`（本体価格の表記）・`priceShort`（一覧のラベル）・`priceChecked`（確認日）・`subscription`（月額サブスクの有無）・`apps`（対応OS・アプリ）。任意で `released`（発売日）・`spec`・`offer`（JSON-LD の価格・円）・`giteki`（技適など国内利用の可否。公式に記載があるときだけ）・`sources`。
- 既存のツール（Plaud・AutoMemo）は主カテゴリのまま、`extraCategories: ["AIガジェット"]` でカテゴリページにも出す。`gadget` があれば、ツールページの表に製品情報の行が付く。
- `affiliate` がない機器の CTA は「公式サイトを見る」（直リンク・PR表記なし）。Amazon は、もしも経由が否認されたため Amazonアソシエイト（直接・ID `aishinchaku-22`）に変更。`affiliate` ではなく専用の `amazon: {asin, verified}` に入れる（下の「Amazonアソシエイト」参照）。構造化データは `Product`。`check.js` の 10) で必須項目と PR 表記を検査する。

## Amazonアソシエイト（直接・2026-11-13）
- `data/tools.json` のツールに `amazon: {"asin": "<10桁>", "verified": "YYYY-MM-DD"}` を入れると、`build.js` がツールページと、そのツールを紹介する記事に「Amazonで見る」の**副ボタン**（買えるお店）を出す。主な CTA（`affiliate` や公式サイトへの直リンク）は変えない。リンクは `https://www.amazon.co.jp/dp/<ASIN>?tag=aishinchaku-22` だけ。
- **ASIN は、Amazon の商品ページを開いて製品名・型番が一致することを確認したものだけ**入れる（`verified` はその確認日）。検索結果ページ・短縮URL（amzn.to など）・メールやSNS・オフラインでの利用は禁止。自己購入での報酬も禁止。
- Amazon の価格・在庫・レビュー点数・画像は、表示も `tools.json` への保存もしない（Product Advertising API を使わない限り不可）。本体価格は従来どおり公式サイトで確認した値と確認日。ボタンの近くに「価格・在庫はAmazonの商品ページで確認してください。」と、関係の明記（「Amazonのアソシエイトとして、当サイトは適格販売により収入を得ています。」）、PR バッジを出す。
- `check.js` の 7) で、Amazon リンクの形（dp/ASIN と tag のみ）・rel（sponsored nofollow noopener）・注記ブロック内の PR/注記・価格や在庫らしい表示がないこと・Amazon 由来の画像やタグがないこと・プライバシーポリシーの関係明記を検査する。他の広告ドメインの許可リスト（`AD_HOSTS`）は変えていない。

## アクセス解析（GA4・2026-11-09）
- 測定IDは `build.js` の `GA4_ID`（G-2FG56R9HJ7。公開してよい値）だけ。全ページの head で gtag.js を非同期で読み込む。外部リンクのクリックは GA4 の拡張計測（離脱クリック）で自動計測される。
- 広告リンク（`rel="sponsored"`）のクリックは、あわせて `aff_click` イベント（`tool`＝tools.json の slug、`asp`、`position`＝cta_top / cta_box / cta_sticky / inline、`link_url`、`utm_source`、`utm_medium`）を送る。ランディングの UTM は sessionStorage に残し、サイト内遷移後も動画流入を切り分けられる。`data-tool` はビルド時に付く（A8 は a8mat のプログラム部分、もしもは p_id で tools.json の `affiliate.url` と照合）。見方は team_kb `projects/GA4_aff_clickのUTM切り分け.md`。
- プライバシーポリシーに GA4・Cookie・Google のポリシー・オプトアウト アドオンの記載がある（`check.js` で検査）。

## デプロイ（GitHub Actions）
`main` に push（PR のマージ）すると `.github/workflows/deploy.yml` が自動で公開する。Actions タブの「deploy」→「Run workflow」で手動実行もできる。

1. ビルド：`node build.js`（最初に `python3 og.py` を呼ぶ。Pillow と Noto Sans CJK は Actions で入れる。作った OG 画像はコミットされず、公開物にだけ入る）→ `node check.js`（JSON-LD が読める・サイト内リンク切れ0・404.html が noindex・sitemap.xml がある・GA4 の測定IDが1つだけで全ページに gtag.js がある・プライバシーポリシーに GA4 の記載がある）
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

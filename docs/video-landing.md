# 動画の受け皿ページの型（2026-11-09更新）

方針：ショート動画＝入口、サイト記事＝申し込みの受け皿。動画で紹介したツールごとに1本、`data/articles.js` に記事として足す。

見本：
- `rakurin-tsukaikata-tejun`（ラクリン）
- `conoha-ai-canvas-tsukaikata-tejun`（ConoHa AI Canvas・2026-11-09追加）

詳細な運用メモ：`/workspace/team_kb/projects/動画受け皿ページの型.md`

## 構成（この順）
1. **手順の完全版**：登録〜使い始めまでを番号付きで。公式サイトに書かれている手順だけを書き、書かれていない画面の流れは「公式サイトには書かれていません」と書く
2. **向いている人・向かない人**：公式の仕様（無料枠・繰り越し・解約条件など）から言えることだけを書く
3. **料金と無料枠（確認日）**：見出しか表の前に「YYYY年M月D日に公式サイトで確認」を入れる。公式で確かめられない金額は書かない（「公式の公開ページに記載なし」）
4. **提携しているツールとの比較（2〜3件）**：`data/tools.json` に `affiliate` があるツールから選ぶ。順位づけはしない
5. **申し込みボタン**：`class="cta"`＋`rel="sponsored nofollow noopener"`＋`<span class="pr">PR</span>`。リンクは ASP が発行したもの（tools.json の `affiliate.url`）だけを使う。捏造しない
6. **PR表記と出典**：PR の宣言は build.js が冒頭に自動で入れる。末尾に `<h2>出典（公式）</h2><pre><code>URL…</code></pre>`

## 動画からのUTM
動画キャプションやプロフィールのリンクには、受け皿URLへ次を付ける：
- Instagram: `?utm_source=instagram&utm_medium=social&utm_campaign=<slug>`
- Threads: `?utm_source=threads&utm_medium=social&utm_campaign=<slug>`
- TikTok: `?utm_source=tiktok&utm_medium=social&utm_campaign=<slug>`
- X: `?utm_source=x&utm_medium=social&utm_campaign=<slug>`

`aff_click` はランディングの `utm_source` / `utm_medium` を sessionStorage 経由で保持し、サイト内遷移後の広告クリックでも送る。見方は `team_kb/projects/GA4_aff_clickのUTM切り分け.md`。

## 使わない表現
誇張・No.1・最安・格安・恐怖訴求。ASP の素材（バナー・文言）は改変しない。LINEボタンは付けない。

## TODO
- スピーク：A8審査中のため広告リンクがない。承認後にこの型で「無料体験の始め方」を作る

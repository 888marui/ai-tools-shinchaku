# 内部リンクの記録

Search Console のデータが手に入らない時期に、データなしでできる範囲で内部リンクを足した記録。あとで Search Console の数字と比べて効果を見るために残す。

## 2026-11-02：話題ごとのハブへのリンク

### やり方
- 話題ごとに「まとめ（ハブ）」の記事を1本決め、読者がそのページを探すときに使いそうな言葉を、タイトル・見出し・本文に実際にある言葉から選んだ（検索ボリュームは推測していない）。
- 同じ話題の個別記事の本文で、その言葉や話題が出てくる箇所（または既存の「関連」の並び）にハブへのリンクを付けた。ハブからは、まだリンクがなかった個別記事へのリンクを足した。
- 1ページに足したリンクは最大3本。同じページから同じリンク先へ2本以上は足していない。ハブへの文言はページごとに変えた。
- 本文の文字の変更は、リンクの付与と、リンクを置くための最小限の言葉（「や」「／」と記事名、opusclip の1文）だけ。料金などの数字は変えていない。
- noindex のページ（`/free-ai-tools/`、`rakuyoko-rakuten-ichiba-shoukai`）と、転送されるURL（`/free/`、merged のニュース）へはリンクを足していない。
- 記事の `updated` は変えていない（事実の内容は変えていないため）。

### ハブと言葉

| 話題 | ハブ | 選んだ言葉（ページ内にある言葉） |
|---|---|---|
| 議事録・文字起こし | `/articles/ai-gijiroku-tool-hikaku/` | AI議事録ツール／議事録ツール 比較／会議の議事録 |
| 無料のAIツール | `/articles/muryou-ai-tool-ichiran/` | 無料で使えるAIツール／無料プラン AIツール／無料 AIツール 一覧 |
| AIチャット | `/articles/chatgpt-igai-ai-hikaku/` | ChatGPT以外／ChatGPT 代わり／AIチャット比較 |
| 画像生成 | `/articles/gazou-seisei-ai-muryou/` | 画像生成AI 無料／無料で使える画像生成AI |
| 動画 | `/articles/douga-seisei-ai-hikaku/` | 動画生成AI／動画生成AI 比較 |
| 文章・ブログ | `/articles/ai-writing-tool-hikaku/` | AIライティングツール／AIライティングツール 比較 |
| ホームページ作成 | `/articles/ai-homepage-sakusei-hikaku/` | AIでホームページ作成／AIホームページ作成ツール 比較 |

コーディング（Cursor・Claude 関連）は、まとめになる比較記事がまだないため、今回はハブを決めていない。

### 足したリンク（19本・12ページ）

| リンク元 | リンク先 | 文言 | 種類 |
|---|---|---|---|
| `/articles/notta-tsukaikata-ryoukin/` | `/articles/ai-gijiroku-tool-hikaku/` | AI議事録ツール | 個別→ハブ |
| `/articles/ai-gijiroku-tool-hikaku/` | `/articles/tldv-tsukaikata-ryoukin/` | tl;dvの使い方・料金 | ハブ→個別 |
| `/articles/ai-gijiroku-tool-hikaku/` | `/articles/withteam-mojiokoshi-hyouban/` | 評判と料金のまとめ | ハブ→個別 |
| `/articles/gemini-muryou-dekirukoto/` | `/articles/muryou-ai-tool-ichiran/` | 無料プランがあるAIツールの一覧 | 個別→ハブ |
| `/articles/chatgpt-muryou-dekirukoto/` | `/articles/muryou-ai-tool-ichiran/` | 無料で始められるAIツール一覧 | 個別→ハブ |
| `/articles/notebooklm-muryou-jougen/` | `/articles/muryou-ai-tool-ichiran/` | 無料で使えるAIツールのまとめ | 個別→ハブ |
| `/articles/irusiru-hyouban-ryoukin/` | `/articles/muryou-ai-tool-ichiran/` | 無料プランのあるAIツール（公式で確認した一覧） | 個別→ハブ |
| `/articles/chatgpt-igai-ai-hikaku/` | `/articles/chatgpt-muryou-dekirukoto/` | ChatGPT無料版でできること | ハブ→個別 |
| `/articles/chatgpt-igai-ai-hikaku/` | `/articles/gemini-muryou-dekirukoto/` | Gemini無料版の上限 | ハブ→個別 |
| `/articles/chatgpt-igai-ai-hikaku/` | `/articles/claude-haiku-5-5/` | Claude Haiku 5.5の料金とできること | ハブ→個別 |
| `/articles/gazou-seisei-ai-muryou/` | `/articles/gemini-muryou-dekirukoto/` | Gemini | ハブ→個別 |
| `/articles/gazou-seisei-ai-muryou/` | `/articles/napkin-muryou-dokomade/` | Napkin AI | ハブ→個別（孤立気味） |
| `/articles/douga-seisei-ai-hikaku/` | `/articles/descript-muryou-dokomade/` | Descript | ハブ→個別 |
| `/articles/douga-seisei-ai-hikaku/` | `/articles/fliki-tsukaikata-shouyou/` | Flikiの使い方と商用利用 | ハブ→個別（孤立気味） |
| `/articles/opusclip-tsukaikata-ryoukin/` | `/articles/douga-seisei-ai-hikaku/` | 動画生成AIの比較 | 個別→ハブ |
| `/articles/ai-writing-tool-hikaku/` | `/articles/value-ai-writer-ryoukin-hyouban/` | Value AI Writer | ハブ→個別 |
| `/articles/ai-writing-tool-hikaku/` | `/articles/doraverse-tsukaikata-ryoukin/` | Doraverse | ハブ→個別 |
| `/articles/ai-writing-tool-hikaku/` | `/articles/ai-blog-jidouka/` | ブログ記事の作成に特化したツール | ハブ→個別 |
| `/articles/ai-homepage-sakusei-hikaku/` | `/articles/lolipop-ai-homepage-ryoukin/` | ロリポップ！AIホームページ | ハブ→個別（孤立気味） |

記事ごとに足した本数：ai-writing-tool-hikaku 3、chatgpt-igai-ai-hikaku 3、ai-gijiroku-tool-hikaku 2、gazou-seisei-ai-muryou 2、douga-seisei-ai-hikaku 2、ほかは各1（どれも3本以内）。

「孤立気味」は、変更前に本文・`data/seo_fix.json` からのリンクが1本だけだった記事。

### 補足
- 自動で入る欄（「あわせて読みたい記事」「次にやること」の「無料で使えるツール」ボタン）に同じリンク先がすでにあるページがある（例：どの記事にも `/articles/muryou-ai-tool-ichiran/` へのボタンがある）。手書きの本文の中では、どのリンク先も1本だけ。
- ツールページの本文は `data/tools.json` からエスケープして作られ、「紹介している記事」も自動で入るため、今回は変えていない。
- 記事の本文の文言にツール名を新しく足すと、`build.js` の `artTools`（本文にツール名があるかで判定）で「紹介したツール」やPRボタンが変わる。今回の文言はどれも、そのページにすでにあるツール名だけを使っている。

### 確認
- `node build.js && node check.js`：OK（120 html、内部リンク 3,937、JSON-LD 306、エラー0）
- 変更前後の dist を比べ、変わったのは上の12ページだけ（内部リンク 3,918 → 3,937 で +19）。増えた href は上の表のとおりで、消えたリンクはない。

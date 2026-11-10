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

## 2026-11-02：記事の末尾に「この話題のまとめ記事」
- 上のハブと同じ組み合わせを `build.js` の `HUBS` に入れ、記事の末尾に理由つきで出すようにした（スライド作成 `ai-slide-sakusei-hikaku`・音声読み上げ `ai-yomiage-elevenlabs-voicevox` を足した）。ハブを足すときは `HUBS` も直す。くわしくは `docs/ctr-changes.md`。

## 2026-11-03：Search Console のクエリに合わせた内部リンク

Search Console のデータが入ったので、表示のあるクエリごとに、対象ページへクエリの言葉を含む文言でリンクを足した。2〜4週間後（2026-11-17〜12-01ごろ）に下の基準値と比べる。

### 基準値（Search Console、過去28日・実データは 2026-10-27〜10-31、2026-11-03 取得）
平均掲載順位は約21位。

| クエリ | クリック | 表示 |
|---|---|---|
| マドレス | 1 | 10 |
| treg webaccess | 1 | 1 |
| ラクリン 評判 | 0 | 8 |
| plaud | 0 | 4 |
| okamai | 0 | 2 |

| ページ | クリック | 表示 |
|---|---|---|
| `/tools/madoless/` | 1 | 10 |
| `/tools/treg-free-webaccess/` | 1 | 2 |
| `/tools/rakurin/` | 0 | 12 |
| `/articles/rakurin-hyouban-ryoukin/` | 0 | 6 |
| `/tools/elevenlabs/` | 0 | 5 |

### 変更前の状態（変更前の dist から数えた、対象ページへのリンク）
- `/tools/madoless/`：トップとカテゴリの一覧だけ（本文・ほかのツールページからは0本）。「似たツール」が同じカテゴリの先頭4件（新しいツール）で埋まるため、業務効率化の12件のうちマドレスはどこにも出ていなかった。
- `/tools/treg-free-webaccess/`：開発カテゴリのツールページ5つの「似たツール」から「Free WebAccess（treg）」でリンクあり。本文の説明つきのリンクはなし。
- `/articles/rakurin-hyouban-ryoukin/`：本文から4ページ（ai-blogkun・value-ai-writer・ai-blog-wordpress・muryou-ai-tool-ichiran）、自動の「次に読む記事」・ツールページから。`/articles/ai-writing-tool-hikaku/` は本文でラクリンを紹介しているのに評判記事へのリンクがなかった。
- `/tools/plaud/`・`/articles/plaud-tsukaikata-ryoukin/`：どちらも「Plaud」を含む文言で、記事3本・ツールページ数本からリンク済み（足していない）。
- `/tools/okamai/`：業務効率化のツールページ11個の「似たツール」から「OKamAI（オカマイ）」でリンク済み。

### 足したリンク（4本・4ページ）

| リンク元 | リンク先 | 文言 | 置いた場所 |
|---|---|---|---|
| `/articles/ai-writing-tool-hikaku/` | `/articles/rakurin-hyouban-ryoukin/` | ラクリンの評判と料金のまとめ | ラクリンの段落の「詳しくは〜へ」 |
| `/tools/okamai/` | `/tools/madoless/` | マドレス（との違い） | 新しい欄「似たツールとの違い」（`data/tools.json` の `more.diff`） |
| `/tools/madoless/` | `/tools/okamai/` | OKamAI（オカマイ）（との違い） | 同上 |
| `/tools/tinyfish-search-fetch/` | `/tools/treg-free-webaccess/` | Free WebAccess（treg）（との違い） | 同上 |
| `/tools/treg-free-webaccess/` | `/tools/tinyfish-search-fetch/` | TinyFish Search / Fetch（との違い） | 同上 |

- `more.diff` の文は、`data/tools.json` の summary・pricing にある事実だけで書き、2026-11-03 に公式ページ（`more.sources` の2つ）で中身を確かめた。マドレスの料金は「未確認」のまま。
- マドレス⇔OKamAI は「案内・問い合わせに答えるAI」という点が近い組み合わせ、treg⇔TinyFish は「tregがまず無料のTinyFishを使う」関係。
- 同じページで同じリンク先を2本にしないため、`build.js` の `toolNext()`（末尾の「似たツール」）から、`more.diff` で違いを書いたツールを外すようにした。これで `/tools/notta/`⇔`/tools/tldv/` の「似たツール」の重複も消えた（違いの欄のリンクは残る。空いた枠には同じカテゴリ・同じ記事のツールが入る：notta・tldv に OpusClip、madoless にロリポップ！AIホームページ、tinyfish・treg に Muse Spark Open）。
- 本文に新しくツール名は足していない（`artTools` の判定は変わらない）。広告リンク（`rel="sponsored nofollow"` 240本）と PR 表記（`class="pr"`）は変更前後で同じ数。

### 足さなかったもの
- マドレス・OKamAI・treg を本文で自然に紹介できる記事はまだない（業務効率化・AIエージェント向けAPIの記事がない）。記事に無理に名前を足すと「紹介したツール」やボタンも増えるため、ツールページの「似たツールとの違い」にとどめた。
- 「ラクリン 評判」：`ai-blog-jidouka` は自動の「次に読む記事」にすでに評判記事があるので、本文には足していない（同じページで2本になるため）。`ai-blogkun-hyouban-ryoukin`・`value-ai-writer-ryoukin-hyouban` は本文の「ラクリン」の文言のまま（同じページに自動のリンクもすでにある）。
- `/tools/rakurin/` と `/articles/rakurin-hyouban-ryoukin/` は互いにリンクしている（記事の「関連」→ツールページ、ツールページの「ラクリンを紹介している記事」→記事）。変更なし。

### 確認
- `node build.js && node check.js`：OK（121 html、内部リンク 3,885、JSON-LD 309、エラー0）。変更前は内部リンク 3,880。

## 2026-11-03：議事録・文字起こしのハブを固定し、検査に入れた（#11）

- ハブ：`/articles/ai-gijiroku-tool-hikaku/`。個別記事：tl;dv・Notta・Plaud・WITH TEAM の各記事、`notta-tldv-chigai`、`mojiokoshi-ai-hikaku`、`muryou-mojiokoshi-ai`、`gijiroku-ai-jidouka`（8本）。記事の統合（301）は GSC のデータがたまってから決めるので、今回はしていない。
- 変更前の dist で確かめたところ、8本とも「個別→ハブ」「ハブ→個別」のリンクはすでにあった（`notta-tldv-chigai`・`muryou-mojiokoshi-ai`・`gijiroku-ai-jidouka` からハブへは、末尾の「この話題のまとめ記事」の自動リンクだけ。同じページで2本にしないため、本文には足していない）。
- これを今後も崩さないため、`build.js` の `HUBS` を `data/hubs.json` に移し、`check.js` で「個別記事→ハブ」「ハブ→個別記事」の両方のリンクがあるかを検査するようにした（noindex の記事は対象外）。ハブや個別記事を足すときは `data/hubs.json` を直す。
- 検査を入れたら、文章・ブログのハブ `ai-writing-tool-hikaku` から `rakurin-hyouban-ryoukin`・`ai-blogkun-hyouban-ryoukin` へのリンクがなかったので、本文の「詳しくは〜へ」に足した（ラクリンのほうは PR #10 と同じ変更）。

## 2026-11-03：トップのツール一覧は新着10件だけ（#14）

- トップの HTML には新着10件のカードだけを出す（これまでは55件すべてを HTML に入れ、11件目以降を隠していた）。検索とカテゴリの絞り込みは、全件の軽いデータ（slug・名前・カテゴリ・概要・値札）からカードを描くので、絞り込み結果の件数は変更前と同じ（「文字起こし」7件、「無料」32件、動画8件で確認）。絞り込み時のカードには、日本語対応のラベルと追加日・確認日は出さない。
- 一覧の下に「カテゴリから探す」（9カテゴリへのリンクと件数）と、無料で使えるAIツール一覧へのリンクを置いた。トップから個別のツールページへのリンクは55本→10本になり、残りはカテゴリページ経由でたどれる。
- トップの HTML：87,761 → 68,747 バイト。

## 2026-11-10：週次（Search Console の検索語から）

データ：`888marui/claude` の requests ブランチ `requests/data/gsc/2026-11-10_queries_ai-shinchaku.csv`・`_pages_ai-shinchaku.csv`（過去28日）。ページ×検索語の組み合わせは無いので、検索語の言葉と各ページのタイトル・本文から対応を推定した。対象は平均掲載順位4〜15で、表示があってクリックが少ない検索語。

### 対応表

| 検索語 | クリック/表示 | 順位 | 答えになっているページ（ページの表示・順位） | 今回 |
|---|---|---|---|---|
| マドレス | 3/17 | 14.7 | `/tools/madoless/`（21・13.9） | 0本（下の「足さなかったもの」） |
| ラクリン 評判 | 0/16 | 5.3 | `/articles/rakurin-hyouban-ryoukin/`・`/tools/rakurin/`（14・32／32・13.7） | 0本（言及のある記事はすべてリンク済み） |
| deep review 使い方／ディープレビュー／deep review 日本語／deep review | 0/6 | 5〜15 | `/tools/deep-review/`（11・7.6） | 0本 |
| claude gpt | 0/2 | 10.5 | `/articles/claude-chatgpt-muryou-chigai/`（5・8.2） | **4本** |
| チャット gpt gemini 無料 | 0/2 | 10 | `/articles/gemini-chatgpt-muryou-chigai/`（13・6.3） | 0本（言及のある記事は本文か自動の「次に読む記事」でリンク済み） |
| ノートブックlm／ノートブック ジェミニ | 0/3 | 13〜15 | `/tools/notebooklm/`（5・18.8） | **2本** |
| 生成ai chatgpt以外 | 0/2 | 15 | `/articles/chatgpt-igai-ai-hikaku/`（7・16.1） | 0本（ハブ。リンク済み） |
| okamai | 0/2 | 8.5 | `/tools/okamai/`（4・6.3） | 0本 |
| インビデオウズ | 0/2 | 8.5 | `/tools/invideo/`（8・15） | 0本（言及のある記事はリンク済み） |
| hitotas | 0/2 | 9 | `/tools/hitotas-ai/`（4・8.3） | 0本 |
| スブリ | 0/1 | 8 | `/tools/suburi/`（3・6.7） | 0本 |
| カンリー aio | 0/1 | 9 | `/tools/canly-aio/`（11・8） | 0本 |
| japan ai 使い方 | 0/1 | 10 | `/tools/japan-ai-browser-assistant/`（14・6.5） | 0本 |
| プラウドとは／phoud | 0/2 | 10 | `/tools/plaud/`（20・19.9） | 0本（リンク済み） |

対象外：treg webaccess（3位）、ディープフェイク 電話（1/3・6.3。クリックあり。ほかに言及する記事なし）、site: 付きの検索語、順位15より下の検索語。

### 足したリンク（6本・6ページ）

| リンク元 | リンク先 | 文言 | 置いた場所 |
|---|---|---|---|
| `/articles/claude-haiku-5-5/` | `/articles/claude-chatgpt-muryou-chigai/` | ClaudeとChatGPTの違い | 「どんな人に向いている？」の、ChatGPT以外の比較への案内の後ろに1文 |
| `/articles/claude-code-mcp-tasks/` | `/articles/claude-chatgpt-muryou-chigai/` | ClaudeとChatGPTの違い（無料版と有料プラン） | 「料金」の表の説明（FreeではClaude Codeなし）の後ろに1文 |
| `/articles/ai-tool-neage-plan-kirikae/` | `/articles/claude-chatgpt-muryou-chigai/` | ClaudeとChatGPTの無料版の違い | 料金ページの表の下、無料AIツール一覧への案内の後ろに1文 |
| `/articles/chatgpt-igai-ai-hikaku/` | `/articles/claude-chatgpt-muryou-chigai/` | ClaudeとChatGPT、どっちがいい？ | 末尾の「AIライティングツール比較」への案内の後ろに1文 |
| `/articles/ai-gijiroku-tool-hikaku/` | `/tools/notebooklm/` | NotebookLM（Gemini Notebook）のツールページ | 「NotebookLM」の節の最後に1文 |
| `/articles/gijiroku-ai-jidouka/` | `/tools/notebooklm/` | NotebookLM | 既存の文「たまった議事録に質問して振り返るならNotebookLMも使えます」の語にリンク（文言は変えていない） |

- どのリンク元も、変更前はそのリンク先へのリンクが0本（自動の欄を含む）。自己リンクなし。見出し・導入・既存リンクは変えていない。足した文は、そのページにすでにあるツール名（Claude・ChatGPT・NotebookLM）だけを使ったので、`artTools` の「紹介したツール」やPRボタンは変わっていない（変更前後の dist で、増えた href は上の6本だけ、消えた href は無し）。
- `/articles/claude-chatgpt-muryou-chigai/` は、変更前は記事一覧と `/tools/chatgpt/` からしかリンクされていなかった。

### 足さなかったもの
- マドレス・Deep Review・OKamAI・HITOTAS・スブリ・カンリー AIO・JAPAN AI は、ツールページ以外で名前が出てくる記事がない。名前を記事に新しく足すと「紹介したツール」やボタンが変わるため、今回は足していない。業務効率化・AI検索対策（AIO）の記事ができたら、そこからリンクする。
- `muryou-ai-tool-ichiran` の「今回載せなかったツール」の NotebookLM は、無料プランの記載を読み取れなかった、という文脈なのでツールページ（無料で利用可と記載）へのリンクは付けていない。なお同じ段落の「無料で使えるAIツール一覧」のリンクは自分自身へのリンクになっている（既存リンクのため、今回は触っていない）。

### 質問文の検索語（とは・使い方）の確認
- 「プラウドとは」：`/tools/plaud/` の概要の1文目が「会話・通話・オンライン会議を録音し、AIが文字起こし・要約するAIボイスレコーダー」で、名前に「（プラウド）」もあり、答えになっている。変更なし。
- 「deep review 使い方」「japan ai 使い方」：`/tools/deep-review/`・`/tools/japan-ai-browser-assistant/` は概要と「主な使い方」（uses）はあるが、使い始めの手順は書かれていない。手順は公式ページで確かめてから足す必要があり、今回は確認していないので足していない（次回以降の候補）。

### 確認
- `node build.js && node check.js`：OK（141 html、内部リンク 4,586 → 4,592、JSON-LD 358、エラー0）

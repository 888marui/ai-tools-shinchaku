const N='https://notta.cello.so/poV7STKwa5L';
const cta=`<p><a class="cta" href="${N}" rel="sponsored nofollow noopener" target="_blank">Nottaを無料で試す</a><span class="pr">PR</span></p><p class="muted">上のボタンはアフィリエイトリンク（PR）です。Nottaのフリープランはクレジットカード登録不要です（公式料金ページより）。</p>`;
const note=`<p class="muted">料金・機能は2026年10月16日に各公式サイトで確認した内容です。変更されることがあるため、申し込み前に必ず公式サイトをご確認ください。「未確認」は公式サイトで確認できなかった項目です。</p>`;
const note2=`<p class="muted">更新日：2026年10月20日。料金・機能は2026年10月16〜20日に各公式サイトで確認した内容です（当サイトの各ツールページの「情報確認日」も参照）。変更されることがあるため、申し込み前に必ず公式サイトをご確認ください。「未確認」は公式サイトで確認できなかった項目です。</p>`;
module.exports=[
{slug:'mojiokoshi-ai-hikaku',date:'2026-10-16',title:'文字起こしAIツール比較｜Notta・Rimo Voice・Otter・tl;dvの料金と向いている人',desc:'主要な文字起こし・AI議事録ツール4つを、公式サイトで確認した料金・無料枠・日本語対応で比較。どんな人に向いているかも整理しました。',body:`<h1>文字起こしAIツール比較：Notta・Rimo Voice・Otter・tl;dv</h1>${note}
<h2>比較表</h2><table><tr><th>ツール</th><td><b>無料枠</b>／<b>有料の例</b>／<b>日本語</b></td></tr>
<tr><th>Notta</th><td>フリー0円（120分/月・1回3分まで）／プレミアム1,185円/月（年払い・税込）／対応（日本語特化AIと58言語対応と明記）</td></tr>
<tr><th>Rimo Voice</th><td>無料ではじめられる（条件は未確認）／プロ4,950円・チーム6,600円（月払い・税込）／対応（日本語に特化と明記）</td></tr>
<tr><th>Otter</th><td>Basic無料（300分/月）／Pro 月払い$16.99/ユーザー／日本語の文字起こしに対応と料金ページに記載。サイトは英語</td></tr>
<tr><th>tl;dv</th><td>Free 0ユーロ（無料枠の条件は未確認）／Pro 月払い€29/席・Business €39/席／未確認</td></tr></table>
<h2>それぞれ向いている人</h2>
<h3>Notta：まず無料で試したい個人・少人数のチーム</h3><p>Web会議・対面・音声ファイルの文字起こしに加え、要点・決定事項・タスクの整理、議事録の下書きまでできます。カード登録なしの無料プランがあり、有料も月1,000円台からなので、個人で試しやすい価格帯です。無料プランは1回3分までなので、長い会議は有料プランが前提になります。</p>${cta}
<h3>Rimo Voice：日本語の会議が中心で、セキュリティを重視する会社</h3><p>日本語会話に特化していること、ISO27001・ISO27017の認証、データの国内保管を公式サイトでうたっています。会社として導入したい場合の候補です。料金はNottaより高めです。</p>
<h3>Otter：英語の会議が多い人</h3><p>英語圏で広く使われているツールで、無料のBasicでも月300分使えます。日本語の文字起こしにも対応と書かれていますが、画面やサポートは英語が中心です。</p>
<h3>tl;dv：Web会議の録画と共有を重視するチーム</h3><p>Web会議の録画・記録向けのツールです。料金はユーロ建てで、日本語対応は公式サイトで確認できませんでした。</p>
<h2>選び方のまとめ</h2><ul><li>とにかく無料で試したい：Nottaのフリー、Otterの Basic</li><li>日本語の社内会議を会社で導入：Rimo Voice、Notta ビジネス</li><li>英語の会議が多い：Otter</li></ul>
<p>関連：<a href="../gijiroku-ai-jidouka/">会議の議事録をAIで自動化する方法</a>／<a href="../muryou-mojiokoshi-ai/">無料で使える文字起こしAI</a></p>
<p class="muted">公式サイト：https://www.notta.ai/ ／ https://rimo.app/ ／ https://otter.ai/pricing ／ https://tldv.io/app/pricing</p>`},
{slug:'gijiroku-ai-jidouka',date:'2026-10-16',title:'会議の議事録をAIで自動化する方法｜準備から共有までの手順',desc:'AI議事録ツールで会議の記録・要約・共有を自動化する手順を、録音の同意や確認の注意点とあわせて解説します。',body:`<h1>会議の議事録をAIで自動化する方法</h1>${note}
<h2>1. どこまで任せるか決める</h2><p>AI議事録ツールに任せられるのは、主に「録音・文字起こし」「要約」「決定事項やタスクの抜き出し」です。最終的な内容の確認は人が行う前提で考えます。AIの文字起こしや要約には誤りが入ることがあります。</p>
<h2>2. ツールを選ぶ</h2><p>Web会議（Zoom・Teams・Google Meet）に参加して自動で記録するタイプが多く、Notta・Rimo Voice・Otterなどが対応をうたっています。違いは<a href="../mojiokoshi-ai-hikaku/">文字起こしAIツール比較</a>にまとめました。</p>
<h2>3. 参加者の同意をとる</h2><p>録音・記録することを、会議の冒頭や招待文で参加者に伝えます。社外の人がいる会議では特に大切です。会社の情報管理ルールも確認しましょう。</p>
<h2>4. 会議ごとの流れ</h2><ol><li>カレンダーとツールを連携し、会議に自動参加させる（または手元で録音する）</li><li>会議後、文字起こしと要約を確認し、固有名詞や数字の誤りを直す</li><li>決定事項とタスクを担当者ごとに整理する</li><li>議事録を共有する（ツールの共有機能や、SlackやNotionなどへの転記）</li></ol>
<h2>5. 精度を上げるコツ</h2><ul><li>専門用語や社内用語を単語登録する（Rimo Voice・Otterなどに機能あり）</li><li>マイクに近い位置で話す、同時に話さない</li><li>要約の型（議題・決定事項・宿題）を決めておく</li></ul>
<h2>Nottaで始める場合</h2><p>Nottaは要点・話者・決定事項・タスクの整理と議事録の下書きに対応しています。フリープラン（120分/月・1回3分まで）で操作感を確かめ、長い会議に使うならプレミアム（1,185円/月・年払い・税込）以上が目安です。</p>${cta}`},
{slug:'muryou-mojiokoshi-ai',date:'2026-10-16',title:'無料で使える文字起こしAI｜無料プランの上限を公式サイトで確認',desc:'無料プランがある文字起こしAIの上限（分数・回数）を公式サイトで確認して整理。無料でできること、できないことがわかります。',body:`<h1>無料で使える文字起こしAI</h1>${note}
<h2>無料プランの比較</h2><table><tr><th>Notta</th><td>フリー：文字起こし120分/月・1回3分まで、AI要約10回/月。クレジットカード登録不要</td></tr>
<tr><th>Otter</th><td>Basic：月300分の文字起こし、音声・動画ファイルの取り込みは累計3回まで、AIチャットは月20回まで</td></tr>
<tr><th>tl;dv</th><td>Freeプランあり（上限は未確認）</td></tr>
<tr><th>Rimo Voice</th><td>「無料ではじめられる」と記載（上限は未確認）</td></tr></table>
<h2>どれを選ぶ？</h2><ul><li>短い打ち合わせやメモ、操作感を試したい：Nottaのフリー（1回3分まで）</li><li>英語中心で月の分数を多く使いたい：Otterの Basic</li><li>長い日本語の会議を毎週記録したい：無料枠では足りないことが多いため、有料プランの料金も比べるのがおすすめです（<a href="../mojiokoshi-ai-hikaku/">比較記事</a>）</li></ul>
<h2>無料で使うときの注意</h2><ul><li>無料枠は月単位でリセットされ、繰り越しはできない場合があります（Otterは繰り越しなしと記載）</li><li>機密情報を扱う場合は、各社のデータの扱い（AI学習への利用など）を公式サイトで確認してください</li></ul>${cta}`},
{slug:'gazou-seisei-ai-muryou',date:'2026-10-20',title:'無料で使える画像生成AI｜Gemini（Nano Banana）・Krea・Napkin AIの無料枠と使い分け',desc:'画像生成AIを無料で試したい人向けに、Gemini（Nano Banana）・Krea・Napkin AI・Canvaの無料枠、日本語対応、使い方、商用利用の注意点を公式情報をもとに整理しました。',body:`<h1>無料で使える画像生成AI：無料枠と使い分け</h1>${note2}
<p>「画像生成AI 無料」で探している人向けに、当サイト掲載ツールのうち無料で始められるものを、公式サイトに書かれている無料枠だけで比べました。</p>
<h2>比較表</h2><table><tr><th>ツール</th><td><b>無料枠</b>／<b>有料の例</b>／<b>日本語</b>／<b>得意なこと</b></td></tr>
<tr><th><a href="../../tools/gemini/">Google Gemini</a>（画像は<a href="../../tools/nano-banana-2-1/">Nano Banana</a>系）</th><td>無料（￥0）プランあり。無料での画像生成の回数上限は未確認／Google AI Plus ￥725・Pro ￥2,900（月額）／日本語の料金ページあり／文字入りの画像、写真の部分編集</td></tr>
<tr><th><a href="../../tools/krea/">Krea</a></th><td>Free（1日100ユニット）／有料 $9〜$200（月額）／未確認／画像生成、高画質化、動画生成</td></tr>
<tr><th><a href="../../tools/napkin/">Napkin AI</a></th><td>Free $0（週500AIクレジット）／Plus $9・Pro $22（1人あたり月額）／未確認／文章から図解を作る</td></tr></table>
<h2>目的別の選び方</h2><ul><li><b>日本語で指示してすぐ作りたい</b>：Gemini。ふだん使っているGoogleアカウントで始められます。</li><li><b>毎日少しずつ試したい・高画質化もしたい</b>：Krea（1日100ユニットの無料枠）。</li><li><b>写真やイラストではなく、資料の図解がほしい</b>：Napkin AI。</li></ul>
<h2>使い方（共通の流れ）</h2><ol><li>公式サイトでアカウントを作る（無料プランを選ぶ）</li><li>「何を・どんな雰囲気で・縦横比」を1文で書く（例：「白背景、青いマグカップの商品写真、正方形」）</li><li>出てきた画像に「背景だけ夕方に」など、直したい点を足して作り直す</li><li>使う前に、各サービスの利用規約で商用利用・クレジット表記の条件を確認する</li></ol>
<h2>注意点</h2><ul><li>無料プランは、生成物の公開設定・商用利用・透かしなどの条件が有料と異なる場合があります。規約は変わるため、使うたびに公式ページで確認してください。</li><li>実在の人物・他社のキャラクターやロゴに似せた画像は、権利侵害になるおそれがあります。</li><li>無料枠の回数や単位は、各社の都合で変更されます。</li></ul>
<h2>有料で枚数を気にせず使いたい場合</h2><p><span class="pr">PR</span> 無料枠では足りない人向けの有料サービスとして、<a href="../../tools/conoha-ai-canvas/">ConoHa AI Canvas</a>があります。Stable Diffusionをブラウザで使え、月額1,100円（税込）〜、生成枚数の上限なしと公式に案内されています（WebUIの利用時間に応じた料金あり。無料プランは未確認）。 <a href="https://px.a8.net/svt/ejp?a8mat=4BEL1J+D3MEI+50+7RTY1E" rel="sponsored nofollow noopener" target="_blank">ConoHa AI Canvasの公式サイト</a><img src="https://www18.a8.net/0.gif?a8mat=4BEL1J+D3MEI+50+7RTY1E" width="1" height="1" alt="" style="border:0"></p><p class="muted">このリンクはアフィリエイト（広告）です。</p>
<h2>関連</h2><p><a href="../../category/${encodeURIComponent('画像・デザイン')}/">画像・デザインのAIツール一覧</a>／<a href="../../free/">無料で使えるAIツール一覧</a>／<a href="../douga-seisei-ai-hikaku/">動画生成AIの比較</a></p>
<h2>出典（公式）</h2><ul><li><a href="https://gemini.google.com" rel="noopener">https://gemini.google.com</a></li><li><a href="https://deepmind.google/models/gemini-image/flash/" rel="noopener">https://deepmind.google/models/gemini-image/flash/</a></li><li><a href="https://www.krea.ai" rel="noopener">https://www.krea.ai</a></li><li><a href="https://www.napkin.ai" rel="noopener">https://www.napkin.ai</a></li></ul>`},
{slug:'douga-seisei-ai-hikaku',date:'2026-10-20',title:'動画生成AI比較｜Runway・Luma・HeyGen・CapCut・Descriptの料金・無料枠・向いている用途',desc:'動画生成AI・AI動画編集ツール5つを、公式料金ページで確認した無料枠・有料プラン・日本語対応で比較。ショート動画、アバター解説、映像生成など用途別の選び方と注意点もまとめました。',body:`<h1>動画生成AI比較：Runway・Luma・HeyGen・CapCut・Descript</h1>${note2}
<p>「動画生成AI」と一口に言っても、<b>文章や画像から映像を作るもの</b>（Runway・Luma）、<b>AIアバターが話す解説動画を作るもの</b>（HeyGen）、<b>撮った動画をAIで編集するもの</b>（CapCut・Descript）に分かれます。まず用途を決めてから選ぶのが近道です。</p>
<h2>比較表</h2><table><tr><th>ツール</th><td><b>タイプ</b>／<b>無料枠</b>／<b>有料の例</b>／<b>日本語</b></td></tr>
<tr><th><a href="../../tools/runway/">Runway</a></th><td>映像生成・編集／Free（125クレジット・1回限り）／Standard $12・Pro $28・Max $76（年払い時の月額）／日本語の公式サイト・料金ページあり</td></tr>
<tr><th><a href="../../tools/luma/">Luma</a></th><td>映像・画像生成／無料枠は未確認／Plus $30・Pro $90・Ultra $300（月額）／未確認</td></tr>
<tr><th><a href="../../tools/heygen/">HeyGen</a></th><td>AIアバター動画／Free $0／Creator $29・Pro $49・Business $149（月額）／未確認</td></tr>
<tr><th><a href="../../tools/capcut/">CapCut</a></th><td>動画編集（自動字幕など）／無料で利用可／有料プランあり（AI動画生成は1秒あたり$0.12〜などの従量表示）／日本語の料金ページあり</td></tr>
<tr><th><a href="../../tools/descript/">Descript</a></th><td>文字起こしベースの動画・音声編集／Free $0／Hobbyist $16〜・Creator $24〜・Business $50〜（1人あたり月額・年払い時）／未確認</td></tr></table>
<h2>用途別の選び方</h2><ul><li><b>SNSのショート動画を手早く編集・字幕入れ</b>：CapCut</li><li><b>顔出しせずに解説・研修動画を作る</b>：HeyGen</li><li><b>イメージ映像・短いカットを生成</b>：Runway（まず無料の125クレジットで試す）、Luma</li><li><b>話した内容を文字で編集したい（ポッドキャスト・トーク動画）</b>：Descript</li></ul>
<h2>使い方のコツ</h2><ol><li>生成系（Runway・Luma）は、1回で長い動画を作るより、数秒のカットを作ってつなぐほうがクレジットを無駄にしにくいです。</li><li>指示文には「被写体・動き・カメラ（寄り／引き）・雰囲気」を入れます。</li><li>仕上げの字幕・BGM・つなぎは編集系（CapCut・Descript）で行うと手早く整います。</li></ol>
<h2>注意点</h2><ul><li>無料枠は透かし（ウォーターマーク）や商用利用の制限がつく場合があります。各社の規約を確認してください。</li><li>Runwayの無料125クレジットは1回限りで、毎月は戻りません（公式料金ページの表記）。</li><li>実在の人物の顔や声を本人の許可なく使うことは避けてください。</li><li>ドル表記の料金は為替や税で日本円の支払額が変わります。</li></ul>
<h2>関連</h2><p><a href="../../category/${encodeURIComponent('動画')}/">動画のAIツール一覧</a>／<a href="../../free/">無料で使えるAIツール一覧</a>／<a href="../mojiokoshi-ai-hikaku/">文字起こしAIの比較</a></p>
<h2>出典（公式）</h2><ul><li><a href="https://runwayml.com" rel="noopener">https://runwayml.com</a></li><li><a href="https://lumalabs.ai/dream-machine" rel="noopener">https://lumalabs.ai/dream-machine</a></li><li><a href="https://www.heygen.com" rel="noopener">https://www.heygen.com</a></li><li><a href="https://www.capcut.com" rel="noopener">https://www.capcut.com</a></li><li><a href="https://www.descript.com" rel="noopener">https://www.descript.com</a></li></ul>`},
{slug:'chatgpt-igai-ai-hikaku',date:'2026-10-20',title:'ChatGPT以外のAIチャット比較｜Gemini・Copilot・Felo・Genspark・NotebookLMの無料版と使い分け',desc:'ChatGPTの代わりやセカンドオピニオンに使えるAIを、公式サイトで確認した無料版・有料プラン・日本語対応で比較。調べもの、資料の読み込み、Office連携など目的別の選び方を紹介します。',body:`<h1>ChatGPT以外のAIチャット比較：無料版と使い分け</h1>${note2}
<p>「ChatGPT 代わり」「ChatGPT 以外」で探す人向けに、無料で始められるAIを目的別に整理しました。1つに絞るより、<b>得意分野で使い分ける</b>のがおすすめです。</p>
<h2>比較表</h2><table><tr><th>ツール</th><td><b>無料版</b>／<b>有料の例</b>／<b>日本語</b>／<b>向いている使い方</b></td></tr>
<tr><th><a href="../../tools/chatgpt/">ChatGPT</a>（参考）</th><td>無料版あり／Go・Plus・Pro（金額は未確認）／日本語の公式料金ページあり／汎用</td></tr>
<tr><th><a href="../../tools/gemini/">Google Gemini</a></th><td>無料（￥0）／Google AI Plus ￥725・Pro ￥2,900・Ultra ￥14,500〜（月額）／日本語の料金ページあり／Googleサービスと一緒に使う、文章の下書き</td></tr>
<tr><th><a href="../../tools/copilot/">Microsoft Copilot</a></th><td>無料版あり／Copilot付きMicrosoft 365 Personal ¥2,130（月額）ほか／日本語の公式ページあり／WordやExcelなどOfficeと一緒に使う</td></tr>
<tr><th><a href="../../tools/felo/">Felo</a></th><td>無料で使える旨の表記あり／有料 月額2,099円（年払い20,998円）／対応（日本語の公式サイト・円表示）／出典つきの調べもの</td></tr>
<tr><th><a href="../../tools/genspark/">Genspark</a></th><td>無料で試せる旨の表記あり／有料プランの金額は未確認／対応（日本語の公式サイト）／調べものや資料作りをまとめて任せる</td></tr>
<tr><th><a href="../../tools/notebooklm/">NotebookLM</a></th><td>無料（1ノートブックあたりソース50件まで）／Google AI Plus・Pro・Ultraで上限拡大／日本語の公式ページあり／手持ちのPDFや資料を読み込ませて質問</td></tr>
<tr><th><a href="../../tools/sarashina-service/">Sarashina（無償ベータ）</a></th><td>無償ベータ版（レート制限あり）／有料は未確認／国産・日本語の公式発表／国産AIを試したい</td></tr></table>
<h2>目的別の選び方</h2><ul><li><b>調べものの答えに出典がほしい</b>：Felo</li><li><b>自分の資料（PDF・議事録）について質問したい</b>：NotebookLM</li><li><b>Gmail・GoogleドキュメントなどGoogle中心</b>：Gemini</li><li><b>Word・Excel・PowerPoint中心</b>：Copilot</li><li><b>国産AIを試したい</b>：Sarashina</li></ul>
<h2>使い方のコツ</h2><ol><li>同じ質問を2つのAIに聞き、答えが違うところだけ一次情報（公式サイトなど）で確かめると、誤りに気づきやすくなります。</li><li>「誰向けに・何文字で・箇条書きで」など、出力の形を指定します。</li><li>長い資料は、全文を貼るよりNotebookLMのように資料を読み込むツールが向いています。</li></ol>
<h2>注意点</h2><ul><li>AIの回答には誤りが含まれることがあります。数字・日付・法律・医療などは必ず一次情報で確認してください。</li><li>仕事の機密情報を入力する前に、各社のデータの扱い（学習への利用の有無、法人向けプランの条件）を確認してください。</li><li>無料版の回数制限や使えるモデルは予告なく変わることがあります。</li></ul>
<h2>関連</h2><p><a href="../../category/${encodeURIComponent('チャットAI')}/">チャットAIの一覧</a>／<a href="../../category/${encodeURIComponent('リサーチ')}/">リサーチのAIツール一覧</a>／<a href="../../free/">無料で使えるAIツール一覧</a></p>
<h2>出典（公式）</h2><ul><li><a href="https://gemini.google.com" rel="noopener">https://gemini.google.com</a></li><li><a href="https://copilot.microsoft.com" rel="noopener">https://copilot.microsoft.com</a></li><li><a href="https://www.felo.ai" rel="noopener">https://www.felo.ai</a></li><li><a href="https://www.genspark.ai" rel="noopener">https://www.genspark.ai</a></li><li><a href="https://notebooklm.google" rel="noopener">https://notebooklm.google</a></li><li><a href="https://chatgpt.com" rel="noopener">https://chatgpt.com</a></li><li><a href="https://www.sbintuitions.co.jp/news/press/20261013_01/" rel="noopener">https://www.sbintuitions.co.jp/news/press/20261013_01/</a></li></ul>`}
];
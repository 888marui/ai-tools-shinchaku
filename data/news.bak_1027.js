// 海外AIニュース（AI関連のみ。暗号資産は扱わない）。出典は公式・一次情報のURLを必ず入れる。新しい順に先頭へ追加。
// 項目: slug, date(元発表日), added(掲載日), title, source(発表元), url(出典), summary(3〜5文), comment(一言), links([[href(サイト内の絶対パス), ラベル]]), article(詳しい記事のslug・任意)
module.exports=[
{slug:'muse-spark-open-2026-10',date:'2026-10-15',added:'2026-10-21',source:'Meta',url:'https://research.meta.ai/blog/muse-spark-open',
title:'Meta、オープンウェイトの大型モデル「Muse Spark Open」を公開',
summary:['Metaは10月15日、大型言語モデル「Muse Spark Open」の重み（モデル本体）を公開しました。','パラメータは全体で8,160億、1トークンごとに使うのは420億で、画像なども扱えるマルチモーダル対応、一度に読める長さは100万トークンです。','コーディングや、何段階も続くエージェント作業に向けたモデルだと説明しています。','Baseten、Groq、OpenRouter、Together AIなどのAPIで使えるほか、Hugging Faceなどから重みをダウンロードでき、Apple M5 UltraのMac Studio 2台でも動かせるとしています。','ライセンスは「Muse Model License」で、商用利用には一部条件がありますが、多くの開発者は無料で使えるとしています。'],
comment:'手元のMac 2台で動く大型モデルというのは大きな変化です。商用で使うなら、ライセンスの条件を先に読んでおくのがおすすめです。',
links:[['/tools/muse-spark-open/','Muse Spark Openのツールページ']]},
{slug:'nvidia-nemotron-3-5-2026-10',date:'2026-10-14',added:'2026-10-21',source:'NVIDIA',url:'https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Super-and-Lightning/',
title:'NVIDIA、オープンモデル「Nemotron 3.5 Super / Lightning」を発表',
summary:['NVIDIAは10月14日、オープンモデル「Nemotron 3.5 Super」と「Nemotron 3.5 Lightning」を発表しました。','Superは全体1,200億パラメータ（動くのは120億）で、文章・画像・動画を扱えます。Lightningは全体300億（動くのは30億）の文章専用の小さめのモデルです。','どちらも最大100万トークンの長い入力に対応し、推論やエージェント用途を想定しています。','学習済みの重みに加えて、データセットや学習・評価の手順もあわせて公開しています。'],
comment:'自社のサーバーでAIを動かしたい会社には選択肢が増えました。個人で試すなら、まず小さいLightningからが手軽です。',
links:[['/articles/claude-haiku-5-5/','小型で安いモデルならClaude Haiku 5.5の解説も']]},
{slug:'claude-haiku-5-5-2026-10',date:'2026-10-07',added:'2026-10-21',source:'Anthropic',url:'https://www.anthropic.com/claude-haiku-5-5',
title:'Anthropic、小型モデル「Claude Haiku 5.5」を公開。料金は大きく値下げ',
summary:['Anthropicは10月7日、小型で速いモデル「Claude Haiku 5.5」を公開しました。','要約、分類、データベースへの問い合わせのような、数が多く手早く済ませたい作業に向けたモデルです。','10万トークンまでの入力なら、100万トークンあたり入力0.10ドル、出力0.50ドルで、前の世代のHaiku 4.5より9割安くなっています。','あわせてSonnet 5.5のキャッシュ読み込みの料金を半分にし、MaxプランとTeamプランの利用者にはAPIで使える毎月のクレジットを配ると発表しました。'],
comment:'APIでAIを大量に回している人ほど、コストの下がり方が大きいアップデートです。',
links:[['/articles/chatgpt-igai-ai-hikaku/','ChatGPT以外のAIチャット比較']],article:'claude-haiku-5-5'}
];

// ビルド結果の最低限の検査：node build.js のあとに node check.js（GitHub Actions でも実行）
// 1) 構造化データ（JSON-LD）がJSONとして読める 2) サイト内リンクの切れがない 3) 404.html があり noindex
// 4) sitemap.xml がある 5) 未置換のプレースホルダ・空の href がない
// 6) data/hubs.json のハブ記事と個別記事が互いにリンクしている（2026-11-03）
const fs=require('fs'),path=require('path');
const BASE=(process.env.BASE_URL||'https://ai-shinchaku.com')+'/';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const errs=[];const err=(f,m)=>errs.push(`${f}: ${m}`);
if(!fs.existsSync('dist/index.html')){console.error('dist/index.html がない（ビルド失敗？）');process.exit(1)}
if(!fs.existsSync('dist/sitemap.xml'))err('dist','sitemap.xml がない');
const files=walk('dist').filter(f=>f.endsWith('.html'));
let links=0,ld=0;
for(const f of files){
  const h=fs.readFileSync(f,'utf8');const rel=path.relative('dist',f);
  if(/\{\{[A-Z]+\}\}/.test(h))err(rel,'未置換のプレースホルダ');
  if(/href=""/.test(h))err(rel,'空の href');
  for(const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
    ld++;try{JSON.parse(m[1])}catch(e){err(rel,'JSON-LD が読めない: '+e.message)}
  }
  if(rel==='404.html'&&!/<meta name="robots" content="noindex/.test(h))err(rel,'noindex がない');
  const body=h.replace(/<script[\s\S]*?<\/script>/g,'');
  for(const m of body.matchAll(/<a\s[^>]*href="([^"#?]*)(?:[#?][^"]*)?"/g)){
    let u=m[1];if(!u||/^(https?:|mailto:|tel:|\/\/)/.test(u)&&!u.startsWith(BASE))continue;
    if(u.startsWith(BASE))u='/'+u.slice(BASE.length);
    const t=decodeURIComponent(u.startsWith('/')?path.join('dist',u):path.join(path.dirname(f),u));
    links++;
    const ok=fs.existsSync(t)&&(fs.statSync(t).isFile()||fs.existsSync(path.join(t,'index.html')));
    if(!ok)err(rel,'リンク切れ: '+m[1]);
  }
}
if(!fs.existsSync('dist/404.html'))err('dist','404.html がない');
// ハブ⇔個別記事：個別記事からハブへ、ハブから個別記事へ、どちらもリンクがあること（noindex・存在しない記事は対象外）
{const HUBS=require('./data/hubs.json');const page=s=>`dist/articles/${s}/index.html`;const has=(s,to)=>new RegExp(`href="(\\.\\./|/articles/|${BASE.replace(/[.]/g,'\\.')}articles/)${to}/"`).test(fs.readFileSync(page(s),'utf8'));const idx=s=>fs.existsSync(page(s))&&!/<meta name="robots" content="noindex/.test(fs.readFileSync(page(s),'utf8'));
 for(const [h,[,ms]] of Object.entries(HUBS)){if(!idx(h)){err('hubs.json','ハブの記事がない: '+h);continue}for(const m of ms){if(!idx(m))continue;if(!has(m,h))err(`articles/${m}/`,'ハブへのリンクがない: '+h);if(!has(h,m))err(`articles/${h}/`,'個別記事へのリンクがない: '+m)}}}
// 7) 広告リンク（2026-11-06）：data/tools.json の affiliate.url は許可した提供元のドメインだけ。
//    出力HTMLでは、広告リンクに rel="sponsored nofollow"、広告リンクのあるページに「PR」表記があること
{const AD_HOSTS=[/^px\.a8\.net$/,/^af\.moshimo\.com$/,/^[a-z0-9-]+\.cello\.so$/,
  // 以下は 2026-11-05 時点で tools.json にすでに入っていた紹介リンク（提供元は運営者が確認する）
  /^try\.elevenlabs\.io$/,/^invideo\.sjv\.io$/,
  // 楽天アフィリエイトの短縮リンク（noindex の rakuyoko-rakuten-ichiba-shoukai で使用。tools.json には使わない）
  /^a\.r10\.to$/];
 const isAd=u=>{try{const x=new URL(u.replace(/&amp;/g,'&'));return AD_HOSTS.some(r=>r.test(x.hostname))||x.hostname==='fliki.ai'&&x.searchParams.has('via')||x.hostname==='muse.ai'&&x.pathname.startsWith('/join')/* Muse 紹介プログラム（運営者の紹介リンクは /join のみ。2026-11-08 追加） */}catch(e){return false}};
 for(const t of require('./data/tools.json')){if(!t.affiliate)continue;const a=t.affiliate;
  if(!a.url||!isAd(a.url))err('tools.json',`${t.slug}: affiliate.url が許可した提供元のドメインではない: ${a.url}`);
  if(!a.asp)err('tools.json',`${t.slug}: affiliate.asp（提供元）がない`);}
 for(const f of files){const h=fs.readFileSync(f,'utf8');const rel=path.relative('dist',f);let ad=0;
  for(const m of h.matchAll(/<a\s[^>]*>/g)){const tag=m[0],href=(tag.match(/href="([^"]*)"/)||[])[1]||'',r=(tag.match(/rel="([^"]*)"/)||[])[1]||'';
   const sp=/\bsponsored\b/.test(r);if(!sp&&!isAd(href))continue;ad++;
   if(!isAd(href))err(rel,'sponsored のリンク先が許可した提供元ではない: '+href);
   if(!sp||!/\bnofollow\b/.test(r))err(rel,'広告リンクに rel="sponsored nofollow" がない: '+href);}
  if(ad&&!/<span class="pr">PR<\/span>/.test(h))err(rel,'広告リンクがあるのに PR 表記がない');
  if(ad&&rel.startsWith('tools/')&&!/class="prnote"/.test(h))err(rel,'広告リンクがあるのに PR の宣言（prnote）がない');}}
// 8) 料金は「金額＋確認日」（2026-11-06）：広告リンクのあるツールは、金額のある料金欄に checked（確認日）が必要。ツールページの料金欄に確認日が出ていること
{const H=/\d[\d,]*(\.\d+)?\s*(円|ドル)|[$¥€£]\s?\d/;
 for(const t of require('./data/tools.json')){if(!t.affiliate)continue;
  if((H.test(t.pricing||'')||H.test(t.cheapest||''))&&!/^\d{4}-\d{2}-\d{2}$/.test(t.checked||''))err('tools.json',`${t.slug}: 金額があるのに checked（確認日）がない`);
  const f=`dist/tools/${t.slug}/index.html`;if(!fs.existsSync(f))continue;
  if(H.test(t.pricing||'')&&!/<th>料金<\/th><td>[^]*?に公式サイトで確認）/.test(fs.readFileSync(f,'utf8')))err(`tools/${t.slug}/`,'料金欄に確認日がない');}}
// 9) GA4（2026-11-09）：測定IDは1つだけ。リダイレクト用のページ以外の全ページで gtag.js を読み込み、config は1回。プライバシーポリシーに GA4 の記載があること
{const ids=new Set();
 for(const f of files){const h=fs.readFileSync(f,'utf8');const rel=path.relative('dist',f);
  for(const m of h.matchAll(/\bG-[A-Z0-9]{6,}\b/g))ids.add(m[0]);
  if(/<meta http-equiv="refresh"/.test(h))continue;
  if(!/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+"><\/script>/.test(h))err(rel,'GA4 の gtag.js（非同期）がない');
  if((h.match(/gtag\('config',/g)||[]).length!==1)err(rel,"gtag('config') が1回ではない");}
 if(ids.size!==1)err('dist',`GA4 の測定IDが1つではない: ${[...ids].join(', ')||'なし'}`);
 const pv=fs.existsSync('dist/privacy/index.html')?fs.readFileSync('dist/privacy/index.html','utf8'):'';
 for(const [re,m] of [[/Google アナリティクス/,'Google アナリティクスの利用'],[/Cookie/,'Cookie'],[/href="https:\/\/policies\.google\.com\/technologies\/partner-sites/,'Google のポリシーへのリンク'],[/href="https:\/\/tools\.google\.com\/dlpage\/gaoptout/,'オプトアウト アドオンへのリンク']])
  if(!re.test(pv))err('privacy/index.html','プライバシーポリシーに記載がない: '+m);}
// 10) AIガジェット（2026-11-09）：category が「AIガジェット」のものは gadget（メーカー・本体価格・確認日・月額サブスク・アプリ）が必要。
//     広告リンクがない機器のページには PR 表記・sponsored のリンクを出さない（CTA は公式サイトへの直リンク）
{for(const t of require('./data/tools.json')){if(t.category!=='AIガジェット'&&!t.gadget)continue;const g=t.gadget||{};
  for(const k of ['maker','price','priceShort','subscription','apps'])if(!g[k])err('tools.json',`${t.slug}: gadget.${k} がない`);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(g.priceChecked||''))err('tools.json',`${t.slug}: gadget.priceChecked（本体価格の確認日）がない`);
  if(g.offer!=null&&!(Number.isInteger(g.offer)&&g.offer>0))err('tools.json',`${t.slug}: gadget.offer は円の整数`);
  const f=`dist/tools/${t.slug}/index.html`;if(!fs.existsSync(f)){err('dist',`tools/${t.slug}/ がない`);continue}const h=fs.readFileSync(f,'utf8');
  if(!/<th>本体価格<\/th>/.test(h))err(`tools/${t.slug}/`,'製品情報の欄（本体価格）がない');
  if(!t.affiliate&&(/rel="[^"]*\bsponsored\b/.test(h)||/<span class="pr">PR<\/span>/.test(h)))err(`tools/${t.slug}/`,'広告リンクがないのに PR 表記・sponsored がある');}}
// 11) 応答ヘッダー（2026-11-11）：dist/_headers が出力されていて、必須のヘッダーがそろい、強制の CSP が混ざっていない
{const hp='dist/_headers';if(!fs.existsSync(hp))err('dist','_headers がない（セキュリティヘッダーが出力されていない）');
 else for(const m of require('./headers.js').problems(fs.readFileSync(hp,'utf8')))err('dist/_headers',m);}
console.log(`checked ${files.length} html, ${links} internal links, ${ld} JSON-LD blocks`);
if(errs.length){console.error(errs.slice(0,50).join('\n'));console.error(errs.length+' errors');process.exit(1)}
console.log('OK');

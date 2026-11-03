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
console.log(`checked ${files.length} html, ${links} internal links, ${ld} JSON-LD blocks`);
if(errs.length){console.error(errs.slice(0,50).join('\n'));console.error(errs.length+' errors');process.exit(1)}
console.log('OK');

// デプロイ後に実行：前回送信時から内容が変わったページのURLを IndexNow に送る
// 使い方：node indexnow.js（dist を build 済み・デプロイ済みであること）。--dry で送信せず表示だけ
const fs=require('fs'),path=require('path'),crypto=require('crypto'),https=require('https');
const BASE='https://ai-tools-shinchaku.pages.dev',HOST='ai-tools-shinchaku.pages.dev',STATE='.indexnow_state.json';
const keyFile=fs.readdirSync('static').find(f=>/^[0-9a-f]{32}\.txt$/.test(f));const key=keyFile.replace('.txt','');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const cur={};for(const f of walk('dist'))if(f.endsWith('index.html')){const u=BASE+'/'+path.relative('dist',f).replace(/index\.html$/,'');cur[u]=crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex')}
const prev=fs.existsSync(STATE)?JSON.parse(fs.readFileSync(STATE,'utf8')):{};
const changed=Object.keys(cur).filter(u=>cur[u]!==prev[u]);
if(!changed.length){console.log('indexnow: 変更なし');process.exit(0)}
if(process.argv.includes('--dry')){console.log(changed.join('\n'));process.exit(0)}
const body=JSON.stringify({host:HOST,key,keyLocation:`${BASE}/${keyFile}`,urlList:changed.slice(0,10000)});
const req=https.request('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8','Content-Length':Buffer.byteLength(body)}},res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>{console.log('indexnow:',res.statusCode,changed.length+'件',d.slice(0,200));if(res.statusCode===200||res.statusCode===202)fs.writeFileSync(STATE,JSON.stringify(cur,null,0));else process.exit(1)})});
req.on('error',e=>{console.error('indexnow error',e.message);process.exit(1)});req.end(body);

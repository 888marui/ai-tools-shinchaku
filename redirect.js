// GitHub Pages用：dist の全HTMLページを Cloudflare Pages の同じパスへ転送するページに置き換えて gh-redirect/ に出力
const fs=require('fs'),path=require('path');const NEW='https://ai-shinchaku.com';const SRC='dist',OUT='gh-redirect';
fs.rmSync(OUT,{recursive:true,force:true});
(function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);if(fs.statSync(p).isDirectory()){walk(p);continue}
const rel=path.relative(SRC,p).split(path.sep).join('/');if(!rel.endsWith('.html'))continue;
const u=NEW+'/'+rel.replace(/index\.html$/,'');const o=path.join(OUT,rel);fs.mkdirSync(path.dirname(o),{recursive:true});
fs.writeFileSync(o,`<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>移転しました｜AIツール新着便</title><link rel="canonical" href="${u}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${u}"><script>location.replace(${JSON.stringify(u)}+location.search+location.hash)</script></head><body><p>AIツール新着便は移転しました。<a href="${u}">${u}</a></p></body></html>`)}})(SRC);
fs.writeFileSync(OUT+'/404.html',`<!doctype html><html lang="ja"><head><meta charset="utf-8"><link rel="canonical" href="${NEW}/"><meta http-equiv="refresh" content="0; url=${NEW}/"></head><body><a href="${NEW}/">${NEW}/</a></body></html>`);
console.log('redirect pages written');

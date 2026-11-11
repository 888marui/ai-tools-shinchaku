// Cloudflare Pages の _headers（応答ヘッダー）の中身。build.js が dist/_headers に書き、check.js が確かめる。
// CSP は Report-Only（違反をブラウザのコンソールに出すだけで何も止めない）。強制の CSP は入れない。
// 許すのは実際に使っているものだけ：自サイト、GA4（gtag.js と計測の送信）、Cloudflare Web Analytics（公開先が差し込むビーコン）、
// インラインの script（GA4 の設定・JSON-LD など）と style（<style> と style 属性を使っている）。
const CSP=[
 "default-src 'self'",
 "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com",
 "style-src 'self' 'unsafe-inline'",
 "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
 "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://cloudflareinsights.com",
 "font-src 'self'",
 "object-src 'none'",
 "base-uri 'self'",
 "form-action 'self'",
 "frame-ancestors 'none'",
].join('; ');
const HEADERS={
 'Strict-Transport-Security':'max-age=31536000',
 'X-Content-Type-Options':'nosniff',
 'X-Frame-Options':'DENY',
 'Permissions-Policy':'geolocation=(), microphone=(), camera=()',
 'Content-Security-Policy-Report-Only':CSP,
};
const text=()=>'/*\n'+Object.entries(HEADERS).map(([k,v])=>`  ${k}: ${v}\n`).join('');
// _headers の本文に足りない必須ヘッダー（と、混ざってはいけない強制の CSP）の一覧
const problems=t=>{const names=new Set(t.split('\n').filter(l=>/^\s+\S/.test(l)&&l.includes(':')).map(l=>l.split(':')[0].trim().toLowerCase()));
 const out=Object.keys(HEADERS).filter(k=>!names.has(k.toLowerCase())).map(k=>'ヘッダーがない: '+k);
 if(names.has('content-security-policy'))out.push('強制の Content-Security-Policy は入れない（Report-Only のみ）');
 if(/includeSubDomains|preload/i.test(t))out.push('HSTS に includeSubDomains / preload は付けない');
 return out};
module.exports={text,problems,HEADERS};

// 統合したページの旧URL → 新URL（301）。Cloudflare Pages の _redirects は Functions が処理するリクエストには適用されないため、ここで転送する。
// build.js の moved() と同じ組を書く（足りないとビルド時に警告が出る）
const REDIRECTS={
'/free/':'/articles/muryou-ai-tool-ichiran/',
'/news/claude-haiku-5-5-2026-10/':'/articles/claude-haiku-5-5/',
'/news/claude-google-cloud-anthropic-managed-2026-10/':'/articles/claude-models-google-cloud/',
};
export async function onRequest(ctx){const u=new URL(ctx.request.url);if(u.hostname!=='ai-shinchaku.com'&&(u.hostname.endsWith('.pages.dev')||u.hostname==='www.ai-shinchaku.com')){u.hostname='ai-shinchaku.com';u.protocol='https:';u.port='';return Response.redirect(u.toString(),301);}
const p=u.pathname.replace(/\/index\.html$/,'/').replace(/([^/])$/,'$1/');const to=REDIRECTS[p];if(to){u.pathname=to;u.protocol='https:';u.port='';return Response.redirect(u.toString(),301);}
return ctx.next();}

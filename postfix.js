// 読みやすさの後処理：本文に出ているURLを短いリンクにし、長い段落を分け、追加CSSを入れる（事実は変えない）
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return '公式サイト'}};
const URLRE=/https?:\/\/[^\s<>"'（）()「」、。]+/g;
function fixText(t,inA){
  if(inA){ if(/^\s*https?:\/\/\S+\s*$/.test(t)) return host(t.trim()); return t; }
  const L=[];
  t=t.replace(new RegExp('(公式ページ|公式料金ページ|公式FAQ)：\\s*('+URLRE.source+')','g'),(m,l,u)=>{L.push(`<a href="${u}" rel="nofollow noopener" target="_blank">${l}</a>`);return '\u0000'+(L.length-1)+'\u0000'});
  t=t.replace(URLRE,u=>{u=u.replace(/[.,;:]+$/,'');L.push(`<a href="${u}" rel="nofollow noopener" target="_blank">出典</a>`);return '\u0000'+(L.length-1)+'\u0000'});
  return t.replace(/\u0000(\d+)\u0000/g,(m,i)=>L[+i]);
}
function splitP(html){
  return html.replace(/<p>((?:(?!<\/?(?:p|div|ul|ol|table|h\d)[\s>])[\s\S])*?)<\/p>/g,(m,inner)=>{
    const plain=inner.replace(/<[^>]+>/g,'');if(plain.length<230)return m;
    const idx=[];let depth=0;for(let i=0;i<inner.length;i++){const c=inner[i];
      if(c==='<'){const close=inner[i+1]==='/';const end=inner.indexOf('>',i);const self=/\/>$|^<(br|img|wbr)/.test(inner.slice(i,end+1));if(!self)depth+=close?-1:1;i=end;continue}
      if(c==='。'&&depth===0&&inner[i+1]&&inner[i+1]!=='）'&&inner[i+1]!=='」')idx.push(i+1)}
    if(!idx.length)return m;const half=inner.length/2;const cut=idx.reduce((a,b)=>Math.abs(b-half)<Math.abs(a-half)?b:a);
    if(cut<60||inner.length-cut<60)return m;
    return '<p>'+inner.slice(0,cut)+'</p><p>'+inner.slice(cut)+'</p>';});
}
module.exports=function postfix(html,extraCss){
  if(extraCss)html=html.replace('</style>',extraCss+'</style>');
  const parts=html.split(/(<pre[\s\S]*?<\/pre>|<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<head[\s\S]*?<\/head>|<[^>]+>)/);
  let inA=0,keep=0;
  for(let i=0;i<parts.length;i++){const p=parts[i];if(!p)continue;
    if(p[0]==='<'){if(/^<a[\s>]/.test(p)){inA++;if(/class="src-url"/.test(p))keep=1}else if(/^<\/a>/.test(p)){inA=Math.max(0,inA-1);keep=0}continue}
    // 出典リンク（class="src-url"）はURLをそのまま見せる
    if(!keep)parts[i]=fixText(p,inA>0);}
  html=parts.join('');
  const b=html.indexOf('<body');return html.slice(0,b)+splitP(html.slice(b));
};

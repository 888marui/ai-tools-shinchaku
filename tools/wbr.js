// 日本語の文節の切れ目に <wbr> を入れる（ビルド時だけ。BudouX の日本語モデルを使う。tools/budoux/NOTICE を参照）
// iPhone Safari は word-break:auto-phrase に対応していないため、ブラウザに頼らず HTML 側で折り返してよい位置を示す。
// 入れる先は本文の text ノードだけ。属性値・script・style・head（title・meta・JSON-LD）・pre/code・svg・URL そのものの文字列には入れない。
'use strict';
const {Parser}=require('./budoux/parser.js');
const parser=new Parser(require('./budoux/ja.json'));
const TAG=/(<!--[\s\S]*?-->|<(?:[^>"']|"[^"]*"|'[^']*')*>)/;
const SKIP=new Set(['pre','code','kbd','samp','script','style','svg','math','textarea','noscript','template','title','option','select','head']);
const VOID=new Set(['br','wbr','img','hr','input','meta','link','source','area','col','embed','param','track']);
const JA=/[぀-ヿ㐀-鿿]/;
const ENT=/&(?:#\d+|#x[0-9a-fA-F]+|[A-Za-z][A-Za-z0-9]*);/g;
// 切れ目を入れない位置：行頭に来てはいけない文字の前（閉じ括弧・句読点・小書き仮名・長音）、行末に来てはいけない文字（開き括弧）の後、空白の前後
const NOT_BEFORE=new Set([...'、。，．,.・：；:;！？!?）)」』】〕］｝〉》ゃゅょっぁぃぅぇぉゎャュョッァィゥェォヮー々ヽヾゝゞ‐—―…％%°']);
const NOT_AFTER=new Set([...'（(「『【〔［｛〈《']);
const isSpace=c=>/\s/.test(c);
const isAscii=c=>c.charCodeAt(0)<128;
function wbrText(t){
  if(!JA.test(t))return t;
  const ents=[];const s=t.replace(ENT,m=>{ents.push(m);return ''});
  const cut=parser.parseBoundaries(s);if(!cut.length)return t;
  const set=new Set(cut);let out='',k=0;
  const chars=Array.from(s);let off=0;
  for(let i=0;i<chars.length;i++){
    const c=chars[i];
    if(i>0&&set.has(off)){
      const p=chars[i-1];
      if(!isSpace(p)&&!isSpace(c)&&!NOT_BEFORE.has(c)&&!NOT_AFTER.has(p)&&!(isAscii(p)&&isAscii(c)))out+='<wbr>';
    }
    out+=c===''?ents[k++]:c;off+=c.length;
  }
  return out;
}
// html 全体のうち <body> 以降を処理する（head は触らない）
function wbr(html){
  const b=html.indexOf('<body');if(b<0)return html;
  const head=html.slice(0,b),parts=html.slice(b).split(TAG);
  const stack=[];let skipN=0,keepUrl=0;
  for(let i=0;i<parts.length;i++){const p=parts[i];if(!p)continue;
    if(p[0]==='<'){
      if(p.startsWith('<!--'))continue;
      const m=p.match(/^<(\/?)([A-Za-z][A-Za-z0-9-]*)/);if(!m)continue;
      const close=!!m[1],name=m[2].toLowerCase();
      if(VOID.has(name)||/\/>$/.test(p)&&!close&&!SKIP.has(name))continue;
      if(!close){stack.push(name);if(SKIP.has(name))skipN++;if(name==='a'&&/class="[^"]*\bsrc-url\b/.test(p))keepUrl++}
      else{const j=stack.lastIndexOf(name);if(j>=0){for(const n of stack.splice(j)){if(SKIP.has(n))skipN--;}}
        if(name==='a')keepUrl=0}
      continue}
    if(skipN>0||keepUrl>0)continue;
    if(/^\s*(https?:\/\/|\/\/|www\.)\S*\s*$/.test(p))continue;
    parts[i]=wbrText(p);
  }
  return head+parts.join('');
}
module.exports={wbr,wbrText};

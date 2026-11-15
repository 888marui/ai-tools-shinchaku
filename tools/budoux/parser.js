// BudouX の文節分け（google/budoux の javascript/src/parser.ts を CommonJS に書き写したもの。Apache-2.0。NOTICE を参照）
// ビルド時だけに使う。公開するサイトには含まれない。
'use strict';
class Parser{
  constructor(model){
    this.model=new Map(Object.entries(model).map(([k,v])=>[k,new Map(Object.entries(v))]));
    let sum=0;for(const g of this.model.values())for(const v of g.values())sum+=v;
    this.baseScore=-0.5*sum;
  }
  parse(s){
    if(s==='')return [];
    const out=[];let start=0;
    for(const b of this.parseBoundaries(s)){out.push(s.slice(start,b));start=b}
    out.push(s.slice(start));return out;
  }
  // 文節の切れ目（UTF-16 の位置）を返す。thr を負にすると切れ目が増える（既定 0 は公式と同じ）
  parseBoundaries(s,thr=0){
    const m=k=>this.model.get(k);
    const uw1=m('UW1'),uw2=m('UW2'),uw3=m('UW3'),uw4=m('UW4'),uw5=m('UW5'),uw6=m('UW6'),bw1=m('BW1'),bw2=m('BW2'),bw3=m('BW3'),tw1=m('TW1'),tw2=m('TW2'),tw3=m('TW3'),tw4=m('TW4');
    const g=(grp,k)=>(grp&&grp.get(k))||0;
    const c=Array.from(s),res=[];let off=0;
    for(let i=1;i<c.length;i++){
      off+=c[i-1].length;let sc=this.baseScore;
      if(i>2){sc+=g(uw1,c[i-3]);sc+=g(tw1,c[i-3]+c[i-2]+c[i-1])}
      if(i>1){sc+=g(uw2,c[i-2]);sc+=g(bw1,c[i-2]+c[i-1]);sc+=g(tw2,c[i-2]+c[i-1]+c[i])}
      sc+=g(uw3,c[i-1]);sc+=g(uw4,c[i]);sc+=g(bw2,c[i-1]+c[i]);
      if(i+1<c.length){sc+=g(uw5,c[i+1]);sc+=g(bw3,c[i]+c[i+1]);sc+=g(tw3,c[i-1]+c[i]+c[i+1])}
      if(i+2<c.length){sc+=g(uw6,c[i+2]);sc+=g(tw4,c[i]+c[i+1]+c[i+2])}
      if(sc>thr)res.push(off);
    }
    return res;
  }
}
module.exports={Parser};

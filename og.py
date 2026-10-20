import json,subprocess,os
from PIL import Image,ImageDraw,ImageFont
arts=json.loads(subprocess.check_output(['node','-e',"console.log(JSON.stringify(require('./data/articles.js').map(a=>[a.slug,a.title])))"]))
F='/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
os.makedirs('static/og',exist_ok=True)
def wrap(d,t,f,w):
    L=[];c=''
    import re
    for ch in re.findall(r'[A-Za-z0-9;.\-]+(?: (?=[A-Za-z]))?|.',t):
        if c.endswith('：') or d.textlength(c+ch,font=f)>w: L.append(c);c=ch.lstrip()
        else: c+=ch
    return L+[c]
for slug,title in arts:
    out=f'static/og/{slug}.png'
    im=Image.new('RGB',(1200,630),'#06C755');d=ImageDraw.Draw(im)
    d.rounded_rectangle((40,40,1160,590),28,fill='white')
    for size in (64,58,52,46):
        f=ImageFont.truetype(F,size,index=0);L=wrap(d,title,f,1000)
        if len(L)<=4:break
    y=300-len(L)*size*0.7
    for l in L: d.text((100,y),l,font=f,fill='#1c1b19');y+=size*1.4
    s=ImageFont.truetype(F,34,index=0)
    d.rectangle((100,500,108,548),fill='#06C755');d.text((126,500),'AIツール新着便',font=s,fill='#166534')
    im.quantize(64).save(out,optimize=True)
print(len(arts))

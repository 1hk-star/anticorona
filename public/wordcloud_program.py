import requests
from bs4 import BeautifulSoup
from konlpy.tag import Hannanum, Twitter 
import json
import numpy as np
from PIL import Image
from  wordcloud import WordCloud
import matplotlib.pylab as plt

page = 1
han1=""
for page in range(1, 100, 10):
    raw = requests.get("https://search.naver.com/search.naver?where=news&query=신종 코로나 바이러스&start="+str(page),
                       headers={"User-Agent":"Mozilla/5.0"})
    html = BeautifulSoup(raw.text, 'html.parser')
    articles = html.select("ul.type01 > li")
    for ar in articles:
        date_info = []
        title = ar.select_one("a._sp_each_title")
        com_info = ar.select_one("dl > dd.txt_inline > span._sp_each_source").text
        com_date_info = ar.select('dl > dd.txt_inline')
        for tag in com_date_info:
            a = tag.select('a')
            for ext_tag in a:
                ext_tag.extract()
            span = tag.select('span')
            for ext_tag in span:
                ext_tag.extract()
            date_info.append(tag.getText().strip())
            
        source = ar.select_one("dl > dd:nth-of-type(2)").text
        source = source.replace(",", "")
        #print(title.text.replace(",", "") +'\n' +com_info  +" / "+ date_info[0]  +'\n' +title.attrs['href']+ "\n"+ ":" + source + '\n')
        han1 += (title.text.replace(",", "") +'\n' +com_info  +" / "+ date_info[0]  +'\n' +title.attrs['href']+ "\n"+ ":" + source + '\n')
han = Hannanum()
text = han.nouns(han1)
text = " ".join(text)
mask = np.array(Image.open('./data/back.png'))
wordcloud = WordCloud(width=6000, height=3000,font_path='/usr/share/fonts/truetype/nanum/NanumGothic_Coding.ttf',max_font_size=100,background_color='white',mask=mask).generate(text)

fig =plt.figure( figsize=(60,30) )
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.savefig('cloud.png')

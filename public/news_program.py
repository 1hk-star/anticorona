#-*- coding: utf-8 -*-

import pymysql
import requests
from bs4 import BeautifulSoup

con = pymysql.connect(host="localhost",user="root",password="antianticoco",db="anticorona",charset="utf8")
sql = "INSERT INTO news (n_title,n_datetime,n_source,n_precontents,n_url) VALUES (%s,%s,%s,%s,%s)"
cur = con.cursor()

def save_news(url):
    req = requests.get(url)
    if req.status_code != requests.codes.ok:
        print("fail")
        exit()
    html = BeautifulSoup(req.text,"html.parser")
    news_items = html.select("ul.type01 > li")
    for item in news_items:
        date_info = []
        title = item.select_one('a._sp_each_title')
        link = title.attrs['href']
        description = item.select('dd')[1] 
        n_company = item.select_one('._sp_each_source')
        if n_company.select_one('i'):
            n_company.select_one('i').decompose()
        com_date_info = item.select('dl > dd.txt_inline')
        for tag in com_date_info:
            a = tag.select('a')
            for ext_tag in a:
                ext_tag.extract()
            span = tag.select('span')
            for ext_tag in span:
                ext_tag.extract()
            date_info.append(tag.getText().strip())
        cur.execute(sql,(title.text,date_info[0],n_company.text,description.text,link))
    return html


url = "https://search.naver.com/search.naver"
option ="?where=news&sm=tab_jum&query="+"코로나바이러스"

html = save_news(url+option)
btn_next = html.select_one('.paging .next')
while btn_next:
    next_option = btn_next.attrs['href']
    html = save_news(url+next_option)
    btn_next = html.select_one('.paging .next')
con.commit()
con.close()



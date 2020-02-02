#-*- coding: utf-8 -*-
import requests
from urllib.parse import urlparse
from urllib.parse import quote
import pandas as pd
import pymysql
import json
import re

con = pymysql.connect(host="localhost",user="root",password="antianticoco",db="anticorona",charset="utf8")
sql = "INSERT INTO news_api (title,originallink,link,description,date) VALUES (%s,%s,%s,%s,%s)"
cur = con.cursor()


def call(keyword, start):
    encText = quote(keyword)
    url = "https://openapi.naver.com/v1/search/news.json?query=" + encText + "&display=100" + "&start=" + str(start)
    result = requests.get(url=url, headers={"X-Naver-Client-Id":"Lfx5FMlLcy5Xv7RgQFyn","X-Naver-Client-Secret":"7aYLtGr51C"})
    return result.json()
 
def results(keyword):
    list = []
    for num in range(0,10):
        list += call(keyword, num * 100 + 1)['items']
    return list

list = []
result = results("코로나바이러스")
list = list + result

file = open("./corona.json", "w+")
file.write(json.dumps(list))

df = pd.read_json("./corona.json")

df['title']=df['title'].str.replace('<b>','')
df['title']=df['title'].str.replace('</b>','')
df['description']=df['description'].str.replace('<b>','')
df['description']=df['description'].str.replace('</b>','')
df['pubDate'] = pd.to_datetime(df['pubDate']).astype(str)
df['pubDate'] = df['pubDate'].str.replace(r'\+09:00','')
data = [tuple(x) for x in df.values]
cur.executemany(sql, data)
con.commit()
con.close()

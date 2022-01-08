from datetime import datetime,timezone,timedelta

import requests

url = "https://yata.yt/api/v1/travel/export/"
resObj = requests.get(url).json()

tzutc_8 = timezone(timedelta(hours=8))
lastUpdate = 0
dest_arr = ['mex', 'cay', 'can', 'haw', 'uni', 'arg', 'swi', 'jap', 'chi', 'uae', 'sou']
for dest in dest_arr:
    res_update = resObj["stocks"][dest]["update"]
    if lastUpdate < res_update:
        lastUpdate = res_update
lastUpdate = datetime.fromtimestamp(lastUpdate).astimezone(tzutc_8)
seq = ["最后更新 %s\n" % lastUpdate.strftime('%H:%M:%S')]

mexStock = {}
for stock in resObj["stocks"]["mex"]["stocks"]:
    if "Dahlia" == stock["name"]:
        mexStock["hua"] = stock["quantity"]
    if "Jaguar Plushie" == stock["name"]:
        mexStock["ou"] = stock["quantity"]
seq.append("墨 花%s 偶%s\n" % (mexStock["hua"], mexStock["ou"]))
cayStock = {}
for stock in resObj["stocks"]["cay"]["stocks"]:
    if "Banana Orchid" == stock["name"]:
        cayStock["hua"] = stock["quantity"]
    if "Stingray Plushie" == stock["name"]:
        cayStock["ou"] = stock["quantity"]
seq.append("开 花%s 偶%s\n" % (cayStock["hua"], cayStock["ou"]))
canStock = {}
for stock in resObj["stocks"]["can"]["stocks"]:
    if "Crocus" == stock["name"]:
        canStock["hua"] = stock["quantity"]
    if "Wolverine Plushie" == stock["name"]:
        canStock["ou"] = stock["quantity"]
seq.append("加 花%s 偶%s\n" % (canStock["hua"], canStock["ou"]))
hawStock = {}
for stock in resObj["stocks"]["haw"]["stocks"]:
    if "Orchid" == stock["name"]:
        hawStock["hua"] = stock["quantity"]
    if "Large Suitcase" == stock["name"]:
        hawStock["xiang"] = stock["quantity"]
seq.append("夏 花%s 箱%s\n" % (hawStock["hua"], hawStock["xiang"]))
ukStock = {}
for stock in resObj["stocks"]["uni"]["stocks"]:
    if "Red Fox Plushie" == stock["name"]:
        ukStock["Red"] = stock["quantity"]
    if "Nessie Plushie" == stock["name"]:
        ukStock["Nessie"] = stock["quantity"]
    if "Heather" == stock["name"]:
        ukStock["Heather"] = stock["quantity"]
seq.append("嘤 赤狐%s 水怪%s 花%s\n" % (ukStock["Red"], ukStock["Nessie"], ukStock["Heather"]))
agtStock = {}
for stock in resObj["stocks"]["arg"]["stocks"]:
    if "Ceibo Flower" == stock["name"]:
        agtStock["hua"] = stock["quantity"]
    if "Monkey Plushie" == stock["name"]:
        agtStock["ou"] = stock["quantity"]
    if "Tear Gas" == stock["name"]:
        agtStock["tear"] = stock["quantity"]
seq.append("阿 花%s 偶%s 雷%s\n" % (agtStock["hua"], agtStock["ou"], agtStock["tear"]))
swiStock = {}
for stock in resObj["stocks"]["swi"]["stocks"]:
    if "Chamois Plushie" == stock["name"]:
        swiStock["ou"] = stock["quantity"]
    if "Edelweiss" == stock["name"]:
        swiStock["hua"] = stock["quantity"]
seq.append("瑞 花%s 偶%s\n" % (swiStock["hua"], swiStock["ou"]))
jpStock = {}
for stock in resObj["stocks"]["jap"]["stocks"]:
    if "Cherry Blossom" == stock["name"]:
        jpStock["hua"] = stock["quantity"]
seq.append("日 花%s\n" % jpStock["hua"])
zgStock = {}
for stock in resObj["stocks"]["chi"]["stocks"]:
    if "Panda Plushie" == stock["name"]:
        zgStock["ou"] = stock["quantity"]
    if "Peony" == stock["name"]:
        zgStock["hua"] = stock["quantity"]
seq.append("中 花%s 偶%s\n" % (zgStock["hua"], zgStock["ou"]))
uaeStock = {}
for stock in resObj["stocks"]["uae"]["stocks"]:
    if "Camel Plushie" == stock["name"]:
        uaeStock["ou"] = stock["quantity"]
    if "Tribulus Omanense" == stock["name"]:
        uaeStock["hua"] = stock["quantity"]
seq.append("迪 花%s 偶%s\n" % (uaeStock["hua"], uaeStock["ou"]))
nfStock = {}
for stock in resObj["stocks"]["sou"]["stocks"]:
    if "Lion Plushie" == stock["name"]:
        nfStock["ou"] = stock["quantity"]
    if "African Violet" == stock["name"]:
        nfStock["hua"] = stock["quantity"]
    if "Xanax" == stock["name"]:
        nfStock["xan"] = stock["quantity"]
seq.append("南 花%s 偶%s XAN%s" % (nfStock["hua"], nfStock["ou"], nfStock["xan"]))

fo = open(file="stock.txt", mode="w", encoding="utf-8")
fo.writelines(seq)
fo.close()

print("花偶库存txt更新完成")

import requests
from datetime import datetime, timedelta, timezone


def get_npc_loot_4_str(timestamp):
    tzutc_8 = timezone(timedelta(hours=8))
    return datetime.fromtimestamp(timestamp + 210 * 60).astimezone(tzutc_8).strftime('%Y-%m-%d %H:%M:%S')


url = 'https://yata.yt/api/v1/loot/'
resObj = requests.get(url).json()
Duke = resObj["hosp_out"]["4"]
Leslie = resObj["hosp_out"]["15"]
Jimmy = resObj["hosp_out"]["19"]
Fernando = resObj["hosp_out"]["20"]
Tiny = resObj["hosp_out"]["21"]
seq = [
    "Duke %s\n" % get_npc_loot_4_str(Duke),
    "Leslie %s\n" % get_npc_loot_4_str(Leslie),
    "Jimmy %s\n" % get_npc_loot_4_str(Jimmy),
    "Fernando %s\n" % get_npc_loot_4_str(Fernando),
    "Tiny %s" % get_npc_loot_4_str(Tiny),
]
fo = open(file="loot.txt", mode="w", encoding="utf-8")
fo.writelines(seq)
fo.close()
print('NPC loot文本文件已创建')

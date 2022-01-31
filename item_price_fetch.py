import json
import requests

# URL = "https://jjins.github.io/item_price_raw.json"
URL = "https://script.google.com/macros/s/AKfycbyRfg1Cx2Jm3IuCWASUu8czKeP3wm5jKsie4T4bxwZHzXTmPbaw4ybPRA/exec?key=getItems"
resArr = requests.get(URL).json()['items']
obj = {}
for item in resArr:
    obj[item[0]] = {'name': item[1], 'price': item[2]}

file = open('item_price_raw.json', 'w')
file.write(json.dumps(obj))
file.close()

print('物品价格表已更新')

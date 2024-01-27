price = int(input())
changes = 1000 - price
coin_cnt = 0
# 500엔, 100엔, 50엔, 10엔, 5엔, 1엔
while changes > 0:
    if changes >= 500:
        coin_cnt += changes // 500
        changes = changes % 500
    elif changes >= 100:
        coin_cnt += changes // 100
        changes = changes % 100
    elif changes >= 50:
        coin_cnt += changes // 50
        changes = changes % 50
    elif changes >= 10:
        coin_cnt += changes // 10
        changes = changes % 10
    elif changes >= 5:
        coin_cnt += changes // 5
        changes = changes % 5
    else:
        coin_cnt += changes // 1
        changes = changes % 1

print(coin_cnt)

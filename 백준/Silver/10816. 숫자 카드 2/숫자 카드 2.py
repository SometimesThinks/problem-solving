n = int(input())
cards = list(map(int, input().split()))
m = int(input())
finds = list(map(int, input().split()))
num_lst = [0 for _ in range(20000001)]
have_lst = []

for card in cards:
    if card < 0:
        num_lst[-card] += 1
    elif card == 0:
        num_lst[card] += 1
    else:
        num_lst[10000000 + card] += 1

for find in finds:
    if find < 0:
        have_lst.append(num_lst[-find])
    elif find == 0:
        have_lst.append(num_lst[find])
    else:
        have_lst.append(num_lst[10000000 + find])

print(*have_lst)

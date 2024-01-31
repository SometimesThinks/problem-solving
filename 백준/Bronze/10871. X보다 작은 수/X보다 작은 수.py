n, x = map(int, input().split())
lst_a = list(map(int, input().split()))
lst_miner = list()

for i in lst_a:
    if i < x:
        lst_miner.append(i)

for j in lst_miner:
    print(j, end=" ")
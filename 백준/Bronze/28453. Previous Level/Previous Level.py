import sys

input = sys.stdin.readline

n = int(input())
m = list(map(int, input().split()))
res = []

for val in m:
    lvl = 0
    if val >= 300:
        lvl = 1
    elif val >= 275:
        lvl = 2
    elif val >= 250:
        lvl = 3
    else:
        lvl = 4
    res.append(lvl)
print(*res)

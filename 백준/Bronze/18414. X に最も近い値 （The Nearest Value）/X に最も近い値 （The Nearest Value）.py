import sys

input = sys.stdin.readline

x, l, r = map(int, input().split())
res = 0
m = float('inf')

for i in range(l, r + 1):
    temp = abs(x - i)
    if temp < m:
        res = i
        m = temp
print(res)

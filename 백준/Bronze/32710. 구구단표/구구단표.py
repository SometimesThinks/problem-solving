import sys

input = sys.stdin.readline

n = int(input())
res = 0

for i in range(2, 10):
    share = n // i
    div = n % i
    if share < 10 and div == 0:
        res = 1
        break
if n < 10:
    res = 1
print(res)
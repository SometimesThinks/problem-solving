import sys

input = sys.stdin.readline

n = int(input())
w = int(input())
res = n * 10

if n >= 3:
    res += 20
if n == 5:
    res += 50
if w > 1000:
    res -= 15
print(res if res > 0 else 0)

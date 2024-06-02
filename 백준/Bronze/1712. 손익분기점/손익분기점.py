import sys

input = sys.stdin.readline
# a: 고정 비용, b: 변동 비용, c: 판매가
a, b, c = map(int, input().split())

if b == c:
    bkp = -1
else:
    bkp = int(a / (c - b)) + 1

if bkp > 0:
    print(bkp)
else:
    print(-1)
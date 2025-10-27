import sys
import math

input = sys.stdin.readline

n = int(input())
seq = list(map(int, input().split()))
b, c = map(int, input().split())
cnt = 0

for a in seq:
    a -= b
    cnt += 1
    if a > 0:
        cnt += math.ceil(a / c)
print(cnt)

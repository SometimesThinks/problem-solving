import sys

input = sys.stdin.readline

n = int(input())
choices = list(map(int, input().split()))
res = 0

for idx, val in enumerate(choices):
    if val <= n:
        res += val
    else:
        res += n
print(res)

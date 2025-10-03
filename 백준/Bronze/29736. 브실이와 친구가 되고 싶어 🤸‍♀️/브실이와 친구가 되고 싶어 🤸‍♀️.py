import sys

input = sys.stdin.readline

a, b = map(int, input().split())
k, x = map(int, input().split())
cnt = 0

for i in range(a, b + 1):
    if k - x <= i <= k + x:
        cnt += 1
    elif i > k + x:
        break
print(cnt if cnt else 'IMPOSSIBLE')

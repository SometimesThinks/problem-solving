import sys

input = sys.stdin.readline

s, d, i, l, n = list(map(int, input().split()))
res = 4 * n - (s + d + i + l)

print(res if res >= 0 else 0)

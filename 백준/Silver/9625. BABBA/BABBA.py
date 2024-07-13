import sys

input = sys.stdin.readline

n = int(input().rstrip())

dp = [[] for _ in range(n + 1)]
dp[0].append(0)     # A의 수
dp[0].append(1)     # B의 수

for i in range(1, n):
    dp[i].append(dp[i - 1][1])
    dp[i].append(dp[i - 1][0] + dp[i - 1][1])

print(*dp[n - 1])

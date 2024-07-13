import sys

input = sys.stdin.readline

n = int(input().rstrip())
dp = [0 for _ in range(n + 1)]
dp[0] = 1

for i in range(1, n + 1):
    if i == 1:
        dp[1] = 1
    else:
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007

print(dp[n - 1])

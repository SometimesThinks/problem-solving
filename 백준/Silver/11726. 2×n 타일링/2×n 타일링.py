import sys

input = sys.stdin.readline

n = int(input().rstrip())
# n = 1일 시, Index Error 발생 -> dp 배열 및 재할당 방법 변경
dp = [0 for _ in range(n + 1)]
dp[0] = 1
dp[1] = 1

for i in range(2, n + 1):
    dp[i] = dp[i - 1] + dp[i - 2]

print(dp[n] % 10007)

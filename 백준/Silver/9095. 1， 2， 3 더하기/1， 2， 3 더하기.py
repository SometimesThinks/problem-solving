import sys

input = sys.stdin.readline

t = int(input().rstrip())
dp = [0 for _ in range(12)]
# dp 배열 값 입력
dp[1] = 1
dp[2] = 2
dp[3] = 4
# i >= 4, dp[i] = dp[i -1] + dp[i - 2] + dp[i - 3]
for i in range(4, 12):
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
# dp 배열 값 출력(index == n)
for _ in range(t):
    n = int(input().rstrip())
    print(dp[n])

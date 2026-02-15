import sys

input = sys.stdin.readline

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
dp = [matrix[0][0:], matrix[0][0:]]
temp = [0 for _ in range(3)]

for i in range(1, n):
    # 최솟값 계산
    temp[0] = min(dp[0][0], dp[0][1]) + matrix[i][0]
    temp[1] = min(dp[0]) + matrix[i][1]
    temp[2] = min(dp[0][1], dp[0][2]) + matrix[i][2]
    dp[0][0] = temp[0]
    dp[0][1] = temp[1]
    dp[0][2] = temp[2]
    # 최댓값 계산
    temp[0] = max(dp[1][0], dp[1][1]) + matrix[i][0]
    temp[1] = max(dp[1]) + matrix[i][1]
    temp[2] = max(dp[1][1], dp[1][2]) + matrix[i][2]
    dp[1][0] = temp[0]
    dp[1][1] = temp[1]
    dp[1][2] = temp[2]
print(max(dp[1]), min(dp[0]))

import sys

input = sys.stdin.readline

n = int(input().rstrip())
num_lst = [0]
dp = [0 for _ in range(n + 1)]

for _ in range(n):
    num_lst.append(int(input().rstrip()))

dp[1] = num_lst[1]

for i in range(2, n + 1):
    if i == 2:
        dp[i] = dp[1] + num_lst[2]
    else:
        dp[i] = max(num_lst[i] + dp[i - 2], num_lst[i] + num_lst[i - 1] + dp[i - 3])

print(dp[n])

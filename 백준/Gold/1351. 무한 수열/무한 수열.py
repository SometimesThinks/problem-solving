import sys

input = sys.stdin.readline


def recurive(num):
    if num in dp:
        return dp[num]
    else:
        dp[num] = recurive(num // p) + recurive(num // q)
        return dp[num]


n, p, q = map(int, input().split())
dp = {0: 1}

print(recurive(n))

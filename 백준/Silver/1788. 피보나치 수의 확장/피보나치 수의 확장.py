import sys

input = sys.stdin.readline

n = input().rstrip()
if n[0] == '-':
    num = int(n[1:])
    negative = True
else:
    num = int(n)
    negative = False
dp = [0 for _ in range(num + 1)]
dp[0] = 0

for i in range(1, num + 1):
    if i == 1:
        dp[1] = 1
    else:
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000000
# n이 음수이고, n의 절댓값이 2의 배수이면 피보나치 수열에서 양수값을 가짐
if negative and num % 2 == 0:
    print(-1)
elif num == 0:
    print(0)
else:
    print(1)
print(dp[num])

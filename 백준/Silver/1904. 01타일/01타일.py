import sys

input = sys.stdin.readline

n = int(input().rstrip())
dp = [0 for _ in range(n + 1)]
dp[0] = 1
dp[1] = 2

for i in range(2, n):
    # 메모리 초과 발생 -> 반복문 안에서 % 15746 연산 시행 후 저장
    # 아니면 최종 dp[n] 값이 너무 커져서 int형 값 초과 될 수 있음
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746

print(dp[n - 1])

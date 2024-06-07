import sys

input = sys.stdin.readline

n, k = map(int, input().split())
result = 1

for i in range(1, n + 1):
    result *= i
for j in range(1, n - k + 1):
    result /= j
for k in range(1, k + 1):
    result /= k

print(int(result))

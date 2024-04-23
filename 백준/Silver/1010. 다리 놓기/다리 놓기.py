import sys

input = sys.stdin.readline

t = int(input())

for tc in range(t):
    n, m = map(int, input().split())
    cases = 1

    for i in range(n):
        cases *= (m - i)

    for j in range(1, n + 1):
        cases //= j

    print(cases)
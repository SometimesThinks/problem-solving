import sys

input = sys.stdin.readline

n, m = map(int, input().split())    # n: 카드 수, m: 기준점
cards = list(map(int, input().split()))
result = 0

for i in range(n - 2):
    for j in range(i + 1, n - 1):
        for k in range(j + 1, n):
            total = cards[i] + cards[j] + cards[k]
            if total > m:
                continue
            if (m - total) < (m - result):
                result = total

print(result)

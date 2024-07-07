import sys

input = sys.stdin.readline

t = int(input().rstrip())

for _ in range(t):
    k = int(input().rstrip())   # 층 수
    n = int(input().rstrip())   # 호 수
    zero_fl = [i for i in range(1, n + 1)]
    # 층 수만큼 반복하면서, 사람 수 합계 누적
    for _ in range(k):
        for i in range(1, n):
            zero_fl[i] += zero_fl[i - 1]

    print(zero_fl[-1])

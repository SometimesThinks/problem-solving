import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, k = map(int, input().split())
    seq = list(map(int, input().split()))
    left = 0
    right = n - 1
    min_diff = float('inf')
    cnt = 0

    seq.sort()
    while left < right:
        t_sum = seq[left] + seq[right]
        t_diff = abs(k - t_sum)
        if t_diff < min_diff:
            min_diff = t_diff
            cnt = 1
        elif t_diff == min_diff:
            cnt += 1
        if t_sum < k:
            left += 1
        else:
            right -= 1
    print(cnt)

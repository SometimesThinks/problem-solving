import sys

input = sys.stdin.readline

while True:
    line = input()
    if not line:
        break
    x = int(line) * 10000000
    n = int(input())
    seq = [int(input()) for _ in range(n)]
    left = 0
    right = n - 1
    res = 'danger'

    seq.sort()
    while left < right:
        temp = seq[left] + seq[right]
        if temp == x:
            res = f"yes {seq[left]} {seq[right]}"
            break
        elif temp > x:
            right -= 1
        else:
            left += 1
    print(res)

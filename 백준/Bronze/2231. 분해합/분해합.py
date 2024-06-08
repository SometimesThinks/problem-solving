import sys

input = sys.stdin.readline

n = int(input().rstrip())
res = 0

for num in range(n + 1):
    constructor = num + sum(list((map(int, list(str(num))))))
    if constructor == n:
        res = num
        break

print(res)

import sys

input = sys.stdin.readline

n = int(input())
weather = list(map(int, input().split()))
anger = 0
res = 0

for w in weather:
    if w == 1:
        anger += 1
        res += anger
    else:
        anger -= 1
        res += anger
print(res)

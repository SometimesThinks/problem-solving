import sys

input = sys.stdin.readline

socks = input().strip()
b = c = 0

for s in socks:
    if s == 'B':
        b += 1
    elif s == 'C':
        c += 1
print(b // 2 + c // 2)

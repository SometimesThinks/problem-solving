import sys

input = sys.stdin.readline

d = int(input())
e = int(input())
r = d

for i in range(e):
    s = input().strip()
    q = int(input())
    if s == '+':
        r += q
    else:
        r -= q
print(r)

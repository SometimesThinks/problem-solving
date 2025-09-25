import sys

input = sys.stdin.readline

n = int(input())

for _ in range(n):
    name = list(input().strip())
    if 'S' in name:
        print(''.join(name))
        break

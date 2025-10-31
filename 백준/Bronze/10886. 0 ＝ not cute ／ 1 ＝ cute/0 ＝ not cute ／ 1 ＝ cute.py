import sys

input = sys.stdin.readline

n = int(input())
fre = {0: 0, 1: 0}

for _ in range(n):
    fre[int(input())] += 1
print('Junhee is cute!' if fre[1] > fre[0] else 'Junhee is not cute!')

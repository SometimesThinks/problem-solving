import sys

input = sys.stdin.readline

n = int(input())
square = 0

if n == 1:
    print(1)
else:
    while n >= 1:
        if square == 0:
            n = n - 1
        else:
            n = n - (6 * square)
        square += 1
    print(square)

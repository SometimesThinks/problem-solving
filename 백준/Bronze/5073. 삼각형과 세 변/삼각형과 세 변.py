import sys

input = sys.stdin.readline

while True:
    a, b, c = sorted(list(map(int, input().split())))
    if not a or not b or not c:
        break
    if a + b <= c:
        print('Invalid')
    elif a == c:
        print('Equilateral')
    elif a == b or b == c:
        print('Isosceles')
    else:
        print('Scalene')

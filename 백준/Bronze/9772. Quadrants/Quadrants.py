import sys

input = sys.stdin.readline

while True:
    x, y = map(float, input().split())
    if x > 0 and y > 0:
        print('Q1')
    elif x < 0 < y:
        print('Q2')
    elif x > 0 > y:
        print('Q4')
    elif x < 0 and y < 0:
        print('Q3')
    else:
        print('AXIS')
    if x == 0 and y == 0:
        break

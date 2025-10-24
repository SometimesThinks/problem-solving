import sys

input = sys.stdin.readline

while True:
    a, b = map(int, input().split())
    if not a and not b:
        break
    elif not a or not b:
        print('neither')
    elif a < b and b % a == 0:
        print('factor')
    elif a > b and a % b == 0:
        print('multiple')
    else:
        print('neither')

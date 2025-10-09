import sys

input = sys.stdin.readline


def print_num(num):
    res = ''
    if num == '0':
        res = '0000\n0  0\n0  0\n0  0\n0000'
    elif num == '1':
        res = '   1\n   1\n   1\n   1\n   1'
    elif num == '2':
        res = '2222\n   2\n2222\n2\n2222'
    elif num == '3':
        res = '3333\n   3\n3333\n   3\n3333'
    elif num == '4':
        res = '4  4\n4  4\n4444\n   4\n   4'
    elif num == '5':
        res = '5555\n5\n5555\n   5\n5555'
    elif num == '6':
        res = '6666\n6\n6666\n6  6\n6666'
    elif num == '7':
        res = '7777\n   7\n   7\n   7\n   7'
    elif num == '8':
        res = '8888\n8  8\n8888\n8  8\n8888'
    else:
        res = '9999\n9  9\n9999\n   9\n   9'
    print(res)


n = input().strip()

for idx, val in enumerate(n):
    print_num(val)
    if idx < len(n) - 1:
        print()

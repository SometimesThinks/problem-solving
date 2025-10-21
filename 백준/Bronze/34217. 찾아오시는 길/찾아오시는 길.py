import sys

input = sys.stdin.readline

a, b = map(int, input().split())
c, d = map(int, input().split())
h = a + c
y = b + d

if h < y:
    print('Hanyang Univ.')
elif y < h:
    print('Yongdap')
else:
    print('Either')

import sys

input = sys.stdin.readline

[t, x] = list(map(int, input().split()))
n = int(input())
dic = {}

for i in range(n):
    k = input()
    a = list(map(int, input().split()))
    for idx, val in enumerate(a):
        dic[val] = dic.get(val, 0) + 1

print('YES' if (dic.get(x, 0) == n) else 'NO')

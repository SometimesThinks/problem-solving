import sys

input = sys.stdin.readline

s1 = input()
s2 = input()
s3 = input()
check = [s1[0], s2[0], s3[0]]
res = 'GLOBAL'

for i in ['l', 'k', 'p']:
    if i not in check:
        res = 'PONIX'
        break
print(res)

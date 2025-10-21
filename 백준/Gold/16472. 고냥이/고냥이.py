import sys

input = sys.stdin.readline

n = int(input())
s = input().rstrip()
fre = {}
check = set()
left = -1
right = 0
t_len = 0
res = 0

while left < right < len(s):
    now = s[right]
    check.add(now)
    if not fre.get(now):
        fre[now] = 1
    else:
        fre[now] += 1
    right += 1
    t_len += 1
    while len(check) > n:
        left += 1
        t_len -= 1
        pre = s[left]
        if fre.get(pre) == 1:
            check.remove(s[left])
            fre[pre] = 0
        else:
            fre[pre] -= 1
    if t_len > res:
        res = t_len
print(res)

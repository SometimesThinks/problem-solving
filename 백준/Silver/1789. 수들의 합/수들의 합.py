import sys

input = sys.stdin.readline

s = int(input().rstrip())
n = 0
n_lst = []
total = 0

while total < s:
    n += 1
    total += n
    n_lst.append(n)

if total == s:
    pass
else:
    total -= n
    n_lst.pop()
    n -= 1
    total -= n
    n_lst.pop()
    while True:
        n += 1
        if total + n == s:
            n_lst.append(n)
            break

print(len(n_lst))

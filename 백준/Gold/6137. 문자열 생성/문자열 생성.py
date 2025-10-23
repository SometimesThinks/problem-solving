import sys

input = sys.stdin.readline

n = int(input())
s = [input().rstrip() for _ in range(n)]
left = 0
right = n - 1
t = ''

while left <= right:
    head = s[left]
    tail = s[right]
    if left == right:
        t += head
        break
    if head < tail:
        t += head
        left += 1
    elif head > tail:
        t += tail
        right -= 1
    else:
        t_l = left
        t_r = right
        while t_l <= t_r and s[t_l] == s[t_r]:
            t_l += 1
            t_r -= 1
        if s[t_l] < s[t_r]:
            t += s[left]
            left += 1
        elif s[t_l] > s[t_r]:
            t += s[right]
            right -= 1
        else:
            t += s[right]
            right -= 1
for i in range(0, len(t), 80):
    print(t[i: i + 80])

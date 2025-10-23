import sys

input = sys.stdin.readline

g = int(input())
weighs = [i + 1 for i in range(g)]
left = 0
right = 1
res = []

while len(weighs) > 1 and left < right < g:
    a = weighs[right]
    b = weighs[left]
    t_g = a ** 2 - b ** 2
    if a + b > g:
        break
    if t_g == g:
        res.append(a)
    if t_g <= g:
        right += 1
    else:
        left += 1
print(*res, sep='\n') if len(res) else print(-1)

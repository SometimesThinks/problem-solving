import sys

input = sys.stdin.readline

n = int(input())
s = list(map(int, input().split()))
check = [0 for _ in range(10)]
left = right = 0
kind = temp = res = 0

while right < n:
    if not check[s[right]]:
        kind += 1
    temp += 1
    check[s[right]] += 1
    while kind > 2:
        check[s[left]] -= 1
        temp -= 1
        if not check[s[left]]:
            kind -= 1
        left += 1
    if temp > res:
        res = temp
    right += 1
print(res)

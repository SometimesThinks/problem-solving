import sys

input = sys.stdin.readline

n, d, k, c = map(int, input().split())
seq = [int(input()) for _ in range(n)]
left = right = 0
check = {}
res = 0
# 초기 초밥 세팅
while right < k:
    num = seq[right]
    check[num] = check.get(num, 0) + 1
    right += 1
# 문제 풀이 시작점
while left < n:
    temp = len(check)
    if not check.get(c):
        temp += 1
    if temp > res:
        res = temp
    if check[seq[left]] == 1:
        del check[seq[left]]
    else:
        check[seq[left]] -= 1
    left += 1
    if right == n:
        right -= n
    check[seq[right]] = check.get(seq[right], 0) + 1
    right += 1
print(res)

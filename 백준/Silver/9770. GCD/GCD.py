import sys

input = sys.stdin.readline


def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)


nums = []
res = 0
# 입력 처리
while True:
    line = input()
    if not line:
        break
    nums.extend(list(map(int, line.split())))
# 문제 풀이 시작점
for i, v1 in enumerate(nums):
    for j, v2 in enumerate(nums):
        if i == j:
            continue
        temp = gcd(v1, v2)
        if temp > res:
            res = temp
print(res)

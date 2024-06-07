import sys

input = sys.stdin.readline

a, b = map(int, input().split())
temp_a, temp_b = max(a, b), min(a, b)
gcd = 1
# 최대공약수: 유클리드 호제법 사용
while True:
    r = temp_a % temp_b
    temp_a = temp_b
    temp_b = r
    if min(temp_a, temp_b) == 0:
        gcd = max(temp_a, temp_b)
        break
# 최소공배수: 두 자연수의 곱 / 최대공약수
lcm = int(a * b / gcd)

print(gcd)
print(lcm)

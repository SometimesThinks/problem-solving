def is_prime_number(num): # 소수 판별 함수(에라토스테네스의 체 사용)
    if num < 2:
        return False
    for i in range(2, int(num ** (1/2)) + 1):
        if num % i == 0:
            return False
    return True

m, n = map(int, input().split())

for num in range(m, n + 1):
    if is_prime_number(num):
        print(num)
def is_prime_number(num):
    if num < 2:
        return 0
    for i in range(2, num):
        if num % i == 0:
            return 0
    return 1

n = int(input())
prime_count = 0
lst = list(map(int, input().split()))

for num in lst:
    prime_count += is_prime_number(num)

print(prime_count)
a = int(input())
b = int(input())
c = int(input())
result = a * b * c
digits = [0] * 10

for digit in str(result):
    digits[int(digit)] += 1

for num in digits:
    print(num)
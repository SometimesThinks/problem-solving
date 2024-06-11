import sys

input = sys.stdin.readline

num = 0
# 세개의 문자열 중 하나는 숫자 존재
for i in range(1, 4):
    string = input().rstrip()
    if string.isdigit():
        num = int(string) + (4 - i)
        break
# num 3의 배수, 5의 배수 판단
if num % 3 == 0 and num % 5 == 0:
    print('FizzBuzz')
elif num % 3 == 0 and num % 5 != 0:
    print('Fizz')
elif num % 3 != 0 and num % 5 == 0:
    print('Buzz')
else:
    print(num)

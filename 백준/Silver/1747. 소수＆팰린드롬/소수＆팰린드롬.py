import math
import sys

input = sys.stdin.readline


def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True


def is_palindrome(num):
    str_num = str(num)
    length = len(str_num)
    for i in range(length):
        if str_num[i] != str_num[length - 1 - i]:
            return False
    return True


n = int(input())
res = n

while True:
    if not is_palindrome(res) or not is_prime(res):
        res += 1
        continue
    break
print(res)

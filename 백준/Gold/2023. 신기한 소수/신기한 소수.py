import sys
import math

input = sys.stdin.readline


def check(num):
    if num < 2:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True


def recur(num, length, max_len, lst):
    if length == max_len:
        lst.append(num)
        return
    if not length:
        for i in start:
            recur(num + i, length + 1, n, res)
    else:
        for i in end:
            temp = num * 10 + i
            if check(temp):
                recur(temp, length + 1, n, res)


n = int(input())
start = [2, 3, 5, 7]
end = [1, 3, 7, 9]
res = []

recur(0, 0, n, res)
print(*res, sep='\n')

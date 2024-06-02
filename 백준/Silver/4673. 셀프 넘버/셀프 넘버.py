import sys

input = sys.stdin.readline


def self_num(num):
    constructor = num + sum(list(map(int, list(str(num)))))
    
    if constructor > 10000:
        return 0
    if self_numbers[constructor] == 0:
        self_numbers[constructor] = 1
    self_num(constructor)


self_numbers = [0 for _ in range(10001)]

for i in range(1, 10001):
    self_num(i)

for i in range(1, 10001):
    if self_numbers[i] == 0:
        print(i)

import sys

input = sys.stdin.readline


def count_grundy(num):
    grundy_numbers = [0 for _ in range(num + 1)]
    for i in range(1, num + 1):
        next = set()
        for act in actions:
            if i >= act:
                next.add(grundy_numbers[i - act])
        mex = 0
        while mex in next:
            mex += 1
        grundy_numbers[i] = mex
    return grundy_numbers


n = int(input())
actions = [1, 3]
grundy = count_grundy(n)

if grundy[n] == 0:
    print('SK')
else:
    print('CY')

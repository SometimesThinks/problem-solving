import sys

input = sys.stdin.readline

# Sprague-Grundy Theorem(스프라그-그런디 정리) 사용
def count_grundy(n):
    grundy_number = [0 for _ in range(n + 1)]
    for i in range(1, n + 1):
        next = set()
        for action in actions:
            if i >= action:
                next.add(grundy_number[i - action])
        mex = 0
        while mex in next:
            mex += 1
        grundy_number[i] = mex
    return grundy_number


b1, b2, b3 = map(int, input().split())
actions = [b1, b2, b3]

for _ in range(5):
    k1, k2 = map(int, input().split())
    grundy = count_grundy(max(k1, k2))
    # 비트 연산자 중 XOR 연산 사용
    if grundy[k1] ^ grundy[k2] != 0:
        print('A')
    else:
        print('B')

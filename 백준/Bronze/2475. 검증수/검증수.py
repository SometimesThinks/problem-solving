# import sys

# sys.stdin = open('input.txt')

num_lst = list(map(int, input().split()))
verification = 0

for num in num_lst:
    verification = verification + num * num

verification %= 10
print(verification)
import sys

n = int(sys.stdin.readline())
num_lst = []

for _ in range(n):
    num = int(sys.stdin.readline())
    num_lst.append(num)

num_lst.sort()

for num in num_lst:
    print(num)
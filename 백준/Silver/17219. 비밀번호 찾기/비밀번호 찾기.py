import sys

input = sys.stdin.readline

n, m = map(int, input().rstrip().split())
passwords = {}

for _ in range(n):
    address, password = input().rstrip().split()
    passwords[address] = password

for _ in range(m):
    address = input().rstrip()
    print(passwords[address])

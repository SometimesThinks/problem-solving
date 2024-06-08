import sys

input = sys.stdin.readline

n = int(input())
members = []

for _ in range(n):
    age, name = input().rstrip().split()
    members.append((int(age), name))
# 나이순 정렬
members.sort(key=lambda x: x[0])

for member in members:
    print(member[0], member[1])

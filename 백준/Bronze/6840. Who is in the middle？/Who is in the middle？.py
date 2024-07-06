import sys

input = sys.stdin.readline

lst = []

for _ in range(3):
    lst.append(int(input().rstrip()))

print(sorted(lst)[1])

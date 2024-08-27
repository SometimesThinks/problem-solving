import sys

input = sys.stdin.readline

n = int(input().rstrip())
houses = list(map(int, input().rstrip().split()))

houses.sort()

if n % 2 == 0:
    print(houses[n // 2 - 1])
else:
    print(houses[n // 2])

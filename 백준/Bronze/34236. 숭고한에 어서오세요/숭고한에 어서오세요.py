import sys

input = sys.stdin.readline

n = int(input())
an = list(map(int, input().split()))

print(an[n - 1] + an[n - 1] - an[n - 2])

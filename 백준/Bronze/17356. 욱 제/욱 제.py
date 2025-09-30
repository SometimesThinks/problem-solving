import sys

input = sys.stdin.readline

a, b = map(float, input().split())
m = (b - a) / 400

print(1 / (1 + 10 ** m))

import sys

input = sys.stdin.readline

x, y, w, h = map(int, input().split())

print(sorted([(w - x), x, (h - y), y])[0])

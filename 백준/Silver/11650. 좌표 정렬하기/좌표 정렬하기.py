import sys

input = sys.stdin.readline

n = int(input())
coordinates = []

for _ in range(n):
    x, y = map(int, input().rstrip().split())
    coordinates.append((x, y))

coordinates.sort(key=lambda coo: (coo[0], coo[1]))
for c in coordinates:
    print(*c)

import sys

input = sys.stdin.readline

n = int(input())
matrix = [[0 for _ in range(1001)] for _ in range(1001)]
papers = [0 for _ in range(n + 1)]

for k in range(1, n + 1):
    x1, y1, width, high = map(int, input().split())

    for x in range(x1, x1 + width):
        for y in range(y1, y1 + high):
            matrix[x][y] = k

for x in range(1001):
    for y in range(1001):
        papers[matrix[x][y]] += 1

for i in range(1, n + 1):
    print(papers[i])

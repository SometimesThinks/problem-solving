import sys
from collections import deque

input = sys.stdin.readline


def bfs(str_x, str_y):
    global result
    q = deque()
    q.append((str_x, str_y, 0))
    visited[str_x][str_y] = 0
    while q:
        nx, ny, cnt = q.popleft()
        if cnt > result:
            result = cnt
        for i in range(4):
            tx = nx + dx[i]
            ty = ny + dy[i]
            if 0 <= tx < n and 0 <= ty < m:
                if directions[tx][ty] == "L" and visited[tx][ty] == -1:
                    q.append((tx, ty, cnt + 1))
                    visited[tx][ty] = cnt + 1


n, m = map(int, input().split())
directions = [list(input().strip()) for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
result = 0

for r in range(n):
    for c in range(m):
        visited = [[-1 for _ in range(m)] for _ in range(n)]
        if directions[r][c] == "L":
            bfs(r, c)

print(result)

import sys
from collections import deque

input = sys.stdin.readline


def bfs(start):
    q = deque()
    q.append(start)
    visited[start[0]][start[1]] = 1
    com = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            tx = x + dx[i]
            ty = y + dy[i]
            if 0 <= tx < n and 0 <= ty < n:
                if visited[tx][ty] == 0 and directions[tx][ty] == 1:
                    q.append((tx, ty))
                    visited[tx][ty] = 1
                    com += 1
    return com


n = int(input())
directions = [list(map(int, list(input().strip()))) for _ in range(n)]
visited = [[0 for _ in range(n)] for _ in range(n)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
com_cnt = 0
com_lst = []

for r in range(n):
    for c in range(n):
        if visited[r][c] == 0 and directions[r][c] == 1:
            com_lst.append(bfs((r, c)))
            com_cnt += 1

print(com_cnt)

for j in sorted(com_lst):
    print(j)

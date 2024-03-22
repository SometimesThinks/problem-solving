import sys
from collections import deque

input = sys.stdin.readline


def bfs(start):
    q = deque()
    q.append((start[0], start[1], 0))
    visited[start[0]][start[1]] = 1
    sword = sys.maxsize
    while q:
        x, y, dist = q.popleft()
        if x == n - 1 and y == m - 1:
            return min(dist, sword)
        for i in range(4):
            tx = x + dx[i]
            ty = y + dy[i]
            if 0 <= tx < n and 0 <= ty < m and visited[tx][ty] == 0:
                if matrix[tx][ty] == 2:
                    sword = dist + 1 + (n - 1 - tx) + (m - 1 - ty)
                    visited[tx][ty] = 1
                else:
                    if matrix[tx][ty] == 0:
                        q.append((tx, ty, dist + 1))
                        visited[tx][ty] = 1
    return sword


n, m, t = map(int, input().split())     # n: 세로, m: 가로, t: 제한 시간
matrix = [list(map(int, input().split())) for _ in range(n)]    # 0: 빈칸, 1: 벽, 2: 명검
visited = [[0 for _ in range(m)] for _ in range(n)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
shortest = bfs((0, 0))

if shortest <= t:
    print(shortest)
else:
    print('Fail')

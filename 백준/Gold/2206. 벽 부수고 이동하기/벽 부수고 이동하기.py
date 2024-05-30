import sys
from collections import deque

input = sys.stdin.readline


def bfs(x, y):
    q = deque()
    q.append((x, y, 1, False))  # x, y, cnt, 벽 부순 여부
    visited[x][y][0] = 1
    while q:
        nx, ny, cnt, is_break = q.popleft()
        if nx == n - 1 and ny == m - 1:
            return cnt
        for i in range(4):
            tx = nx + dx[i]
            ty = ny + dy[i]
            if 0 <= tx < n and 0 <= ty < m:
                # 벽을 안 만났을 경우
                if directions[tx][ty] == 0:
                    # 벽을 부술 수 있는 경우
                    if not is_break and visited[tx][ty][0] == 0:
                        q.append((tx, ty, cnt + 1, is_break))
                        visited[tx][ty][0] = 1
                    elif is_break and visited[tx][ty][1] == 0:
                        q.append((tx, ty, cnt + 1, is_break))
                        visited[tx][ty][1] = 1
                # 벽을 만났을 경우
                elif directions[tx][ty] == 1:
                    # 벽을 부술 수 있는 경우
                    if not is_break and visited[tx][ty][1] == 0:
                        q.append((tx, ty, cnt + 1, True))
                        visited[tx][ty][1] = 1
                    # 벽을 부술 수 없는 경우
                    elif is_break:
                        continue
    return -1


n, m = map(int, input().split())    # n: 행의 수, m: 열의 수
directions = [list(map(int, list(input().strip()))) for _ in range(n)]
visited = [[[0, 0] for _ in range(m)] for _ in range(n)]    # 벽 안부쉈을 때, 벽 부쉈을 때
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

print(bfs(0, 0))

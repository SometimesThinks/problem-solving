import sys
from collections import deque

input = sys.stdin.readline


def bfs():
    while q:
        nx, ny, nt = q.popleft()
        for i in range(4):
            tx = nx + dx[i]
            ty = ny + dy[i]
            if 0 <= tx < n and 0 <= ty < m:
                if visited[tx][ty] == -1 and box[tx][ty] == 0:
                    q.append((tx, ty, nt + 1))
                    visited[tx][ty] = nt + 1


m, n = map(int, input().rstrip().split())   # m: 가로, n: 세로
q = deque()
box = [list(map(int, input().rstrip().split())) for _ in range(n)]
visited = [[-1 for _ in range(m)] for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
flag = False
result = -sys.maxsize

# 토마토 익었고, 방문 안한 곳이면 bfs 호출
# 익은 토마토를 q에 모두 넣어놓고, bfs 호출해야 토마토 동시에 익는 과정 구현 가능
for r in range(n):
    for c in range(m):
        if box[r][c] == 1 and visited[r][c] == -1:
            q.append((r, c, 0))

bfs()

for r in range(n):
    for c in range(m):
        # 토마토가 있는데, 방문 못했으면 -1 출력
        if not flag and visited[r][c] == -1 and box[r][c] == 0:
            print(-1)
            flag = True
            break
        # 위 상황이 아니면 토마토 익는 최댓값 경신
        if visited[r][c] > result:
            result = visited[r][c]
# 토마토 다 익었다, 결과값 출력
if not flag:
    if result <= 0:
        print(0)
    else:
        print(result)

import sys
# RecursionError 처리
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline


def dfs(x, y):
    visited[x][y] = 1
    color = drawing[x][y]

    for i in range(4):
        tx = x + dx[i]
        ty = y + dy[i]
        if 0 <= tx < n and 0 <= ty < n:
            if visited[tx][ty] == 0 and drawing[tx][ty] == color:
                dfs(tx, ty)


n = int(input().rstrip())
drawing = [list(input().rstrip()) for _ in range(n)]
visited = [[0 for _ in range(n)] for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
normal = 0
abnormal = 0
# 적록색약 아닌 경우
for r in range(n):
    for c in range(n):
        if visited[r][c] == 0:
            dfs(r, c)
            normal += 1

# 적록색약인 경우 그림, 방문 배열 초기화
for idx, row in enumerate(drawing):
    drawing[idx] = list(''.join(row).replace('R', 'G'))
visited = [[0 for _ in range(n)] for _ in range(n)]
# 적록색약인 경우
for r in range(n):
    for c in range(n):
        if visited[r][c] == 0:
            dfs(r, c)
            abnormal += 1

print(normal, abnormal)

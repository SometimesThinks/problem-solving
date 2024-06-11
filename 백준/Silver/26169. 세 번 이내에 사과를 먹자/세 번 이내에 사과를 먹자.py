import sys

input = sys.stdin.readline


def dfs(x, y, depth, cnt):
    global res
    visited[x][y] = 1

    if depth > 3:
        return
    if depth <= 3 and cnt >= 2:
        res = 1
        return
    for i in range(4):
        tx = x + dx[i]
        ty = y + dy[i]
        if 0 <= tx < 5 and 0 <= ty < 5:
            if visited[tx][ty] == 0 and board[tx][ty] != -1:
                visited[tx][ty] = 1
                if board[tx][ty] == 1:
                    dfs(tx, ty, depth + 1, cnt + 1)
                else:
                    dfs(tx, ty, depth + 1, cnt)
                visited[tx][ty] = 0


board = [list(map(int, input().rstrip().split())) for _ in range(5)]
r, c = map(int, input().rstrip().split())
visited = [[0 for _ in range(5)] for _ in range(5)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
res = 0

dfs(r, c, 0, board[r][c])
print(res)

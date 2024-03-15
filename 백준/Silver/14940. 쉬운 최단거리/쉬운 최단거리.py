from collections import deque

def bfs(start, visited):
    new_matrix = [[0 for _ in range(m)] for _ in range(n)]
    q = deque()
    q.append([start[0], start[1], 0])
    visited[start[0]][start[1]] = 1

    while q:
        x, y, depth = q.popleft()
        for i in range(4):
            temp_x = x + dx[i]
            temp_y = y + dy[i]
            if 0 <= temp_x < n and 0 <= temp_y < m and visited[temp_x][temp_y] == 0 and directions[temp_x][temp_y] == 1:
                q.append([temp_x, temp_y, depth + 1])
                visited[temp_x][temp_y] = 1
                new_matrix[temp_x][temp_y] = depth + 1
    return new_matrix


n, m = map(int, input().split())    # n: 세로, m: 가로
directions = [list(map(int, input().split())) for _ in range(n)]
visit = [[0 for _ in range(m)] for _ in range(n)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
flag = False

for r in range(n):
    for c in range(m):
        if directions[r][c] == 2:
            result_mat = bfs([r, c], visit)
            flag = True
            break
    if flag:
        break

for r in range(n):
    for c in range(m):
        if directions[r][c] == 1 and result_mat[r][c] == 0:
            result_mat[r][c] = -1

for r in range(n):
    print(*result_mat[r])
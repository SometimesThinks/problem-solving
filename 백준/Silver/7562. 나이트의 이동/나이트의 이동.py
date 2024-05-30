import sys
from collections import deque

input = sys.stdin.readline


def bfs(str_x, str_y, des_x, des_y, length):
    q = deque()
    q.append((str_x, str_y, 0))
    visited[str_x][str_y] = 1

    while q:
        pos_x, pos_y, cnt = q.popleft()
        if pos_x == des_x and pos_y == des_y:
            return cnt
        for i in range(8):
            new_x = pos_x + dx[i]
            new_y = pos_y + dy[i]
            if 0 <= new_x < length and 0 <= new_y < length and visited[new_x][new_y] == 0:
                q.append((new_x, new_y, cnt + 1))
                visited[new_x][new_y] = 1


t = int(input())
dx = [-2, -1, 1, 2, -2, -1, 1, 2]
dy = [-1, -2, -2, -1, 1, 2, 2, 1]

for _ in range(t):
    l = int(input())    # 체스판의 길이
    now = list(map(int, input().strip().split()))
    des = list(map(int, input().strip().split()))
    visited = [[0 for _ in range(l)] for _ in range(l)]

    print(bfs(now[0], now[1], des[0], des[1], l))

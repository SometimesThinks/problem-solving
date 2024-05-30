import sys
from collections import deque

input = sys.stdin.readline


def bfs(x):
    q = deque()
    q.append((x, 0))
    visited[x] = 1
    while q:
        num, cnt = q.popleft()
        if num == 1:
            return cnt
        for new_num in [num / 3, num / 2, num - 1]:
            if new_num == int(new_num):
                new_num = int(new_num)
                if new_num >= 1 and visited[new_num] == 0:
                    q.append((new_num, cnt + 1))
                    visited[new_num] = 1


n = int(input())
visited = [0 for _ in range(1000001)]

print(bfs(n))

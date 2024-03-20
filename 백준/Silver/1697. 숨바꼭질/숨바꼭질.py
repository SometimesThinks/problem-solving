import sys
from collections import deque

input = sys.stdin.readline


def bfs(start):
    q = deque()
    q.append((start, 0))
    visited[start] = 1
    while q:
        pos, depth = q.popleft()
        if pos == k:
            return depth
        for new_pos in [pos + 1, pos - 1, pos * 2]:
            if 0 <= new_pos < 100001 and visited[new_pos] == 0:
                q.append((new_pos, depth + 1))
                visited[new_pos] = 1


x, k = map(int, input().split())
visited = [0 for _ in range(100001)]

print(bfs(x))

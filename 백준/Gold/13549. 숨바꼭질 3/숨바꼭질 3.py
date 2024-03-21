import sys
from collections import deque

input = sys.stdin.readline


def bfs(start, end):
    q = deque()
    q.append((start, 0))
    visited[start] = 1
    while q:
        pos, sec = q.popleft()
        if pos == end:
            return sec
        for idx, new_pos in enumerate([pos * 2, pos - 1, pos + 1]):
            if 0 <= new_pos < 100001 and visited[new_pos] == 0:
                if idx == 0:    # 순간이동 -> 0초 소요
                    q.append((new_pos, sec))
                    visited[new_pos] = 1
                else:           # 걷기 -> 1초 소요
                    q.append((new_pos, sec + 1))
                    visited[new_pos] = 1


n, k = map(int, input().split())    # n: 수빈 위치, k: 동생 위치
visited = [0 for _ in range(100001)]

print(bfs(n, k))

import sys
from collections import deque

input = sys.stdin.readline


def bfs(num, cnt):
    q = deque()
    q.append((num, cnt))
    visited.add(num)
    while q:
        now_num, now_cnt = q.popleft()
        if now_num == b:
            return now_cnt + 1
        for t_num in [now_num * 2, int(str(now_num) + '1')]:
            if t_num <= b and t_num not in visited:
                q.append((t_num, now_cnt + 1))
                visited.add(t_num)
    return -1


a, b = map(int, input().rstrip().split())
visited = set()

print(bfs(a, 0))

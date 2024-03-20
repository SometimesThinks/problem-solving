import sys
from collections import deque

input = sys.stdin.readline


def dfs(start):
    dfs_route.append(start)
    visited_1[start] = 1

    for node in graph[start]:
        if visited_1[node] == 0:
            dfs(node)


def bfs(start):
    q = deque()
    q.append(start)
    visited_2[start] = 1
    while q:
        node = q.popleft()
        bfs_route.append(node)
        for vertax in graph[node]:
            if visited_2[vertax] == 0:
                q.append(vertax)
                visited_2[vertax] = 1


n, m, v = map(int, input().split())     # n: 정점의 수, m: 간선의 수, v: 탐색 시작 정점 번호
graph = [[] for _ in range(n + 1)]
visited_1 = [0 for _ in range(n + 1)]
visited_2 = [0 for _ in range(n + 1)]
dfs_route = []
bfs_route = []

for _ in range(m):
    s, e = map(int, input().split())
    graph[s].append(e)
    graph[e].append(s)

for lst in graph:
    lst.sort()

dfs(v)
bfs(v)

print(*dfs_route)
print(*bfs_route)

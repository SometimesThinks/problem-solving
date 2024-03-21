import sys

input = sys.stdin.readline


def dfs(start, visited):
    stack = [start]
    visited[start] = 1
    count = 0
    while stack:
        now = stack.pop()
        for node in graph[now]:
            if visited[node] == 0:
                count += 1
                stack.append(node)
                visited[node] = 1
    return count


n, m = map(int, input().split())    # n: 컴퓨터 수, m: 신뢰하는 관계 수
graph = [[] for _ in range(n + 1)]
hacked = [0 for _ in range(n + 1)]
high_hacked = []

for _ in range(m):
    a, b = map(int, input().split())
    graph[b].append(a)

for node_n in range(1, n + 1):
    visit = [0 for _ in range(n + 1)]
    if visit[node_n] == 0:
        hacked[node_n] = dfs(node_n, visit)

for idx, value in enumerate(hacked):
    if value == max(hacked):
        high_hacked.append(idx)

print(*high_hacked)

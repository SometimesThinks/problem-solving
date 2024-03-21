import sys
import heapq

input = sys.stdin.readline
INF = float('inf')


def dijkstra(start, end):
    q = []
    heapq.heappush(q, (0, start))
    distance = [INF for _ in range(n + 1)]
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if now == end:
            return distance[end]
        if dist > distance[now]:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))
    return distance[end]

n, e = map(int, input().split())    # n: 정점의 수, e: 간선의 수
graph = [[] for _ in range(n + 1)]
shortest = []

for _ in range(e):
    a, b, c = map(int, input().split())     # a <-> b, c: 거리
    graph[a].append([b, c])
    graph[b].append([a, c])

u, v = map(int, input().split())
shortest.append(dijkstra(1, u) + dijkstra(u, v) + dijkstra(v, n))
shortest.append(dijkstra(1, v) + dijkstra(v, u) + dijkstra(u, n))
shortest.append(dijkstra(1, u) + (dijkstra(u, v) * 2) + dijkstra(u, n))
shortest.append(dijkstra(1, v) + (dijkstra(v, u) * 2) + dijkstra(v, n))
result = min(shortest)

if result < INF:
    print(result)
else:
    print(-1)

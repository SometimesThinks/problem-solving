import sys
import heapq

input = sys.stdin.readline
INF = float('inf')


def dijkstra(start):
    times = [INF for _ in range(n + 1)]
    q = []
    heapq.heappush(q, (0, start))
    times[start] = 0
    while q:
        time, now = heapq.heappop(q)
        if time > times[now]:
            continue
        for i in graph[now]:
            cost = time + i[1]
            if cost < times[i[0]]:
                times[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))
    return times


t = int(input())

for tc in range(1, t + 1):
    n, d, c = map(int, input().split())     # n: 컴퓨터 수, d: 의존성 수, c: 해킹 당한 컴퓨터 번호
    graph = [[] for _ in range(n + 1)]
    cnt = 0
    last_time = 0

    for _ in range(d):
        a, b, s = map(int, input().split()) # a -> b 의존, b 감염 s초 후 a 감염
        graph[b].append([a, s])

    for value in dijkstra(c):
        if value != INF:
            cnt += 1
            if value > last_time:
                last_time = value

    print(cnt, last_time)

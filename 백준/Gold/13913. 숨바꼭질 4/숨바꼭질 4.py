import sys
from collections import deque

input = sys.stdin.readline


def bfs(start):
    q = deque()
    q.append((start, 0))
    visited[start] = 1
    while q:
        ns, nt = q.popleft()
        if ns == k:
            return nt
        for new_p in [ns * 2, ns + 1, ns - 1]:
            if 0 <= new_p < 100001 and visited[new_p] == 0:
                q.append((new_p, nt + 1))
                visited[new_p] = 1
                # 새로운 위치를 인덱스로 이용해, 부모 노드의 정보를 값으로 저장
                routes[new_p] = ns


n, k = map(int, input().rstrip().split())
visited = [0 for _ in range(100001)]
routes = [-1 for _ in range(100001)]
# 최단 경로
shortest = []

# 최단 시간 출력
print(bfs(n))
# 동생 지점부터 경로 역추적
while k != n:
    shortest.append(k)
    k = routes[k]
shortest.append(n)
# 수빈-동생 경로 출력 위해 역으로 출력
print(*shortest[::-1])

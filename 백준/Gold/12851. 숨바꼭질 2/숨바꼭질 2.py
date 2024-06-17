import sys
from collections import deque

input = sys.stdin.readline


def bfs(start, time):
    q = deque()
    q.append((start, time))
    visited[start] = 1
    while q:
        n_pos, n_time = q.popleft()
        # 동생 찾았을 시, time_cases에 time 추가
        if n_pos == k:
            time_cases.append(n_time)
            continue
        for t_pos in [n_pos * 2, n_pos + 1, n_pos - 1]:
            # 방문하지 않았으면 탐색 혹은 탐색 시간가 같을 경우엔 재방문 허용
            if 0 <= t_pos < 100001 and (visited[t_pos] == 0 or visited[t_pos] == n_time + 1):
                # 방문 시 탐색 시간으로 업데이트
                visited[t_pos] = n_time + 1
                q.append((t_pos, n_time + 1))


n, k = map(int, input().rstrip().split())
visited = [0 for _ in range(100001)]
time_cases = []

bfs(n, 0)

print(min(time_cases))
print(time_cases.count(min(time_cases)))

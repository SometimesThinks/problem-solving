import sys

input = sys.stdin.readline


def dfs(depth, seq):
    if depth == m:
        # 이미 출력했던 수열인지 확인 후 수열 출력
        if tuple(seq) not in made_set:
            made_set.add(tuple(seq))
            print(*seq)
            return
        else:
            return
    for i in range(n):
        if visited[i] == 0:
            visited[i] = 1
            dfs(depth + 1, seq + [lst[i]])
            visited[i] = 0


n, m = map(int, input().rstrip().split())
lst = list(map(int, input().rstrip().split()))
made_set = set()
visited = [0 for _ in range(n)]

lst.sort()
dfs(0, [])

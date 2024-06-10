import sys

input = sys.stdin.readline


def dfs(depth, seq):
    if depth == m:
        print(*list(seq))
        return

    for i in range(n):
        if visited[i] == 0:
            visited[i] = 1
            dfs(depth + 1, seq + str(lst[i]))
            visited[i] = 0


n, m = map(int, input().rstrip().split())
lst = list(range(1, n + 1))
visited = [0 for _ in range(n)]

dfs(0, '')

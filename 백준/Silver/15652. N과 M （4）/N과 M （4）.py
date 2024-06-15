import sys

input = sys.stdin.readline


def dfs(start, depth, seq):
    if depth == m:
        print(*seq)
        seq = []
        return

    for i in range(n):
        if lst[i] >= lst[start]:
            dfs(i, depth + 1, seq + [lst[i]])


n, m = map(int, input().rstrip().split())
lst = list(range(1, n + 1))
visited = [0 for _ in range(n)]

dfs(0, 0, [])
import sys

input = sys.stdin.readline


def dfs(start, depth, seq):
    if depth == m:
        print(*list(seq))
        return

    for i in range(n):
        if visited[i] == 0 and lst[i] >= lst[start]:
            visited[i] = 1
            dfs(i, depth + 1, seq + str(lst[i]))
            visited[i] = 0


n, m = map(int, input().rstrip().split())
lst = [i for i in range(1, n + 1)]
visited = [0 for _ in range(0, n + 1)]

lst.sort()
dfs(0, 0, '')

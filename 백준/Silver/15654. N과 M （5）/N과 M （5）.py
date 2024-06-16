import sys

input = sys.stdin.readline


def dfs(depth, seq):
    if depth == m:
        print(*seq)
        return
    # lst에서 숫자 하나씩 선택하는 반복문
    for i in range(n):
        if visited[i] == 0:
            visited[i] = 1
            dfs(depth + 1, seq + [lst[i]])
            visited[i] = 0


n, m = map(int, input().rstrip().split())
lst = list(map(int, input().rstrip().split()))
visited = [0 for _ in range(n)]

lst.sort()
dfs(0, [])

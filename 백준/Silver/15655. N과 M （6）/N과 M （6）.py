import sys

input = sys.stdin.readline


def dfs(start, depth, seq):
    if depth == m:
        print(*seq)
        return
    # 앞의 수보다 큰 수만 선택하는 반복문
    for i in range(n):
        if visited[i] == 0 and lst[i] >= lst[start]:
            visited[i] = 1
            dfs(i, depth + 1, seq + [lst[i]])
            visited[i] = 0


n, m = map(int, input().rstrip().split())
lst = list(map(int, input().rstrip().split()))
visited = [0 for _ in range(n)]

lst.sort()
dfs(0, 0, [])
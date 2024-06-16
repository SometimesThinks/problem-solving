import sys

input = sys.stdin.readline


def dfs(start, depth, seq):
    if depth == m:
        print(*seq)
        return
    # 중복 허용하고, 숫자 선택하는 반복문
    for i in range(n):
        if lst[i] >= lst[start]:
            dfs(i, depth + 1, seq + [lst[i]])


n, m = map(int, input().rstrip().split())
lst = list(map(int, input().rstrip().split()))
visited = [0 for _ in range(n)]

lst.sort()
dfs(0, 0, [])

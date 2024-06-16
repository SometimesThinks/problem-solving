import sys

input = sys.stdin.readline


def dfs(start, depth, seq):
    if depth == m:
        # 이미 출력했던 수열인지 확인 후 수열 출력
        if tuple(seq) not in made_set:
            made_set.add(tuple(seq))
            print(*seq)
            return
        else:
            return
    # 이전 수보다 더 크거나 같은 수만 선택하면서 dfs 호출하는 반복문
    for i in range(n):
        if visited[i] == 0 and lst[i] >= lst[start]:
            visited[i] = 1
            dfs(i, depth + 1, seq + [lst[i]])
            visited[i] = 0


n, m = map(int, input().rstrip().split())
lst = list(map(int, input().rstrip().split()))
made_set = set()
visited = [0 for _ in range(n)]

lst.sort()
dfs(0, 0, [])

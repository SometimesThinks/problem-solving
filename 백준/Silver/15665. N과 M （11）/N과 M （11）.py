import sys

input = sys.stdin.readline


def dfs(start, depth, seq):
    if depth == m:
        if tuple(seq) not in made_set:
            made_set.add(tuple(seq))
            print(*seq)
            return
        else:
            return
    for i in range(n):
        dfs(i, depth + 1, seq + [lst[i]])


n, m = map(int, input().rstrip().split())
lst = list(map(int, input().rstrip().split()))
made_set = set()

lst.sort()
dfs(0, 0, [])

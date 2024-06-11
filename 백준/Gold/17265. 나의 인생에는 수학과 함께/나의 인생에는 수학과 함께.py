import sys
from collections import deque

input = sys.stdin.readline


def dfs(x, y, exp):
    if x == n - 1 and y == n - 1:
        expressions.append(exp)

    for i in range(2):
        tx = x + dx[i]
        ty = y + dy[i]
        if 0 <= tx < n and 0 <= ty < n:
            if visited[tx][ty] == 0:
                dfs(tx, ty, exp + board[tx][ty])


n = int(input())
board = [input().rstrip().split() for _ in range(n)]
visited = [[0 for _ in range(n)] for _ in range(n)]
expressions = []
dx = [0, 1]
dy = [1, 0]

dfs(0, 0, board[0][0])

for idx, express in enumerate(expressions):
    dq = deque()
    for e in express:
        dq.append(e)
    # 최종 결과값 남을 때까지 deque에서 popleft -> 계산 반복
    while len(dq) > 1:
        temp = ''
        # 3개씩 popleft -> 하나의 식 -> eval 함수로 결과값 계산
        for _ in range(3):
            temp = temp + dq.popleft()
        temp = eval(temp)
        # deque 맨 앞에 추가 후 while문 반복
        dq.appendleft(str(temp))
    expressions[idx] = int(dq.popleft())

print(max(expressions), min(expressions))

import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
q = deque()

for _ in range(n):
    commend = input().rstrip().split()
    if commend[0] == 'push':
        q.append(int(commend[1]))
    elif commend[0] == 'pop':
        if len(q) > 0:
            print(q.popleft())
        else:
            print(-1)
    elif commend[0] == 'size':
        print(len(q))
    elif commend[0] == 'empty':
        if len(q) == 0:
            print(1)
        else:
            print(0)
    elif commend[0] == 'front':
        if len(q) > 0:
            print(q[0])
        else:
            print(-1)
    elif commend[0] == 'back':
        if len(q) > 0:
            print(q[len(q) - 1])
        else:
            print(-1)

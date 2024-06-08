import sys

input = sys.stdin.readline

n = int(input())
stack = []

for _ in range(n):
    commend = input().rstrip().split()
    if commend[0] == 'push':
        stack.append(int(commend[1]))
    elif commend[0] == 'pop':
        if len(stack) > 0:
            print(stack.pop())
        else:
            print(-1)
    elif commend[0] == 'size':
        print(len(stack))
    elif commend[0] == 'empty':
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif commend[0] == 'top':
        if len(stack) > 0:
            print(stack[len(stack) - 1])
        else:
            print(-1)

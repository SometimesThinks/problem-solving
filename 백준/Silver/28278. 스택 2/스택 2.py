import sys

input = sys.stdin.readline

n = int(input().rstrip())
stack = []

for _ in range(n):
    # 명령어, 값(존재한다면)
    command = list(input().rstrip().split())

    if command[0] == '1':
        stack.append(int(command[1]))
    elif command[0] == '2':
        if len(stack) > 0:
            print(stack.pop())
        else:
            print(-1)
    elif command[0] == '3':
        print(len(stack))
    elif command[0] == '4':
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif command[0] == '5':
        if len(stack) > 0:
            print(stack[-1])
        else:
            print(-1)

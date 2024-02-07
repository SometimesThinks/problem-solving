t = int(input())

for _ in range(1, t + 1):
    parenthesis_s = list(input())
    p_stack = []

    while len(parenthesis_s) > 0:
        if len(p_stack) == 0:           # stack이 비어있다면, stack에 append
            p_stack.append(parenthesis_s.pop())
            continue                    # parenthesis_s이 비었다면, 아래 if문 조건 비교 불가능하므로 continue 필수
        if parenthesis_s[-1] == '(' and p_stack[-1] == ')':
            parenthesis_s.pop()
            p_stack.pop()
            continue
        p_stack.append(parenthesis_s.pop())
    # stack이 비었다면, 모든 괄호가 짝이 맞다는 뜻이므로 YES 출력
    if len(p_stack) == 0:
        print('YES')
    else:
        print('NO')

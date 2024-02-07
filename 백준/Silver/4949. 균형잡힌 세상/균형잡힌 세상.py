brackets_lst = ['(', ')', '[', ']']
brackets = []
stack = []

while True:
    statement = input()
    
    if statement == '.':
        break

    # 괄호라면 stack에 추가
    for char in statement:
        if char in brackets_lst:
            brackets.append(char)
    # stack: 여는 괄호, brackets: 닫는 괄호
    for bracket in brackets:
        if stack and bracket == brackets_lst[1] and stack[-1] == brackets_lst[0]:
            stack.pop()
        elif stack and bracket == brackets_lst[3] and stack[-1] == brackets_lst[2]:
            stack.pop()
        else:
            stack.append(bracket)

    if stack:
        print('no')
    else:
        print('yes')
    # 한 문장 후 brackets, stack 초기화
    brackets = []
    stack = []
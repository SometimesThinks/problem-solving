k = int(input())
n_stack = []

for _ in range(k):
    num = int(input())
    if num == 0:
        n_stack.pop()
    else:
        n_stack.append(num)

print(sum(n_stack))

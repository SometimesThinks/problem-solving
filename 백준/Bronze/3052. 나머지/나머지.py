remains = [0] * 42

for i in range(10):
    num = int(input())
    remains[num % 42] = 1

print(remains.count(1))
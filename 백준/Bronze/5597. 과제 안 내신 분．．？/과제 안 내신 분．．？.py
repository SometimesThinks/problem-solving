students = [0] * 30

for i in range(28):
    num = int(input())
    students[num - 1] = 1

for j in range(30):
    if students[j] == 0:
        print(j + 1)
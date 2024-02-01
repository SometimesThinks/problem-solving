n = int(input())
num_lst = []
# 수 입력 받아서 리스트에 추가
for _ in range(n):
    num_lst.append(int(input()))

for i in range(n - 1):
    for j in range(n - 1 - i):
        if num_lst[j] > num_lst[j + 1]:
            num_lst[j], num_lst[j + 1] = num_lst[j + 1], num_lst[j]

for num in num_lst:
    print(num)
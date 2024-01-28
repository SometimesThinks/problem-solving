n, m = map(int, input().split())
a, b, total = [], [], []
# toal 행렬 0으로 초기화
for i in range(n):
    line = []
    for j in range(m):
        line.append(0)
    total.append(line)
# a 행렬 입력 받기
for i in range(n):
    line = list(map(int, input().split()))
    a.append(line)
# b 행력 입력 받기
for i in range(n):
    line = list(map(int, input().split()))
    b.append(line)
# a행렬 + b행렬 -> total 행렬에 입력하기 
for i in range(n):
    for j in range(m):
        total[i][j] = a[i][j] + b[i][j]

for i in range(n):
    print(*total[i])
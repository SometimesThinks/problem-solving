str_matrix = []

for _ in range(5): # 행렬 입력 받기
    row = list(input())
    str_matrix.append(row)

for j in range(max(map(len, str_matrix))): # 주어진 행 중 가장 긴 길이(최대 열의 개수)만큼 반복
    for i in range(5): # 행의 개수만큼 반복
        if j >= len(str_matrix[i]): # 현재 행의 길이보다 현재 열(j)이 길다면 continue
            continue
        print(str_matrix[i][j], end='')
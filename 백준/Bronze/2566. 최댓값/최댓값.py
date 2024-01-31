matrix = []
maximum = 0
c_idx, r_idx = 0, 0

for _ in range(9):
    row = list(map(int, input().split()))
    matrix.append(row)

for i in range(9):
    for j in range(9):
        if matrix[i][j] > maximum:
            maximum = matrix[i][j]
            c_idx, r_idx = i, j

print(maximum)
print(c_idx + 1, r_idx + 1)
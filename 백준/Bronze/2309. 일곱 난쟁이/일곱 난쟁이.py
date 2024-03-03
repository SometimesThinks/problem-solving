heights = []
flag = False

for _ in range(9):
    heights.append(int(input()))

heights.sort()

for i in range(8):
    for j in range(i + 1, 9):
        if (sum(heights) - (heights[i] + heights[j])) == 100:
            i_idx = i
            j_idx = j
            flag = True
            break
    if flag:
        break

for idx, height in enumerate(heights):
    if idx != i_idx and idx != j_idx:
        print(height)
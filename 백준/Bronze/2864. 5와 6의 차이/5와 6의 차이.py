a, b = input().split()
maximum, minimum = 0, 0
# 최솟값
new_a = a.replace('6', '5')
new_b = b.replace('6', '5')
minimum = int(new_a) + int(new_b)
# 최댓값
new_a = a.replace('5', '6')
new_b = b.replace('5', '6')
maximum = int(new_a) + int(new_b)

print(minimum, maximum)
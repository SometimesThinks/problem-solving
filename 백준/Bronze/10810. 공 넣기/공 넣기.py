n, m = map(int, input().split())
bucket = [0] * (n + 1)

for insert in range(m):
    i, j, k = map(int, input().split())
    for l in range(i, j + 1):
        bucket[l] = k

for element in bucket[1:]:
    print(element, end = " ")
n , m = map(int, input().split())
bucket = [0] * (n + 1)

for idx in range(1, n + 1):
    bucket[idx] = idx

for change in range(m):
    i, j = map(int, input().split())
    bucket[i], bucket[j] = bucket[j], bucket[i]

for element in bucket[1:]:
    print(element, end= " ")
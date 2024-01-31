n, m = map(int, input().split())
bucket = list(range(1, n+1))

for idx in range(m):
    i, j = map(int, input().split())
    for k in range(len(bucket[i-1:j]) // 2):
        bucket[i-1+k], bucket[j-1-k] = bucket[j-1-k], bucket[i-1+k]

for element in bucket:
    print(element, end=" ")
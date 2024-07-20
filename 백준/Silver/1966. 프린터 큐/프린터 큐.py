import sys
from collections import deque

input = sys.stdin.readline

t = int(input().rstrip())

for _ in range(t):
    n, m = map(int, input().rstrip().split())
    docs = deque(map(lambda e: [int(e), 0], input().rstrip().split()))
    docs[m][1] = 1
    cnt = 0
    
    while docs:
        priority = max(docs, key=lambda x: x[0])[0]
        now_doc, check = docs.popleft()
        if priority == now_doc:
            cnt += 1
            if check:
                print(cnt)
                break
        else:
            docs.append([now_doc, check])
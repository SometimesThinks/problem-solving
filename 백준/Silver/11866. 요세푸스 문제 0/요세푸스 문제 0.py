import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int, input().split())    # n: 사람 수, k: k번째 사람 제거
people = [i for i in range(1, n + 1)]
result = []

q = deque()
idx = 1
for num in people:
    q.append(num)
while len(result) < n:
    # k번째일 경우 result 삽입, 아니면 q에 재삽입
    remove = q.popleft()
    if idx > 0 and idx % k == 0:
        result.append(remove)
    else:
        q.append(remove)
    idx += 1

print('<' + ', '.join(map(str, result)) + '>')

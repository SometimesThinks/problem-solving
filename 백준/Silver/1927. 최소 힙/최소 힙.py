import sys
import heapq

input = sys.stdin.readline

n = int(input().rstrip())
hq = []

for _ in range(n):
    x = int(input().rstrip())

    if x:
        heapq.heappush(hq, x)
    else:
        if hq:
            print(heapq.heappop(hq))
        else:
            print(0)

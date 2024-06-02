import sys

input = sys.stdin.readline

n = int(input())
chang_score = 100
sang_score = 100

for i in range(n):
    chang, sang = map(int, input().split())
    if chang > sang:
        sang_score -= chang
    elif sang > chang:
        chang_score -= sang

print(chang_score)
print(sang_score)

import sys

input = sys.stdin.readline

n, a, b = map(int, input().split())
compliment = 1
blame = 1

for _ in range(n):
    compliment += a
    blame += b
    if blame > compliment:
        blame, compliment = compliment, blame
    elif blame == compliment:
        blame -= 1
print(compliment, blame)

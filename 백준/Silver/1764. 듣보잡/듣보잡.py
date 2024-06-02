import sys

input = sys.stdin.readline

n, m = map(int, input().split())
no_heard = set()
no_seen = set()

for _ in range(n):
    name = input().strip()
    no_heard.add(name)

for _ in range(m):
    name = input().strip()
    no_seen.add(name)

no_heard_seen = list(no_heard&no_seen)
no_heard_seen.sort()

print(len(no_heard_seen))
for value in no_heard_seen:
    print(value)

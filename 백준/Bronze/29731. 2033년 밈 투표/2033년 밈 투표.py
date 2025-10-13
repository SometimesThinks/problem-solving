import sys

input = sys.stdin.readline

n = int(input())
meme = {
    'Never gonna give you up': True,
    'Never gonna let you down': True,
    'Never gonna run around and desert you': True,
    'Never gonna make you cry': True,
    'Never gonna say goodbye': True,
    'Never gonna tell a lie and hurt you': True,
    'Never gonna stop': True
}

for _ in range(n):
    promise = input().strip()
    if not meme.get(promise):
        print('Yes')
        break
else:
    print('No')
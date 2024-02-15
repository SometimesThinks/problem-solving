from collections import deque

n = int(input())
cards = deque(range(1, n + 1))

while True:
    if len(cards) == 1:
        break
    cards.popleft()
    if len(cards) == 1:
        break
    cards.append(cards.popleft())

print(*cards)

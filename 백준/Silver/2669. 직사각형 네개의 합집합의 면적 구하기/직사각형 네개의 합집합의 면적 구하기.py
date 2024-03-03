area = []

for _ in range(4):
    x1, y1, x2, y2 = map(int, input().split())

    for x in range(x1, x2):
        for y in range(y1, y2):
            area.append((x, y))

area = list(set(area))

print(len(area))

n = int(input())

for i in range(1, n + 1):
    stars = "*" * (2 * i - 1)
    print(" " * (n - i) + stars)

for j in range(n - 1, 0, -1):
    stars = "*" * (2 * j - 1)
    print(" " * (n - j) + stars)
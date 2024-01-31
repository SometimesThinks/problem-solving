original_counts = [1, 1, 2, 2, 2, 8]
current_counts = list(map(int, input().split()))

for idx in range(len(original_counts)):
    current_counts[idx] = original_counts[idx] - current_counts[idx]

print(*current_counts)
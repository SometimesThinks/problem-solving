n = int(input())
lst = list(map(int, input().split()))
highest = max(lst)

for i in range(n):
    lst[i] = lst[i] / highest * 100

print(sum(lst) / n)
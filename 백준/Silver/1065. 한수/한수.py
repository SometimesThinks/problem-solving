import sys

input = sys.stdin.readline

n = int(input())
arithmetic = n

for num in range(1, n + 1):
    if num >= 100:          # 100 미만 수는 한수
        diffs = []
        num = str(num)
        for i in range(len(num) - 1):
            diffs.append(int(num[i + 1]) - int(num[i]))
        temp = diffs[0]     # 한수가 아니라면 한수 cnt - 1
        for d in diffs:
            if d != temp:
                arithmetic -= 1
                break

print(arithmetic)

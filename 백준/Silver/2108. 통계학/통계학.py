import sys

input = sys.stdin.readline

n = int(input().rstrip())
num_lst = []
frequency = [0 for _ in range(8001)]
total_sum = 0
fre_cnt = 0

for _ in range(n):
    num = int(input().rstrip())
    total_sum += num
    frequency[num + 4000] += 1
    num_lst.append(num)

num_lst.sort()
# 산술평균
mean = total_sum / len(num_lst)
if -0.5 < mean < 0:
    print(0)
else:
    print(f"{mean:.0f}")
# 중앙값
print(num_lst[len(num_lst) // 2])
# 최빈값
for idx in range(8001):
    if frequency[idx] == max(frequency):
        fre_cnt += 1
    if fre_cnt == 2:
        print(idx - 4000)
        break
else:
    print(frequency.index(max(frequency)) - 4000)
# 범위
print(max(num_lst) - min(num_lst))

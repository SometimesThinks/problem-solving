n, k = map(int, input().split())    # n: 전체 날짜 수, k: 연속적인 날짜 수
tempers = list(map(int, input().split()))
max_tempers = float('-inf')         # 0으로 설정 시, 모든 온도가 음수일 상황에 문제 발생
# 누적 합으로 변경
for i in range(n):
    if i == 0:
        continue
    tempers[i] = tempers[i - 1] + tempers[i]

for i in range(n - k + 1):
    if i == 0:
        temp_tempers = tempers[i + k - 1]
    else:
        temp_tempers = tempers[i + k - 1] - tempers[i - 1]
    # max_tempers 경신
    if temp_tempers > max_tempers:
        max_tempers = temp_tempers

print(max_tempers)

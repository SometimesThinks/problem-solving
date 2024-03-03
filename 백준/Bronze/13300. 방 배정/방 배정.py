n, k = map(int, input().split())    # n: 학생 수, k: 방 최대 인원 수
female = [0 for _ in range(7)]
male = [0 for _ in range(7)]
total_rooms = 0

for _ in range(n):
    s, y = map(int, input().split())    # s: 0 여자, 1 남자, y: 학년

    if s == 0:
        female[y] += 1
    else:
        male[y] += 1

for fe in female[1:]:
    if fe and fe % k > 0:
        total_rooms += (fe // k + 1)
    elif fe and fe % k == 0:
        total_rooms += fe // k
    elif fe:
        total_rooms += 1

for ma in male[1:]:
    if ma and ma % k > 0:
        total_rooms += (ma // k + 1)
    elif ma and ma % k == 0:
        total_rooms += ma // k
    elif ma:
        total_rooms += 1

print(total_rooms)

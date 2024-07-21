import sys

input = sys.stdin.readline

n = int(input().rstrip())
votes = []
cnt = 0

for _ in range(n):
    vote = int(input().rstrip())
    votes.append(vote)

while True:
    high = 0
    high_cnt = 0
    high_idx = -1
    # 최대 득표 수 얻은 사람 위치, 득표 수 찾기
    for idx, val in enumerate(votes):
        if val >= high:
            high = val
            high_idx = idx
    # 최대 득표 수 얻은 사람 수 세기
    for idx, val in enumerate(votes):
        if val == high:
            high_cnt += 1

    if high == votes[0] and high_cnt == 1:
        print(cnt)
        break
    else:
        votes[high_idx] -= 1
        votes[0] += 1
        cnt += 1

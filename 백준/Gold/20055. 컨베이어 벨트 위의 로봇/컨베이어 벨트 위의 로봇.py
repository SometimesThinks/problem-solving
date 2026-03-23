import sys

input = sys.stdin.readline

n, k = map(int, input().split())
durability = list(map(int, input().split()))
robots = [0 for _ in range(n)]
up = 0
down = n - 1
round = 0
zero_cnt = 0

while True:
    round += 1
    # 벨트 한 칸 이동
    robots.pop()
    robots = [0] + robots
    up, down = (up - 1) % (2 * n), (down - 1) % (2 * n)
    if robots[n - 1] == 1:
        robots[n - 1] = 0
    # 로봇 이동
    for i in range(n - 1, 0, -1):
        nxt = (up + i) % (2 * n)
        if durability[nxt] > 0 and robots[i - 1] == 1 and robots[i] == 0:
            durability[nxt] -= 1
            if durability[nxt] == 0:
                zero_cnt += 1
            robots[i] = 1
            robots[i - 1] = 0
    if robots[n - 1] == 1:
        robots[n - 1] = 0
    # 로봇 올리기
    if durability[up] > 0:
        robots[0] = 1
        durability[up] -= 1
        if durability[up] == 0:
            zero_cnt += 1
    # 내구도 0의 개수
    if zero_cnt >= k:
        break
print(round)

import sys

input = sys.stdin.readline


def bingo_check():
    bingo_cnt = 0

    for i in range(5):
        if sum(visited[i]) == 5:
            bingo_cnt += 1
        if sum(list(zip(*visited))[i]) == 5:
            bingo_cnt += 1
    if sum([visited[i][i] for i in range(5)]) == 5:
        bingo_cnt += 1
    if sum([visited[i][4 - i] for i in range(5)]) == 5:
        bingo_cnt += 1

    return bingo_cnt


bingo = [list(map(int, input().rstrip().split())) for _ in range(5)]
visited = [[0 for _ in range(5)] for _ in range(5)]
num_lst = []

for _ in range(5):
    num_lst.extend(list(map(int, input().rstrip().split())))

for i in range(25):
    for r in range(5):
        for c in range(5):
            if num_lst[i] == bingo[r][c]:
                visited[r][c] = 1
                break

    if bingo_check() >= 3:
        print(i + 1)
        break

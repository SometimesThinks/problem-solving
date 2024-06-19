import sys

input = sys.stdin.readline


def is_safe(row):
    for r in range(row):
        # dfs 함수는 row 고정하면서 재귀 호출 -> 같은 행에 퀸 놓을 가능성 없음 -> 같은 열만 확인
        # 열이 같으면 False
        if chess[row] == chess[r]:
            return False
        if abs(chess[row] - chess[r]) == abs(row - r):
            return False
    return True


def dfs(row):
    global case_cnt

    if row == n:
        case_cnt += 1
        return
    #
    for col in range(n):
        chess[row] = col
        if is_safe(row):
            dfs(row + 1)


n = int(input().rstrip())
# 1차원 배열 체스판 / chess[row] = col 형식
chess = [0 for _ in range(n)]
case_cnt = 0

dfs(0)
print(case_cnt)

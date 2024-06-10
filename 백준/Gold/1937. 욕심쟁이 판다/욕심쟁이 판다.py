import sys
# RecursionError 발생 대처
sys.setrecursionlimit(10**8)
input = sys.stdin.readline

def dfs(str_x, str_y):
    # 방문한 적 있다면 dp 값 return
    if dp[str_x][str_y] != 0:
        return dp[str_x][str_y]
    # 기본 방문 1 할당
    dp[str_x][str_y] = 1

    for i in range(4):
        tx = str_x + dx[i]
        ty = str_y + dy[i]
        if 0 <= tx < n and 0 <= ty < n:
            # 가고자하는 칸이 현재 칸보다 대나무 많다면,
            # 기존 dp table 값과 현재 경신 중인 거리 비교 후 큰 값 할당
            if forest[tx][ty] > forest[str_x][str_y]:
                dp[str_x][str_y] = max(dp[str_x][str_y], dfs(tx, ty) + 1)
    return dp[str_x][str_y]


n = int(input().rstrip())
forest = [list(map(int, input().rstrip().split())) for _ in range(n)]
dp = [[0 for _ in range(n)] for _ in range(n)]      # memoization용 dp table
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
max_cnt = 0
# dp table 방문 기록 없으면 dfs 호출
for r in range(n):
    for c in range(n):
        if dp[r][c] == 0:
            dfs(r, c)
# dp 거리 중 최댓값 찾기
for i in range(n):
    max_cnt = max(max_cnt, max(dp[i]))

print(max_cnt)

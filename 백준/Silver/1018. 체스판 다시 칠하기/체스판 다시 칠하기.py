import sys

n, m = map(int, input().split())
board = [list(input().strip()) for _ in range(n)]
square_cnt = sys.maxsize

for r in range(n - 7):
    for c in range(m - 7):
        b_cnt = 0
        w_cnt = 0
        for i in range(r, r + 8):
            for j in range(c, c + 8):
                for color in ['B', 'W']:
                    if color == 'B':
                        if (i + j) % 2 == 0 and board[i][j] != 'B':
                            b_cnt += 1
                        elif (i + j) % 2 == 1 and board[i][j] != 'W':
                            b_cnt += 1
                    else:
                        if (i + j) % 2 == 0 and board[i][j] != 'W':
                            w_cnt += 1
                        elif (i + j) % 2 == 1 and board[i][j] != 'B':
                            w_cnt += 1
        square_cnt = min(square_cnt, b_cnt, w_cnt)
print(square_cnt)

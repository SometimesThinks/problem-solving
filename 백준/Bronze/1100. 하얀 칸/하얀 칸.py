import sys

input = sys.stdin.readline

chess_board = [list(input().strip()) for _ in range(8)]
cnt = 0

for r in range(8):
    for c in range(8):
        if r % 2 == 0 and c % 2 == 0:
            if chess_board[r][c] == 'F':
                cnt += 1
        elif r % 2 == 1 and c % 2 == 1:
            if chess_board[r][c] == 'F':
                cnt += 1

print(cnt)
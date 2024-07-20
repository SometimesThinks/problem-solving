import sys

input = sys.stdin.readline

h, w = map(int, input().rstrip().split())
space = [list(list(input().rstrip())) for _ in range(h)]
result = []

for row in space:
    res_row = []
    for c in range(w):
        if c == 0 and row[c] == 'c':
            res_row.append(0)
        elif c == 0 and row[c] == '.':
            res_row.append(-1)
        else:
            # 이전 열에서 구름 위치 확인 후 시간 계산
            for i in range(c + 1):
                if row[c - i] == 'c':
                    res_row.append(i)
                    break
            # 이전 열에서 구름 없을 시, -1 추가
            else:
                res_row.append(-1)
    result.append(res_row)

for r in result:
    print(*r)
t = int(input())

for _ in range(t):
    h, w, n = map(int, input().split())     # h: 층 수, w: 방 수, n: 손님 순서
    matrix = [[0 for _ in range(w)] for _ in range(h)]
    cnt = 0

    for c in range(w - 1, -1, -1):
        for r in range(h):
            cnt += 1
            if matrix[r][c] == 0 and cnt == n:
                if (w - c) < 10:
                    print(str(r + 1) + '0' + str(w - c))
                else:
                    print(str(r + 1) + str(w - c))
                break
            matrix[r][c] = 1
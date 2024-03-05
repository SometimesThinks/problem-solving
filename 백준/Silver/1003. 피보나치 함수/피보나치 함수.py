t = int(input())

for tc in range(1, t + 1):
    n = int(input())
    memo = [0 for _ in range(41)]
    memo[0] = [1, 0]
    memo[1] = [0, 1]

    for idx in range(2, 41):
        memo[idx] = [memo[idx - 1][0] + memo[idx - 2][0], memo[idx - 1][1] + memo[idx - 2][1]]

    print(*memo[n])

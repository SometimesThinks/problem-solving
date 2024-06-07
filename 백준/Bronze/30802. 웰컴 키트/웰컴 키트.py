import sys

input = sys.stdin.readline

n = int(input())
shirts = list(map(int, input().split()))
t, p = map(int, input().split())    # t: 티셔츠 묶음 수, p: 펜의 묶음 수
t_cnt = 0

for idx in range(6):
    if shirts[idx] == 0:
        continue
    elif shirts[idx] > t:
        if shirts[idx] % t == 0:
            t_cnt += shirts[idx] // t
        else:
            t_cnt += (shirts[idx] // t) + 1
    else:
        t_cnt += 1

print(t_cnt)
print(n // p, n % p)

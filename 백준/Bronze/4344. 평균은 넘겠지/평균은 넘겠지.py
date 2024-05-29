import sys

input = sys.stdin.readline

c = int(input())    # 테스트 케이스 수

for _ in range(c):
    inputs = list(map(float, input().split()))
    n = inputs[0]   # 학생 수
    scores = inputs[1:]     # 점수
    avg = 0
    cnt = 0

    for num in scores:
        avg += num
    avg /= n

    for num in scores:
        if num > avg:
            cnt += 1
    result = (float(cnt) / float(n)) * 100

    print(f'{result:.3f}%')

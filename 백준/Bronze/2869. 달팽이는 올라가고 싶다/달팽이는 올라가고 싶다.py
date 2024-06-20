import sys

input = sys.stdin.readline

a, b, v = map(int, input().rstrip().split())
# ax - b(x - 1) >= v를 정리한 식
day = (v - b) / (a - b)
# 소수점(ex. 4.1일) 대비해 정수형인지 체크 후 출력
if day == int(day):
    print(int(day))
else:
    print(int(day) + 1)

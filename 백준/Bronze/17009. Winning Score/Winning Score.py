import sys

input = sys.stdin.readline

score_a = [int(input()) for _ in range(3)]
score_b = [int(input()) for _ in range(3)]
total_a = sum([3 * score_a[0], 2 * score_a[1], score_a[2]])
total_b = sum([3 * score_b[0], 2 * score_b[1], score_b[2]])

if total_a > total_b:
    print('A')
elif total_b > total_a:
    print('B')
else:
    print('T')

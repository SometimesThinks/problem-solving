import sys

input = sys.stdin.readline

n = int(input())
scores = [[score[0], int(score[1]), int(score[2]), int(score[3])] for score in (input().split() for _ in range(n))]

scores.sort(key=lambda score: (-score[1], score[2], -score[3], score[0]))
print('\n'.join([score[0] for score in scores]), end='')

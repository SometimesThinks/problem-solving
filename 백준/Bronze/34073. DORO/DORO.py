import sys

input = sys.stdin.readline

n = int(input())
sentence = input().split()

for idx, val in enumerate(sentence):
    sentence[idx] = val + 'DORO'
print(*sentence)
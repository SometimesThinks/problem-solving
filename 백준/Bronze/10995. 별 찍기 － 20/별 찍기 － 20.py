import sys

input = sys.stdin.readline

n = int(input())
line = ''

for i in range(1, n + 1):
    if len(line):
        line += ' '
    line += '*'
for i in range(1, n + 1):
    if i % 2:
        print(line)
    else:
        print(' ' + line)

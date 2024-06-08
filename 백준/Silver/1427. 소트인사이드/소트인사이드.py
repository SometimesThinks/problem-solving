import sys

input = sys.stdin.readline

n = list(map(int, list(input().rstrip())))

n.sort(reverse=True)
print(''.join(map(str, n)))

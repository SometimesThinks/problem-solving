import sys

input = sys.stdin.readline

seq = [int(input()) for _ in range(4)]

if seq[0] == seq[1] == seq[2] == seq[3]:
    print('Fish At Constant Depth')
elif all(seq[i] < seq[i + 1] for i in range(3)):
    print('Fish Rising')
elif all(seq[i] > seq[i + 1] for i in range(3)):
    print('Fish Diving')
else:
    print('No Fish')

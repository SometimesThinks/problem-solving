import sys

input = sys.stdin.readline

lv, decide = input().split()

if decide == 'miss':
    print(0)
elif decide == 'bad':
    print(int(lv) * 200)
elif decide == 'cool':
    print(int(lv) * 400)
elif decide == 'great':
    print(int(lv) * 600)
elif decide == 'perfect':
    print(int(lv) * 1000)

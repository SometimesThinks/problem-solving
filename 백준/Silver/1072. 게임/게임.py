import math

X,Y = map(int,input().split())
Z = int(Y*100/X)

if Y * 100 / X >= 99:
    print(-1)
else:
    lose = X-Y

    result = math.ceil(100/(100-Z-1) * lose) - X

    print(result)
# 단위 : 초
t = int(input())
# a : 5분(300초) 버튼, b : 1분(60초) 버튼, c : 10초 버튼
a, b, c = 0, 0, 0

while t >= 10:
    if t > 300:
        a += t // 300
        t = t % 300
    elif t >= 60:
        b += t // 60
        t = t % 60
    else:
        c +=  t // 10
        t = t % 10

if t == 0:
    print(a, b, c)
else:
    print(-1)
t = int(input())

for _ in range(t):
    quarter, dime, nickel, penny = 0, 0, 0, 0
    c = int(input()) # 단위 : 센트 / 1달러 = 100센트
    while c > 0:
        if c >= 25:
            quarter += c // 25
            c %= 25
        elif c >= 10:
            dime += c // 10
            c %= 10
        elif c >= 5:
            nickel += c // 5
            c %= 5
        else:
            penny += c // 1
            c %= 1
    print(quarter, dime, nickel, penny)

n = int(input())

for r in range(n):
    a, *a_lst = list(map(int, input().split()))
    b, *b_lst = list(map(int, input().split()))

    if a_lst.count(4) > b_lst.count(4):
        print('A')
        continue
    elif a_lst.count(4) < b_lst.count(4):
        print('B')
        continue

    if a_lst.count(3) > b_lst.count(3):
        print('A')
        continue
    elif a_lst.count(3) < b_lst.count(3):
        print('B')
        continue

    if a_lst.count(2) > b_lst.count(2):
        print('A')
        continue
    elif a_lst.count(2) < b_lst.count(2):
        print('B')
        continue

    if a_lst.count(1) > b_lst.count(1):
        print('A')
        continue
    elif a_lst.count(1) < b_lst.count(1):
        print('B')
        continue

    print('D')

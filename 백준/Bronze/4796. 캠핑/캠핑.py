test_cnt = 0

while True:
    test_cnt += 1
    l, p, v = map(int, input().split())
    camp_day = 0
    if l == 0 and p == 0 and v == 0: # 0 0 0 들어온다면 반복문 탈출
        break
    if (v % p) > l:
        camp_day += l * (v // p) + l # 만약 v에 p를 최대한 넣었고, 남은 일수가 l보다 크다 -> 그래도 최대 l일동안 사용할 수 있으므로 l만큼만 더한다
    else:
        camp_day += l * (v // p) + (v % p) # 그게 아니라면, 나머지 일수는 그대로 더해준다
    print(f'Case {test_cnt}: {camp_day}')
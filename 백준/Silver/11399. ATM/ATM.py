from itertools import accumulate

n = int(input())
time_lst = list(map(int, input().split()))
time_lst.sort() # 인출 시간 짧은 순 정렬
cumulative_lst = accumulate(time_lst) # 누적 인출 시간 리스트 생성

print(sum(cumulative_lst)) # 누적 합 리스트 합계(총 돈 인출 시간) 출력
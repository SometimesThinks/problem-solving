import sys

input = sys.stdin.readline

n = int(input())
voca_lst = set()

for _ in range(n):
    voca = input().rstrip()
    voca_lst.add(voca)
# 리스트 변환 및 길이, 사전 2개의 정렬 기준으로 정렬
voca_lst = list(voca_lst)
voca_lst.sort(key=lambda x: (len(x), x))

for v in voca_lst:
    print(v)

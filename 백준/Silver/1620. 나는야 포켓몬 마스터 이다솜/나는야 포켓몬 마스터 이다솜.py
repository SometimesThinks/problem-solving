import sys

input = sys.stdin.readline

n, m = map(int, input().split())    # n: 포켓몬 수, m: 문제 수
name_dic = {}   # 이름 -> 번호
num_dic = {}    # 번호 -> 이름

for i in range(1, n + 1):
    name = input().strip()
    name_dic[name] = i
    num_dic[i] = name

for _ in range(m):
    problem = input().strip()
    if problem.isdecimal():
        print(num_dic[int(problem)])
    else:
        print(name_dic[problem])

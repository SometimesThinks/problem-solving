import sys

input = sys.stdin.readline

team_one = list(map(int, input().split()))
team_two = list(map(int, input().split()))
total_one = team_one[0] + team_one[1] * 2 + team_one[2] * 3
total_two = team_two[0] + team_two[1] * 2 + team_two[2] * 3

if total_one > total_two:
    print(1)
elif total_two > total_one:
    print(2)
else:
    print(0)

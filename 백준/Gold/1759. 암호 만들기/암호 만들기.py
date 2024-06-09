import sys

input = sys.stdin.readline


def dfs(temp, length):
    # 정렬 안되있으면 return
    if length >= 2:
        if ord(temp[-1]) < ord(temp[-2]):
            return
    # 자음 2개 포함 안하면 return
    if length >= l - 1:
        vowel = 0
        for char in temp:
            if char in ['a', 'e', 'i', 'o', 'u']:
                vowel += 1
        if vowel >= l - 1:
            return
    # 모음 포함 안하면 return
    if length == l:
        vowel = 0
        for char in temp:
            if char in ['a', 'e', 'i', 'o', 'u']:
                vowel += 1
                if vowel:
                    break
        if vowel:
            print(temp)
        return
    # 모든 경우의 수 탐색
    for i in range(c):
        if visited[i] == 0:
            visited[i] = 1
            dfs(temp + alphabets[i], length + 1)
            visited[i] = 0

# l: 암호 길이, c: 알파벳 개수
l, c = map(int, input().rstrip().split())
alphabets = input().rstrip().split()
visited = [0 for _ in range(c)]

alphabets.sort()
dfs('', 0)

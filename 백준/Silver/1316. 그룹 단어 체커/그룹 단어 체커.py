import sys

input = sys.stdin.readline

n = int(input())
result = 0

for _ in range(n):
    voca = list(input().strip())
    charset = []
    voca_idx = 0
    char_idx = 0
    for char in voca:
        if char not in charset:
            charset.append(char)

    while voca_idx < len(voca) and char_idx < len(charset):
        if voca[voca_idx] == charset[char_idx]:
            voca.pop(voca_idx)
        else:
            char_idx += 1
    if voca == []:
        result += 1

print(result)

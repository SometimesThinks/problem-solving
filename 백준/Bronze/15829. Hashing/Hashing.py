import sys

input = sys.stdin.readline

l = int(input())
string = input().strip()
alpha = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
hashing = 0

for i in range(l):
    hashing += alpha.index(string[i]) * (31 ** i)
hashing %= 1234567891

print(hashing)
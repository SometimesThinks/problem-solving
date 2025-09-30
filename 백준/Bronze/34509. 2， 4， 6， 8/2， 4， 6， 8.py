import sys

input = sys.stdin.readline

for i in range(10, 100):
    str_i = list(str(i))
    reverse_str_i = str_i[::-1]
    if '8' in str_i:
        continue
    if int(''.join(reverse_str_i)) % 4 > 0:
        continue
    if sum(map(int, reverse_str_i)) % 6 > 0:
        continue
    print(i)
    break

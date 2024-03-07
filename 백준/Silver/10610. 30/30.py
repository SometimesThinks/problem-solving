n = list(input())
n.sort(reverse=True)
digit_sum = 0

for digit in n:
    digit_sum += int(digit)

if digit_sum % 3 == 0 and n[-1] == '0':
    print(int(''.join(n)))
else:
    print(-1)
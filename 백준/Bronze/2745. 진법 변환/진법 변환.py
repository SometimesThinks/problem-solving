n, b = input().split()      # b진법 수 n
b = int(b)
to_decimal = {
    'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,
    'G': 16, 'H': 17, 'I': 18, 'J': 19, 'K': 20, 'L': 21,
    'M': 22, 'N': 23, 'O': 24, 'P': 25, 'Q': 26, 'R': 27,
    'S': 28, 'T': 29, 'U': 30, 'V': 31, 'W': 32, 'X': 33,
    'Y': 34, 'Z': 35
}
max_length = len(n) - 1
decimal_num = 0

for idx, digit in enumerate(n):
    if digit.isdecimal():
        decimal_num += int(digit) * b ** (max_length - idx)
    else:
        decimal_num += to_decimal[digit] * b ** (max_length - idx)

print(decimal_num)

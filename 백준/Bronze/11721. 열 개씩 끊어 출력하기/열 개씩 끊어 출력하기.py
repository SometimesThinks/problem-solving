string = list(input())

for i in range(0, len(string), 10):
    print(''.join(string[i:i + 10]))
t = int(input())

for test in range(t):
    repeat, string = input().split()
    for char in string:
        print(char * int(repeat), end="")
    print()
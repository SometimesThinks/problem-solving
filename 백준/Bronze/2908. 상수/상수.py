a, b = input().split()
a, b = list(a), list(b)

a.reverse()
b.reverse()

a, b = int(''.join(a)), int(''.join(b))

if a > b:
    print(a)
else:
    print(b)
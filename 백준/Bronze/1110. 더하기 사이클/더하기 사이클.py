n = int(input())
temp = n
cycle = 0

while True:
    if temp < 10:
        new = int(str(temp) + str(temp))
    else:
        new = int(str(temp)[-1] + str(int(str(temp)[0]) + int(str(temp)[-1]))[-1])
    temp = new
    cycle += 1
    if new == n:
        break

print(cycle)

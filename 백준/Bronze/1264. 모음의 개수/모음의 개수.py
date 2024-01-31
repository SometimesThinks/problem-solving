gater_list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

while True:
    string = input()
    gater_count = 0

    if string == '#':
        break
    else:
        for char in string:
            if char in gater_list:
                gater_count += 1
    
    print(gater_count)
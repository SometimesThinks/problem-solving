while True:
    number = input()
    number_revered = number[::-1]

    if number == '0':
        break
    
    if number == number_revered:
        print('yes')
    else:
        print('no')
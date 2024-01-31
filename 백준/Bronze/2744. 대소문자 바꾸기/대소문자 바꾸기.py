string = input()
changed_string = []

for char in string:
    if char.isupper():
        changed_string.append(char.lower())
    else:
        changed_string.append(char.upper())

print(''.join(changed_string))
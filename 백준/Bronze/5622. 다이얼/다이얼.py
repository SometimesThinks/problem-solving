dials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
user_dials = input()
dial_time = 0

for char in user_dials:
    alpha_idx = dials.find(char)
    if alpha_idx < 3:
        dial_time += 3
    elif alpha_idx < 6:
        dial_time += 4
    elif alpha_idx < 9:
        dial_time += 5
    elif alpha_idx < 12:
        dial_time += 6
    elif alpha_idx < 15:
        dial_time += 7
    elif alpha_idx < 19:
        dial_time += 8
    elif alpha_idx < 22:
        dial_time += 9
    else:
        dial_time += 10

print(dial_time)
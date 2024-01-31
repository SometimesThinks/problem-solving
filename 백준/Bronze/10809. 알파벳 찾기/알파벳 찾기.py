s = input()
alpha_loc = [-1] * 26

for alpha in s:
    alpha_loc[ord(alpha) - 97] = s.index(alpha)

for element in alpha_loc:
    print(element, end=" ")
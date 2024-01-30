string = input()
croatian_chars = ["dz=","z=", "c=", "c-", "d-", "lj", "nj", "s="]
voca_count = len(string)
check = 0

if "dz=" in string:
    croatian_count = string.count("dz=")
    check = croatian_count
    voca_count -= (2 * croatian_count)

for char in croatian_chars[1:]:
    if check and char == "z=":
        voca_count += 1 * check
    croatian_count = string.count(char)
    voca_count -= (1 * croatian_count)

print(voca_count)
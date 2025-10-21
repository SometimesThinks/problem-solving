import sys

input = sys.stdin.readline


def check(s, l, r, case):
    ans = 0
    while l <= r:
        if s[l] == s[r]:
            l += 1
            r -= 1
        else:
            if case and l + 1 <= r:
                l += 1
                ans += 1
            elif not case and l <= r - 1:
                r -= 1
                ans += 1
            else:
                ans += 2
        if ans >= 2:
            break
    return ans


t = int(input())

for _ in range(t):
    string = input().strip()
    res = min(check(string, 0, len(string) - 1, 0), check(string, 0, len(string) - 1, 1))
    print(res if res < 2 else 2)

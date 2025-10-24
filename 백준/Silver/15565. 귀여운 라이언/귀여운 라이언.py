import sys

input = sys.stdin.readline

n, k = map(int, input().split())
dolls = list(map(int, input().split()))
left = right = 0
cnt = {}
res = float('inf')

while right <= n:
    lion = cnt.get(1, 0)
    if lion < k and right < n:
        cnt[dolls[right]] = cnt.get(dolls[right], 0) + 1
        right += 1
    else:
        if lion >= k:
            length = right - left
            if length < res:
                res = length
        cnt[dolls[left]] -= 1
        left += 1
    if left == n:
        break
print(res if res != float('inf') else -1)

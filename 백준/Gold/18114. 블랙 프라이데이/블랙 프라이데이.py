import sys

input = sys.stdin.readline


def binary_search(start, end, target):
    while start <= end:
        mid = (start + end) // 2
        if weights[mid] == target:
            return 1
        elif weights[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return 0


n, c = map(int, input().split())
weights = list(map(int, input().split()))
result = 0

weights.sort()
# 같은 무게 물건 있다면 결과 1로 변경
if binary_search(0, n - 1, c):
    result = 1
# 투 포인터 사용해 2개 혹은 3개로 무게 일치 가능한지 확인
else:
    start = 0
    end = n - 1
    while start < end:
        t_sum = weights[start] + weights[end]
        if t_sum > c:
            end -= 1
        elif t_sum == c:
            result = 1
            break
        else:
            # 이미 선택한 2개 물건을 제외하고, 무게 일치시키는 물건 1개 찾기
            if binary_search(start + 1, end - 1, c - t_sum):
                result = 1
                break
            # 현재 무게가 목표 무게보다 작으므로, start 증가시켜 현재 무게 증가
            start += 1

print(result)

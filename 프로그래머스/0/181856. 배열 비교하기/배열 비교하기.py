def solution(arr1, arr2):
    n, m = len(arr1), len(arr2)
    if n > m:
        return 1
    elif n < m:
        return -1
    else:
        sum_1 = sum(arr1)
        sum_2 = sum(arr2)
        if sum_1 == sum_2:
            return 0
        return 1 if sum_1 > sum_2 else -1

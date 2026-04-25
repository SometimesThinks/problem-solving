def solution(arr, n):
    leng = len(arr)
    if leng % 2:
        for i, v in enumerate(arr):
            if not i % 2:
                arr[i] = v + n
    else:
        for i, v in enumerate(arr):
            if i % 2:
                arr[i] = v + n
    return arr
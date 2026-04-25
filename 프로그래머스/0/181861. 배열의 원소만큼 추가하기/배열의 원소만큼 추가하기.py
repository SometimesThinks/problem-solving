def solution(arr):
    res = []
    for e in arr:
        res.extend([e] * e)
    return res

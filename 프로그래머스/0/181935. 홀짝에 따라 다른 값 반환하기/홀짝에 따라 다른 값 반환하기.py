def solution(n):
    if n % 2:
        return sum([e for e in range(1, n + 1, 2)])
    return sum([e**2 for e in range(2, n + 1, 2)])

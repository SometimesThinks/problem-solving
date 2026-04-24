def solution(n_str):
    idx = None
    for i, v in enumerate(n_str):
        if v != "0":
            idx = i
            break
    return n_str[idx:]
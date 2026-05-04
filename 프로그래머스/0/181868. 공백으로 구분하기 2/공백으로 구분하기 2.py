def solution(my_string):
    return [e for e in my_string.strip().split(" ") if len(e)]

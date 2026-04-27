def solution(num_list):
    muti = 1
    square = sum(num_list) ** 2
    for e in num_list:
        muti *= e
    return 0 if muti > square else 1

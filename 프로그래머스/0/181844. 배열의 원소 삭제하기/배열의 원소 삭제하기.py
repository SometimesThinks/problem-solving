def solution(arr, delete_list):
    delete = set(delete_list)
    return [e for e in arr if e not in delete]

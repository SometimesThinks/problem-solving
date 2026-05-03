def solution(myString, pat):
    return int(pat.translate(str.maketrans({"A": "B", "B": "A"})) in myString)

from collections import Counter

string = input()
string = list(string.upper())
counters = Counter(string).most_common() # 요소와 빈도수를 튜플에 담긴 리스트 형태로 반환

try:
    if counters[0][1] == counters[1][1]:
        print("?")
    else:
        print(counters[0][0])
except:
    print(counters[0][0])
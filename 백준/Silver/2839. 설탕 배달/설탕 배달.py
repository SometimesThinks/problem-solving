sugar = int(input())
count = 0
# 설탕 단위 : 3kg, 5kg 
while sugar > 0:
    if sugar % 5 == 0: # sugar가 5의 배수이면, 5kg 설탕만 사용해서 처리한다.
        count += sugar // 5
        sugar = sugar % 5
    elif (sugar - 5) % 3 == 0: # 그게 아니라면, 5kg 혹은 3kg 설탕을 하나씩 사용해본다.
        count += 1
        sugar -= 5
    else:
        count += 1
        sugar -= 3

if sugar == 0:
    print(count)
else:
    print(-1)
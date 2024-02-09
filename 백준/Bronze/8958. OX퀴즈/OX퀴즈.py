t = int(input())

for tc in range(1, t + 1):
    quiz = input()
    consecutive = 0
    total_score = 0

    for ans in quiz:
        if ans == 'O':
            consecutive += 1
            total_score += consecutive
        else:
            consecutive = 0
    
    print(total_score)
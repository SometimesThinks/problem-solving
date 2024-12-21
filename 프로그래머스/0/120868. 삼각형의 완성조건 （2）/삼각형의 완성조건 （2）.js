function solution(sides) {
    let answer = [];
    sides.sort((a, b) => a - b)
    // sides[1]이 가장 긴 변일 경우
    for (let i = sides[1] - sides[0] + 1; i < sides[1] + 1; i++) {
        if (!answer.includes(i)) {
            answer.push(i)
        }
    }
    // 새로운 변이 가장 긴 변일 경우
    for (let i = sides[1] + 1; i < sides[0] + sides[1]; i++) {
        if (!answer.includes(i)) {
            answer.push(i)
        }
    }
    return answer.length
}
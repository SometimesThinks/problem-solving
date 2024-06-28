function solution(n) {
    const strN = n.toString()
    let sum = 0
    
    for (const num of strN) {
        sum += parseInt(num)
    }

    return sum
}
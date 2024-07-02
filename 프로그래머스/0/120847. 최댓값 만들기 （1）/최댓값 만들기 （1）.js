function solution(numbers) {
    let max = 0
    
    numbers.forEach((v1, i1) => {
        numbers.filter((v2, i2) => i2 !== i1).forEach((v2) => {
            max = v1 * v2 > max ? v1 * v2 : max
        })
    })
    
    return max
}
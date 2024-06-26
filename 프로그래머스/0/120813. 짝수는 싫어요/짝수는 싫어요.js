function solution(n) {
    const array = []
    
    for (let i = 0; i < n + 1; i++) {
        if (i % 2 === 1) {
            array.push(i)
        }
    }
    
    return array
}
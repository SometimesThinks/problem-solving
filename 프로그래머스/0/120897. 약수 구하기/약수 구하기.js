function solution(n) {
    const res = []
    
    for (let i = 0; i < n + 1; i++) {
        n % i === 0 ? res.push(i) : false
    }
    
    return res
}
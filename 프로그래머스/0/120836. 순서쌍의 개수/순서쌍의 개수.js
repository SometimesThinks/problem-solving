function solution(n) {
    let cnt = 0
    
    for (let i = 1; i < n + 1; i++) {
        n % i === 0 ? cnt += 1 : false
    }
    
    return cnt
}
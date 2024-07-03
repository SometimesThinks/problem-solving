function solution(n) {
    let res = 0
    let fac = 1
    
    while (fac <= n) {
        res += 1
        fac *= res
    }
    
    return res - 1
}
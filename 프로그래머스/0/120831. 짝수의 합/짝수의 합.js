function solution(n) {
    let res = 0
    
    for (let i = 0; i < n + 1; i++){
        if (i % 2 === 0){
            res += i
        }
    }
    
    return res
}
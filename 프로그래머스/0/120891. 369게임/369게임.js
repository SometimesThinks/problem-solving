function solution(order) {
    let cnt = 0
    
    for (n of String(order)) {
        ['3', '6', '9'].includes(n) ? cnt += 1 : false
    }
         
    return cnt
}
function solution(n) {
    let cnt = 1
    
    while (true) {
        if ((6 * cnt) % n === 0) {
            break
        } else {
            cnt += 1
        }
    }
    
    return cnt
}
function solution(A, B) {
    let after = [...A]
    let cnt = 0
    
    while (true) {
        if (cnt >= A.length) {
            return -1
        }
        if (after.join('') === B) {
            break
        } else {
            after.unshift(after.pop())
            cnt += 1
        }
    }
    
    return cnt
}
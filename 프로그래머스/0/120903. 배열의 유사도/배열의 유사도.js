function solution(s1, s2) {
    let cnt = 0
    
    s1.forEach((e) => {
        if (s2.includes(e)) {
            cnt += 1
        }
    })
    
    return cnt
}
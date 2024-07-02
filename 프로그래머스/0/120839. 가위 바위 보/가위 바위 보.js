function solution(rsp) {
    let ans = ''
    
    for (const char of rsp) {
        if (char === '2') {
            ans += '0'
        } else if (char === '0') {
            ans += '5'
        } else {
            ans += '2'
        }
    }
    
    return ans
}
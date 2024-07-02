function solution(slice, n) {
    const res = n / slice
    
    return res === parseInt(res) ? res : parseInt(res) + 1 
}
function solution(i, j, k) {
    let string = ''
    
    for (let n = i; n < j + 1; n++) {
        string += String(n)
    }
    
    return [...string].filter((e) => e === String(k)).length
}
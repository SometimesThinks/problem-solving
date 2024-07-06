function solution(s) {
    const fre = {}
    const res = []
    
    for (const char of s) {
        if (char in fre) {
            fre[char] += 1
        } else {
            fre[char] = 1
        }
    }
    
    Object.entries(fre).filter((arr) => arr[1] === 1).forEach((arr) => res.push(arr[0]))
    
    return res.sort().join('')
}

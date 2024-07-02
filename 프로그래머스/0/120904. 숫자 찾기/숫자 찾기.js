function solution(num, k) {
    const resIdx = [...num.toString()].findIndex((e) => e === k.toString())
    
    return resIdx !== -1 ? resIdx + 1 : -1
}
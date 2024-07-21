function solution(num, total) {
    const lst = new Array(num - 1).fill(0).map((v, i) => i + 1)
    const start = (total - lst.reduce((acc, cur) => acc + cur, 0)) / num
    const res = []
    
    for (let i = 0; i < num; i++) {
        res.push(start + i)
    }
    
    return res
}
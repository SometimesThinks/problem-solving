function solution(s) {
    const newS = s.split(' ')
    
    return newS.map((e) => e === 'Z' ? 'Z' : parseInt(e))
        .reduce((acc, cur, idx) => cur === 'Z' ? acc - newS[idx - 1] : acc + cur, 0)
}
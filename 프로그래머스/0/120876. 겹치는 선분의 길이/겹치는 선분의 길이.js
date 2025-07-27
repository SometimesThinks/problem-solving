function solution(lines) {
    const fre = {};
    let res = 0;
    
    for (const line of lines) {
        for (let i = line[0]; i < line[1]; i++) {
            fre[i] = (fre[i] || 0) + 1;
        }
    }
    for (const val of Object.values(fre)) {
        if (val >= 2) res += 1;
    }
    return res;
}
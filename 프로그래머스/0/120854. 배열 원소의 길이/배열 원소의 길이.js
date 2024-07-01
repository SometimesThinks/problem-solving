function solution(strlist) {
    strlist.forEach((val, idx) => {
        strlist[idx] = val.length
    })
    
    return strlist
}
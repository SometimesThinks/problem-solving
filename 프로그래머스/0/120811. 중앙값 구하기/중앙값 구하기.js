function solution(array) {
    let res = 0
    
    array.sort((a, b) => a - b)
    res = array[Math.floor(array.length / 2)]
    
    return res
}
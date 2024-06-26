function solution(array, n) {
    const newArray = array.filter(e => e === n)
    
    return newArray.length
}
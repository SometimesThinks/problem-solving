function solution(array) {
    const ans = [Math.max(...array), array.indexOf(Math.max(...array))]
    
    return ans
}
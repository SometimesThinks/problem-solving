function solution(my_string) {
    const numList = [...my_string].filter((e) => isNaN(e) === false)
    let sum = 0
    
    numList.forEach((e) => sum += parseInt(e))
    
    return sum
}
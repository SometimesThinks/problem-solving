function solution(my_string, num1, num2) {
    const newString = [...my_string]
    let temp = null
    
    temp = newString[num1]
    newString[num1] = newString[num2]
    newString[num2] = temp
    
    return newString.join('')
}
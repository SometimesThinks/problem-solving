function solution(my_string) {
    const myString = my_string.split(' ').map((v) => !isNaN(v) ? parseInt(v) : v)
    let num1 = null
    let num2 = null
    let operator = null 
    
    while (myString.length >= 3) {
        for (let i = 0; i < 3; i++) {
            i === 0 ? num1 = myString.shift() : false
            i === 1 ? operator = myString.shift() : false
            i === 2 ? num2 = myString.shift() : false
        }
        
        if (operator == '+') {
            myString.unshift(num1 + num2)
        } else {
            myString.unshift(num1 - num2)
        }
    }

    return myString[0]
}
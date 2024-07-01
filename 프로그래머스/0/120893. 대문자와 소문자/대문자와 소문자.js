function solution(my_string) {
    const newString = [...my_string]
    
    newString.forEach((val, idx) => {
        if (val == val.toLowerCase()) {
            newString[idx] = val.toUpperCase()
        } else {
            newString[idx] = val.toLowerCase()
        }
    })
    
    return newString.join('')
}
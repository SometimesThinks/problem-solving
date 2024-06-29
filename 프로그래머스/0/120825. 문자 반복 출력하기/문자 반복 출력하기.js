function solution(my_string, n) {
    const newString = []
    
    for (char of my_string) {
        for (let i = 0; i < n; i++) {
            newString.push(char)
        }
    }

    return newString.join('')
}
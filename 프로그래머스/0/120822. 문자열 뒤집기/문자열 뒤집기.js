function solution(my_string) {
    const reversed = [...my_string]
    
    reversed.reverse()
    
    return reversed.join('')
}
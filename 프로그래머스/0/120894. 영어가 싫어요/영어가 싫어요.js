function solution(numbers) {
    const engToNum = {
        'one': 1, 'two': 2,
        'three': 3, 'four': 4,
        'five': 5, 'six': 6,
        'seven': 7, 'eight': 8,
        'nine': 9, 'zero': 0
    }
    let newString = numbers
    
    for (key in engToNum) {
        newString = newString.replaceAll(key, engToNum[key])
    }
    
    return parseInt(newString)
}
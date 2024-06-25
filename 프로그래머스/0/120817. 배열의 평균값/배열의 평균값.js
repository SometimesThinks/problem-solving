function solution(numbers) {
    let avg = 0
    
    for (let i = 0; i < numbers.length; i++){
        avg += numbers[i]
    }
    avg = avg / numbers.length
    
    return avg
}
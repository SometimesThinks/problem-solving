function solution(numbers, num1, num2) {
    return numbers.filter((val, idx) => idx >= num1 && idx <= num2)
}
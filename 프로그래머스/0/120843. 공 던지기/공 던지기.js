function solution(numbers, k) {
    return numbers[0 + 2 * (k - 1) >= numbers.length ? (0 + 2 * (k - 1)) % numbers.length : 0 + 2 * (k - 1)]
}
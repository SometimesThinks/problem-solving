function solution(n) {
    const composite = Array.from({length: n}, (v, i) => i + 1)
    const isPrime = (num) => {
        if (num <= 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    
    return composite.filter((val) => val !== 1 && isPrime(val) === false).length
}
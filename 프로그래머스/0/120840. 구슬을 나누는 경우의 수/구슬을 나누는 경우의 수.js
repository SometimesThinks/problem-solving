function solution(balls, share) {
    const factorial = (num) => {
        let res = 1
        for (let i = 1; i <= num; i++) {
            res *= i
        }
        return res
    };

    return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)))
}
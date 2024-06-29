function solution(money) {
    const cnt = Math.floor(money / 5500)

    return [cnt, money - (5500 * cnt)]
}
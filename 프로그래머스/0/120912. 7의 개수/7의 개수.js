function solution(array) {
    return array.map((e) => String(e)).join('').split('')
        .filter((e) => e === '7').length
}
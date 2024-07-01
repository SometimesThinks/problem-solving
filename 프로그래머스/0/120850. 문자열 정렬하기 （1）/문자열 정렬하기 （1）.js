function solution(my_string) {
    return [...my_string].filter((e) => isNaN(e) === false).sort((a, b) => a - b).map((e) => parseInt(e))
}
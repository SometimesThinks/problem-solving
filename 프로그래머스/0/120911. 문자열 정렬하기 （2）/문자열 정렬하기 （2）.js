function solution(my_string) {
    return [...my_string].map((e) => e.toLowerCase()).sort().join('')
}
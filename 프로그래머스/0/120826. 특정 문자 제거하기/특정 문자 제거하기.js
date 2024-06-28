function solution(my_string, letter) {
    return [...my_string].filter((e) => e !== letter).join('')
}
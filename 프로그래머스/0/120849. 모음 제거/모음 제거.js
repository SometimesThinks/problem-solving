function solution(my_string) {
    const newString = [...my_string].filter((e) => !['a', 'e', 'i', 'o', 'u'].includes(e)).join('')

    return newString
}
function solution(my_string) {
    let num = ''
    const numList = []
    
    for (let char of my_string) {
        if (!isNaN(char)) {
            num += char
        } else if (num !== '') {
            numList.push(num)
            num = ''
        }
    }
    if (num !== '') {
        numList.push(num)
    }
    
    return numList.reduce((acc, cur) => {
        return acc + parseInt(cur)
    }, 0)
}
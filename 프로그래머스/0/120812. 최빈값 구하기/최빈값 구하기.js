function solution(array) {
    let newArray = {}
    
    array.forEach((val) => {
        val in newArray ? newArray[val] += 1 : newArray[val] = 1
    })
    newArray = Object.entries(newArray).sort((a, b) => b[1] - a[1])
    
    if (newArray.length === 1 || newArray[0][1] !== newArray[1][1]) {
        return parseInt(newArray[0][0])
    } else {
        return -1
    }
}
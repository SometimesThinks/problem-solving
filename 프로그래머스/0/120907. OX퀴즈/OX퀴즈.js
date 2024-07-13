function solution(quiz) {
    const newQuiz = quiz.map((p) => p.split(' '))
    const check = (arr) => {
        if (arr[1] === '-') {
            return parseInt(arr[0]) - parseInt(arr[2]) === parseInt(arr[4]) ? true : false
        } else {
            return parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4]) ? true : false
        }
    }
    
    return newQuiz.map((p) => check(p) === true ? 'O' : 'X')
    
}
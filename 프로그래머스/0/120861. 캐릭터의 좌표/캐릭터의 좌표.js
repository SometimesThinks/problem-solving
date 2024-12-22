function solution(keyinput, board) {
    const result = [0, 0]
    const maxWidth = parseInt(board[0] / 2)
    const maxLength = parseInt(board[1] / 2)
    keyinput.forEach((key) => {
        if (key === 'up' && result[1] < maxLength) {
            result[1] += 1
        } else if (key === 'down' && result[1] > -maxLength) {
            result[1] -= 1
        } else if (key === 'right' && result[0] < maxWidth) {
            result[0] += 1
        } else if (key === 'left' && result[0] > -maxWidth) {
            result[0] -= 1
        }
    })
    return result
}
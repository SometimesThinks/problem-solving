function solution(hp) {
    let res = 0

    while (hp !== 0) {
        if (hp >= 5) {
            res += Math.floor(hp / 5)
            hp = hp % 5
        } else if (hp >= 3) {
            res += Math.floor(hp / 3)
            hp = hp % 3
        } else {
            res += Math.floor(hp / 1)
            hp = hp % 1
        }
    }
    
    return res
}
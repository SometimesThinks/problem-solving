function solution(chicken) {
    let coupon = chicken
    let service = 0
    let temp = 0
    
    while (coupon >= 10) {
        temp = Math.floor(coupon / 10)
        service += temp
        coupon = coupon % 10 + temp
    }
    
    return service
}
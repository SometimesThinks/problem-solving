function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    
    return Math.abs(dots[0][1] - dots[1][1]) * Math.abs(dots[0][0] - dots[2][0])
}
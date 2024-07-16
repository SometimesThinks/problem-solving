function solution(polynomial) {
    const newPolynomial = polynomial.split(' + ')
    let coeffic = 0
    let constant = 0
    
    for (const el of newPolynomial) {
        if (el.includes('x')) {
            coeffic = el === 'x' ? coeffic + 1 : coeffic + parseInt(el.replace('x', ''))
        } else {
            constant += parseInt(el)
        }
    }
    
    if (coeffic !== 0 && constant !== 0) {
        return coeffic === 1 ? `x + ${constant}` : `${coeffic}x + ${constant}`
    } else if (coeffic === 0) {
        return `${constant}`
    } else if (constant === 0){
        return coeffic === 1 ? 'x' : `${coeffic}x`
    } else {
        return '0'
    }
    
}
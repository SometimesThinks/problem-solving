function solution(cipher, code) {
    const newCipher = [...cipher]
    
    return newCipher.filter((val, idx) => (idx + 1) % code === 0).join('')
}
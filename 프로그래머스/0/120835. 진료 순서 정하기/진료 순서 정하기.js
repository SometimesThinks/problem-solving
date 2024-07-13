function solution(emergency) {
    const newEmergency = emergency.slice().sort((a, b) => b - a)
    
    return emergency.map((e) => newEmergency.indexOf(e) + 1)
}
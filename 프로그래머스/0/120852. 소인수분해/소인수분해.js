function solution(n) {
    const answer = [];
    let newN = n

    while (newN > 1) {
        for (let i = 2; i <= newN; i++){
            if (newN % i === 0){
                if (!answer.includes(i)){
                    answer.push(i)
                }
                newN = Math.floor(newN / i)
                break;
            }
        }
    }
    
    return answer;
}
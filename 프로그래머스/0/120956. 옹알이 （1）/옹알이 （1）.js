function solution(babbling) {
    let answer = 0;

    babbling.forEach((e) => {
        let rep = e
        
        for (const i of ["aya", "ye", "woo", "ma"]){
            rep = rep.replace(i, " ");
        }
        if (rep.trim().length === 0){
            answer++;
        }
    })
    
    return answer;
}

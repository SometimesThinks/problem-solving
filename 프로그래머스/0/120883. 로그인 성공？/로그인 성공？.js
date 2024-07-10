function solution(id_pw, db) {
    const newDb = db.filter((v) => id_pw[0] === v[0])
    
    if (newDb.length === 0) {
        return 'fail'
    } else if (id_pw[1] !== newDb[0][1]) {
        return 'wrong pw'
    } else {
        return 'login'
    }
}
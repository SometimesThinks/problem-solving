function solution(spell, dic) {
    return dic.map((s) => [...s].sort().join('') === spell.sort().join('') ? '1' : '2').includes('1') ? 1 : 2
}
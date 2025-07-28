function solution(score) {
  const ever = score.map((el) => el[0] + el[1]).sort((a, b) => b - a);
  const allRank = {};
  let rank = 0;
  let acc = 1;

  for (let i = 0; i < ever.length; i++) {
    if (!allRank[ever[i]]) {
      rank += acc;
      acc = 1;
    } else {
      acc += 1;
    }
    allRank[ever[i]] = rank;
  }
  return score.map((el) => allRank[el[0] + el[1]]);
}
function solution(dots) {
  let res = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      const check = [0, 0, 0, 0];
      let un = [];
      check[i] = 1;
      check[j] = 1;
      for (let k = 0; k < 4; k++) {
        if (!check[k]) un.push(k);
      }
      const inc1 = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      const inc2 =
        (dots[un[0]][1] - dots[un[1]][1]) / (dots[un[0]][0] - dots[un[1]][0]);
      if (inc1 === inc2) res = 1;
    }
  }
  return res;
}
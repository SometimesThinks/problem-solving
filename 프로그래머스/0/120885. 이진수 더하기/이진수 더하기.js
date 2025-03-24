function solution(bin1, bin2) {
  const binTodec = (binNum) => {
    let decimal = 0;
    for (let i = binNum.length - 1; i >= 0; i--) {
      decimal += Number(binNum[i]) * 2 ** (binNum.length - 1 - i);
    }
    return decimal;
  };
  const decToBin = (decNum) => {
    if (!decNum) return '0';
    let share = decNum;
    let bin = '';
    while (share > 0) {
      bin = String(share % 2) + bin;
      share = Math.floor(share / 2);
    }
    return bin;
  };
  return decToBin(binTodec(bin1) + binTodec(bin2));
}
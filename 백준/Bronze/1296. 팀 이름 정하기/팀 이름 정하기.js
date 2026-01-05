const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const name = input[0];
const n = Number(input[1]);
const fre = new Map([
  ['L', 0],
  ['O', 0],
  ['V', 0],
  ['E', 0],
]);
const res = new Map();

for (const char of name) {
  fre.set(char, (fre.get(char) || 0) + 1);
}
for (let i = 2; i < n + 2; i++) {
  const teamName = input[i];
  for (const char of teamName) {
    fre.set(char, (fre.get(char) || 0) + 1);
  }
  const [L, O, V, E] = [fre.get('L'), fre.get('O'), fre.get('V'), fre.get('E')];
  res.set(
    teamName,
    ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100
  );
  // 연두 이름 X 팀 이름 후, 팀 이름 가중치 제거
  for (const char of teamName) {
    fre.set(char, fre.get(char) - 1);
  }
}
console.log(
  [...res].sort((arr1, arr2) => {
    if (arr2[1] !== arr1[1]) return arr2[1] - arr1[1];
    else return arr1[0].localeCompare(arr2[0]);
  })[0][0]
);

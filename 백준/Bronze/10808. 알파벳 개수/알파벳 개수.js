const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const alphaArr = Array.from({ length: 26 }, () => 0);

for (let i = 0; i < input[0].length; i++) {
  alphaArr[input[0][i].charCodeAt() - 97] += 1;
}
console.log(alphaArr.join(' '));

const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0].split('');
const voca = [];

for (let i = 0; i < s.length - 2; i++) {
  for (let j = i + 2; j < s.length; j++) {
    const newVoca = [].concat(
      s.slice(0, i + 1).reverse(),
      s.slice(i + 1, j).reverse(),
      s.slice(j).reverse()
    );
    voca.push(newVoca);
  }
}
console.log(voca.sort()[0].join(''));

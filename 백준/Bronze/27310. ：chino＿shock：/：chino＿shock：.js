const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const emogi = [...input[0]];

console.log(
  emogi.length +
    emogi.filter((e) => e === ':').length +
    emogi.filter((e) => e === '_').length * 5
);

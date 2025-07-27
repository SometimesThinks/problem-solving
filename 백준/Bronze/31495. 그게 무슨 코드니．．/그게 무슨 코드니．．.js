const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0];

console.log(
  s[0] === '"' && s[s.length - 1] === '"' && s.length > 2
    ? s.slice(1, s.length - 1)
    : 'CE'
);

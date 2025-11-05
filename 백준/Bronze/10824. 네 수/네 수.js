const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, b, c, d] = input[0].split(' ');
const ab = Number(a + b);
const cd = Number(c + d);

console.log(ab + cd);

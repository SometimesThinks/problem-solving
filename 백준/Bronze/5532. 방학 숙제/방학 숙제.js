const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [l, a, b, c, d] = input.map(Number);
const study = a / c > b / d ? Math.ceil(a / c) : Math.ceil(b / d);

console.log(l - study);

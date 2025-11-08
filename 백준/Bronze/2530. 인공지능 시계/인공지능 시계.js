const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);
const d = Number(input[1]);

c += d;
b += Math.floor(c / 60);
c = c % 60;
a += Math.floor(b / 60);
b = b % 60;
a = a % 24;
console.log(a, b, c);

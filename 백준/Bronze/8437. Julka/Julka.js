const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, c] = input.map(BigInt);
const natalia = (n - c) / 2n;
const klaudia = natalia + c;

console.log(String(klaudia));
console.log(String(natalia));

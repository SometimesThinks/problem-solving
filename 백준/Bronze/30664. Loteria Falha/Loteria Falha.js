const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const test = input.slice(0, input.length - 1).map(BigInt);

for (const tc of test) console.log(tc % 42n ? 'TENTE NOVAMENTE' : 'PREMIADO');

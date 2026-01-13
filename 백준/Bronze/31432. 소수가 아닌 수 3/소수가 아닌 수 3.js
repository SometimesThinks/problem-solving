const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const dn = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (!dn[0]) console.log(`YES\n0`);
else console.log(`YES\n${dn[0]}${dn[0]}${dn[0]}`);

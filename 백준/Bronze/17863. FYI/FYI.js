const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = input[0];

if (n[0] === '5' && n[1] === '5' && n[2] === '5') {
  console.log('YES');
} else {
  console.log('NO');
}

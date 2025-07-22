const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const part = input[0].split(' ').map(Number);
const [s, k, h] = part;
const sum = s + k + h;

if (sum >= 100) console.log('OK');
else {
  const min = part.sort((a, b) => a - b)[0];
  if (s === min) console.log('Soongsil');
  else if (k === min) console.log('Korea');
  else if (h === min) console.log('Hanyang');
}

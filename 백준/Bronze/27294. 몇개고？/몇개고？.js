const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
const [t, s] = input[0].split(' ').map(Number);

if (t <= 11 || t >= 17) {
  console.log(280);
} else if (s === 1) {
  console.log(280);
} else {
  console.log(320);
}

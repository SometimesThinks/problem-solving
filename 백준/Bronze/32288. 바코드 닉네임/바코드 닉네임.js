const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const barcode = input[1].split('').map((str) => {
  if (str === 'L') return 'l';
  else if (str === 'l') return 'L';
  else if (str === 'I') return 'i';
  else if (str === 'i') return 'I';
});
console.log(barcode.join(''));

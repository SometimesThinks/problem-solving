const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const [str1, str2] = input[i].split(' ');

  if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
    console.log(`${str1} & ${str2} are anagrams.`);
  } else {
    console.log(`${str1} & ${str2} are NOT anagrams.`);
  }
}

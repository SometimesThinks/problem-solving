const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length - 1; i++)
  console.log(`Case ${i + 1}: Sorting... done!`);

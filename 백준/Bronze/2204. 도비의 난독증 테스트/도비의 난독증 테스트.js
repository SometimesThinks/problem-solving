const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length; i++) {
  if (!Number.isNaN(Number(input[i]))) {
    const t = Number(input[i]);
    const vocaLst = [];

    if (t === 0) {
      break;
    }
    for (let j = 1; j < t + 1; j++) {
      vocaLst.push(input[i + j]);
    }
    console.log(
      vocaLst.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))[0]
    );
  }
}

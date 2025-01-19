const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const k = Number(input[0]);
const seq = input.slice(1).map((string) => string.split(' ').map(Number));

for (let i = 0; i < k; i++) {
  const n = seq[i][0];
  const scores = seq[i].slice(1).sort((a, b) => a - b);
  let largeGap = 0;

  for (let j = 1; j < n; j++) {
    largeGap = Math.max(largeGap, scores[j] - scores[j - 1]);
  }
  console.log(`Class ${i + 1}`);
  console.log(
    `Max ${scores[n - 1]}, Min ${scores[0]}, Largest gap ${largeGap}`
  );
}

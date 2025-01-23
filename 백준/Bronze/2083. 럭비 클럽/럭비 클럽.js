const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [name, age, weight] = input[i].split(' ');
  if (Number(age) > 17 || Number(weight) >= 80) {
    console.log(name, 'Senior');
  } else {
    console.log(name, 'Junior');
  }
}

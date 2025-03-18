const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(
  input
    .map((name) => {
      return [...name]
        .map((char) => {
          if (char === 'e') return 'i';
          else if (char === 'i') return 'e';
          else if (char === 'E') return 'I';
          else if (char === 'I') return 'E';
          else return char;
        })
        .join('');
    })
    .join('\n')
);

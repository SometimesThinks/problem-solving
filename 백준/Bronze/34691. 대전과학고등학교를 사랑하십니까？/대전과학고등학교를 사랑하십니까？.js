const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const coverter = new Map([
  ['animal', 'Panthera tigris'],
  ['tree', 'Pinus densiflora'],
  ['flower', 'Forsythia koreana'],
]);

for (const key of input) {
  if (key === 'end') break;
  console.log(coverter.get(key));
}

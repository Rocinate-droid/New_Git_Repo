const path = require('path');

console.log(path.sep);

const first = path.join('/Content', 'firstfile.txt');
const second = path.resolve(__dirname, '/Content', 'secondfile.txt');
console.log(first);
console.log(second);
console.log(path.basename(first));
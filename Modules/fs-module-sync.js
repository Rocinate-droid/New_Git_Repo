const fs = require('fs');

console.log(fs.readFileSync('./Content/firstfile.txt', 'utf-8'));
fs.writeFileSync('./Content/firstfile.txt', 'I am a jedi ', {flag: 'a'});

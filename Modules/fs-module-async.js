const {readFile, writeFile} = require('fs');
readFile('./Content/firstfile.txt', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./Content/secondfile.txt', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./Content/asyn-file.txt', `${first}  ${second}`, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
})
})
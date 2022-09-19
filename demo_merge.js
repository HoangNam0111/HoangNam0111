const { Console } = require('console');
const fs = require('fs');
const data = fs.readFileSync('./1');
const data2 = fs.readFileSync('./2');
fs.writeFile('file3.txt', data + data2, (err) => {
    if (err) {
        throw err;

    }
    Console.log('file merged');
});
console.log(data + data2.toString());
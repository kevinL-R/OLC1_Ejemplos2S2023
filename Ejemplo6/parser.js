var fs =require('fs');
var parser = require('./gramatica')

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    parser.parse(data.toString())
});
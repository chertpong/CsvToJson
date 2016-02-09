var fs = require('fs');
var split = require('split');

var csvPath = './csv/data-sheet-2.0.csv';

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(csvPath)
});

lineReader.on('line', function (line) {
    console.log('Line from file:', line);
});

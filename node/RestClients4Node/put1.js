// Using restler
// https://github.com/danwrong/restler

var rest = require('restler');

var jsonData = { nombre: 'Gisela', edad: 20 };

rest.putJson('http://localhost:3000/nombres/0', jsonData).
    on('complete', function (data, response) {
        // handle response
    });
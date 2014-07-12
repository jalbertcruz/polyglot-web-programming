// Using restler
// https://github.com/danwrong/restler

var rest = require('restler');

var jsonData = { nombre: 'Gustavo', edad: 70 };

rest.postJson('http://localhost:3000/nombres', jsonData);
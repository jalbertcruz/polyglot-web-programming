
// Using restler
// https://github.com/danwrong/restler
var rest = require('restler');

rest.get('http://localhost:3000/nombres').on('complete', function(result) {
    if (result instanceof Error) {
        console.log('Error:', result.message);
    } else {
        console.log(result);
    }
});
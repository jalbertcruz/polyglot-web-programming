
var rest = require('restler');

var user = process.argv[2] || 'jalbertcruz';

rest.get('https://api.github.com/users/' + user).on('complete', function(result) {
    if (result instanceof Error) {
        console.log('Error:', result.message);
    } else {
        console.log(result);
    }
});
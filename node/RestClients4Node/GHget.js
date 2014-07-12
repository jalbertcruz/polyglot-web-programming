var https = require('https');

var user = process.argv[2] || 'jalbertcruz';

var options = {
    host: 'api.github.com',
    path: '/users/' + user,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
};

var req = https.request(options, function (res) {
    res.setEncoding('utf8');
    var data = "";
    res.on('data', function (chunk) {
        data += chunk
    });
    res.on('end', function () {
        var dataJS = JSON.parse(data);
        console.log('User name: ' + dataJS.login);
        console.log("Full name: " + dataJS.name);
    });
});

req.end();
var http = require('http');
var options = {
    host: "localhost",
    port: 3000,
    path: "/nombres",
    method: "GET"
};
var request = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
    });
});

request.end();


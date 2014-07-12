// (9-6. Designing a RESTful API with ExpressJS, Node.js Recipes, A Problem-Solution Approach (2013))

// Adaptated to last express API (4.x)
// http://expressjs.com/4x/api.html

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

var morgan = require('morgan');
app.use(morgan());

var bodyParser = require('body-parser');
app.use(bodyParser());

var methodOverride = require('method-override');
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public'));

// development only
if ('development' === app.get('env')) {
    app.use(require('errorhandler')());
}

var nombres = [
    { nombre: 'Ana', edad: 12 },
    { nombre: 'Juan', edad: 23},
    { nombre: 'Pepe', edad: 45 }
];

app.get('/', function (req, res) {
    res.redirect("/index.html");
//    res.json(nombres);
});

// curl -X GET http://localhost:3000/nombres
app.get('/nombres', function (req, res) {
    res.json(nombres);
});

// curl -X GET http://localhost:3000/nombres/2
app.get('/nombres/:id', function (req, res) {
    if (req.params.id > (nombres.length - 1) || req.params.id < 0) {
        res.statusCode = 404;
        res.end('Not Found');
    } else {
        res.json(nombres[req.params.id]);
    }
});

// curl -X POST -d "nombre=flipflops&edad=12" http://localhost:3000/nombres
app.post('/nombres', function (req, res) {
    if (typeof req.body.nombre === 'undefined') {
//        console.log(req);
        res.statusCode = 400;
        res.end('A name is required');
    } else {
        nombres.push(req.body);
//        res.send(req.body);
        res.send(nombres);
    }
});

// curl -X PUT -d "nombre=flipflops&edad=12" http://localhost:3000/nombres/3
app.put('/nombres/:id', function (req, res) {
    if (req.params.id > (nombres.length - 1) || req.params.id < 0) {
        res.statusCode = 404;
        res.end('No person found for that ID');
    } else {
        nombres[req.params.id] = req.body;
        res.send(req.body);
    }
});
// curl -X DELETE http://localhost:3000/nombres/2
app.delete('/nombres/:id', function (req, res) {
    if (req.params.id > (nombres.length - 1) || req.params.id < 0) {
        req.statusCode = 404;
        res.end('No person found for that ID');
    } else {
        nombres.splice(req.params.id, 1);
        res.json(nombres);
    }
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// Old API:
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
//var routes = require('./routes')
//var app.use(express.methodOverride());
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
//var favicon = require('static-favicon')
//app.use(favicon(__dirname + '/public/favicon.ico'))
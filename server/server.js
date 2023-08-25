var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '../dist/week4tut'));
console.log(__dirname);

var http = require('http').Server(app);
let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: " + host + " port: " + port);
});

require('./router/api-login')(app, path, fs);


//app.post('/login', require('./router/api-login'));
//app.post('/loginafter', require('/router/postLoginafter'))


/*
app.post('/api/auth', function(req, res) {
    let users = [{username: 'abc', birthdate: '1990/01/01', age: 33, email: 'abc@gmail.com', password: '123', valid: true},
    {username: 'def', birthdate: '1990/01/01', age: 33, email: 'def@gmail.com', password: '123', valid: true},
    {username: 'ghi', birthdate: '1990/01/01', age: 33, email: 'ghi@gmail.com', password: '123', valid: true}];

    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    customer.valid = false;
    
    for (let i=0; i<users.length;i++) {
        if(req.body.email == users[i].email && req.body.password == users[i].password) {
            customer.valid = true;
        }
    }

    res.send(customer.username);
});
*/
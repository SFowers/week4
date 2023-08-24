var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist/week4tut/')));

//require('./routes/api-login.js')(app, path);
//require('./listen.js')(http);

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My Second Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});

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
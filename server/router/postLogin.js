var fs = require('fs');

module.exports = function(req, res) {
    var u = req.body.username;
    var p = req.body.pwd;
    c = u + p;
    console.log(c);
    fs.readFile('./server/data/users.json', 'utf8', function(err, data) {
        if(err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        let i = userArray.findIndex(user => 
            ((user.username == u) && (user.pwd == p)));
        if(i == -1) {
            res.send({"ok": false});
        } else {
            console.log(userArray[i]);
            res.send({"ok": true});
        }
    });
};

/*
app.post('/api/login', function(req, res) {
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
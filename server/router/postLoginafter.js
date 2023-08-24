var fs = require('fs');

module.exports = function(req, res) {
    let userobj = {
        "userid": req.body.userid,
        "username": req.body.username,
        "userbirthdate": req.body.userbirthdate,
        "userage": req.body.userage
    }
    let uArray = [];
    fs.readFile('server/data/extendedUsers.json', 'utf8', function(err, data) {
        if(err) throw err;
        uArray = JSON.parse(data);
        uArray.push(userobj);
        console.log(userobj);

        uArrayjson = JSON.stringify(uArray);
        fs.writeFile('server/data/extendedUsers.json', uArrayjson, 'utf-8', function(err) {
            if(err) throw err;
            res.send(uArray);
        })
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
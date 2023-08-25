module.exports = function(app, path, fs) {

    app.post('/api/auth', function(req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
        
        fs.readFile('./server/data/users.json', 'utf8', (err, data)=>{
            if(err) throw err;
            try {
                console.log(data);
                let users = JSON.parse(data);
                users = users.people;
                console.log(users);
                
                var customer = {};
                customer.email = "";
                customer.username = "";
                customer.valid = false;

                for (let i=0; i<users.length;i++) {
                    if(req.body.email == users[i].email && req.body.password == users[i].pwd) {
                        customer.valid = true;
                        customer.email = users[i].email;
                        customer.username = users[i].username;
                    }
                }
                res.send(customer);
            } catch(err) {
                console.log("Error parsing the userdata");
            }
            
        })
        
    });
    
}

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

let i = userArray.findIndex(user => 
                    ((user.username == u) && (user.pwd == p)));
                if(i == -1) {
                    res.send({"ok": false});
                } else {
                    console.log(userArray[i]);
                    res.send({"ok": true});
                }
*/
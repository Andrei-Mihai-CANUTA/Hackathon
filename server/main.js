const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/users.js');



const app = express();
const cors = require("cors");
//const accountSchema = require('./models/users.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://Andi:22042002qwe@cluster0.bko8e.mongodb.net/Data?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));


app.post('/register', (req, res) => {

    if(req.body.password == req.body.repeat_password){

        const user = new User({
            username: req.body.username,
            password: req.body.password,
        });

        user.save()
            .then((result) => {
                res.send("User registered!")
            })
            .catch((err) => {
                console.log(err)
            });

        } else {
            res.send("No match between passwords");
        }
            
    })

app.post('/login', (req, res) => {

    
    const name = req.body.username
    const user = User.findOne({username: name}, function(err, user1){
        if (err) console.log(err);

        if((user1) && (user1.password === req.body.password)){
            res.json({account: user1.account});
        } else {
            res.send("Login failed!");
        }
    })
        
})


    
app.post('/createAccount', (req, res) => {
    const name = req.body.username

    const account1 = {
        name: req.body.name,
        url: req.body.url,
        password: req.body.password,
        }

    const user = User.findOne({username: name}, function(err, user){
        if (err) console.log(err);
        user.account.push(account1);
        user.save();

    });
        res.send("createdAccount")
    })

app.get('/getAccounts/:username', (req, res) => {
    const name = req.params.username
    const user = User.findOne({username: name}, function(err, user1){
        if (err) console.log(err);
        res.json({account: user1.account});
    })
    

})
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Colection = require('./models/userColection.js');
const User = require('./models/users.js');



const app = express();
const cors = require("cors");
const accountSchema = require('./models/users.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://Andi:22042002qwe@cluster0.bko8e.mongodb.net/Data?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));


app.post('/register', (req, res) => {

    const colection = new Colection({
        username: req.body.username,
        password: req.body.password,
        repeat_password: req.body.repeat_password
    });

    colection.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
        
})

app.post('/login', (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    
    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
        
})



const account = {
    name: 'google',
    url: 'www.google.com',
    password: '123123',
}
    
app.post('/createAccount', (req, res) => {
    const name = req.body.username

    const account1 = {
        name: req.body.name,
        url: req.body.url,
        password: req.body.password,
        }

    const user = User.findOne({name: name}, function(err, user){
        if (err) console.log(err);
        user.account.push(account1);
        user.save();

    });
        res.send("createdAccount")
    })

app.get('/getAccounts', (req, res) => {
    const name = req.body.username
    const user = User.findOne({name: name}, function(err, user){
        if (err) console.log(err);
        res.json({accounts: user.account});
    })
    

})
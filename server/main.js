const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Colection = require('./models/userColection.js');
const User = require('./models/users.js');



const app = express();
const cors = require("cors");

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

    const users = new User({
        username: req.body.username,
        password: req.body.password,
    });

    colection.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
        
})


    
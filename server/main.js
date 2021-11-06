const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Colection = require('./models/userColection');



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbURI = 'mongodb+srv://Andi:22042002qwe@cluster0.bko8e.mongodb.net/Data?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));




// app.use(express.static('public'));
// app.use(morgan('dev'));

app.post('/register', (req, res) => {

    const colection = new Colection({
        username: req.body.username,
        password: req.body.password
    });

    colection.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
        
})


    
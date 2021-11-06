const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Account = require('./Account.js');

const userSchema = new Schema({
    username: {
        type: String,
        requiered: true
    },
    password: {
        type: String,
        requiered: true
    },
    account: [{
        type: Account
    }]


}, {timestamps: true });

const User = mongoose.model('User', userSchema)
module.exports = User;
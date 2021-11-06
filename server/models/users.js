const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        requiered: true
    },
    password: {
        type: String,
        requiered: true
    }

}, {timestamps: true });

const User = mongoose.model('User', userSchema)
module.exports = User;
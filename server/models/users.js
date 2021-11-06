const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name: {
        type: String,
        requiered: true
    },
    url: {
        type: String,
        requiered: true
    },
    password: {
        type: String,
        requiered: true
    }
    
}, {timestamps: true });

const userSchema = new Schema({
    username: {
        type: String,
        requiered: true
    },
    password: {
        type: String,
        requiered: true
    },
    account: {
        type:[],
        default:[]
    }

}, {timestamps: true });


const User = mongoose.model('User', userSchema)
module.exports = User;
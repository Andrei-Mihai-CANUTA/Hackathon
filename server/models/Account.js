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

const Account = mongoose.model('Account', accountSchema)
module.exports = Account;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colectionSchema = new Schema({
    username: {
        type: String,
        requiered: true
    },
    password: {
        type: String,
        requiered: true
    }
}, {timestamps: true });

const Colection = mongoose.model('Colection', colectionSchema)
module.exports = Colection;
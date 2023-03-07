const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    category : {
        type: String,
        required: true,
        unique: true
    },
    price : {
        type: String,
        required: true,
        unique: true
    },
    ages : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
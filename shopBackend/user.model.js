const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserDetails = new Schema({
    user_Name: {
        type: String
    },
    email_Id: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('UserDetails', UserDetails);
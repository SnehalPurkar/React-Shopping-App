const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductItems = new Schema({
    product_Name: {
        type: String
    },
    product_Price: {
        type: String
    }
});

module.exports = mongoose.model('ProductItems', ProductItems);
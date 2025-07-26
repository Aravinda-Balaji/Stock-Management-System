const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;

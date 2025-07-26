const Supplier = require('../models/supplier'); // Assuming a supplier model exists

// Function to insert a new supplier
const insertSupplier = async (req, res) => {
    try {
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(201).json({ message: 'Supplier added successfully', supplier: newSupplier });
    } catch (error) {
        res.status(400).json({ message: 'Error adding supplier', error });
    }
};

module.exports = {
    insertSupplier,
};

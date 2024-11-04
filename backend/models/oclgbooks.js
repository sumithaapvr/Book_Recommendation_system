const mongoose = require('mongoose');

// Define the schema for the 'oclgbooks' collection based on your dataset
const oclgbookSchema = new mongoose.Schema({
    'S.No': Number, // Number field for serial number
    'COURSE NAME': String,
    'TEXT BOOK/REFERENCE': String,
    'AUTHOR': String,
    'EDITION': Number,
    'PUBLISHER': String,
    'YEAR': Number,
    'COLLEGE': String,
    'BOOK URL': String,
    'IMAGE URL': String
});

// Create and export the model
const Oclgbook = mongoose.model('oclgbooks', oclgbookSchema);
module.exports = Oclgbook;

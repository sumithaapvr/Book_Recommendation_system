const mongoose = require('mongoose');

// Define the schema for the 'kecbook' collection
const kecbookSchema = new mongoose.Schema({
    course_name: String,
    textbook_reference: String,
    author: String,
    edition: String,
    publisher: String,
    year: String,
    book_url: String,
    image_url: String,
});

// Create and export the model
const Kecbook = mongoose.model('kecbooks', kecbookSchema);
module.exports = Kecbook;

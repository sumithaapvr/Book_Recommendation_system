/*const Kecbook = require('../models/kecbook');  // Assuming Kecbook is your model for KEC books
const Oclgbook = require('../models/oclgbooks');  // Assuming Oclgbook is your model for OCLG books

// Define the searchBooks function
// Define the searchBooks function
const searchBooks = async (req, res) => {
    const { query } = req.body; // Extract search query from request body
  
    try {
      // Split the query into individual words
      const words = query.split(' ');
  
      // Create a regex pattern that matches any of the words in the COURSE NAME field
      const regexPattern = words.map((word) => `(?=.*${word})`).join('');
      console.log('Regex Pattern:', regexPattern); // Log the regex pattern to debug
  
      // Perform a case-insensitive regex search in the KEC books collection
      const kecResults = await Kecbook.find({
        'COURSE NAME': { $regex: regexPattern, $options: 'i' }
      });
      
      console.log('KEC Results:', kecResults); // Log the KEC book results
  
      // If no results found in KEC books, search recommendations from OCLG books
      let oclgRecommendations = [];
      if (kecResults.length === 0) {
        oclgRecommendations = await Oclgbook.find({
          'COURSE NAME': { $regex: regexPattern, $options: 'i' }
        });
      }
  
      // Send results and recommendations in response
      res.json({
        result: kecResults,
        recommendations: kecResults.length === 0 ? oclgRecommendations : []
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching books' });
    }
  };*/

  const Kecbook = require('../models/kecbooks');  // Assuming Kecbook is your model for KEC books
const Oclgbook = require('../models/oclgbooks');  // Assuming Oclgbook is your model for OCLG books

// Define the searchBooks function
const searchBooks = async (req, res) => {
  const { query } = req.body; // Extract search query from request body

  try {
    // Split the query into individual words
    const words = query.split(' ');

    // Create a regex pattern that matches any of the words in the COURSE NAME field
    const regexPattern = words.map((word) => `(?=.*${word})`).join('');
    console.log('Regex Pattern:', regexPattern); // Log the regex pattern to debug

    // Perform a case-insensitive regex search in both collections concurrently
    const kecResultsPromise = Kecbook.find({
      'COURSE NAME': { $regex: regexPattern, $options: 'i' }
    });

    const oclgResultsPromise = Oclgbook.find({
      'COURSE NAME': { $regex: regexPattern, $options: 'i' }
    });

    // Wait for both results
    const [kecResults, oclgResults] = await Promise.all([kecResultsPromise, oclgResultsPromise]);

    console.log('KEC Results:', kecResults); // Log the KEC book results
    console.log('OCLG Results:', oclgResults); // Log the OCLG book results

    // Send both results in response
    res.json({
      kecBooks: kecResults,
      oclgBooks: oclgResults
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching books' });
  }
};

module.exports = {
  searchBooks,
};

  
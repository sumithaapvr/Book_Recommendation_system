import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

// Search books service
const searchBooks = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search`, { params: { query } });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export { searchBooks };

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Signup service
const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login service
const login = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        if (response.data.token) {
            // Optionally save the token in local storage
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Logout service (optional)
const logout = () => {
    localStorage.removeItem('token');
};

export { signup, login, logout };

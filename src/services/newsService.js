import axios from 'axios';

const API_KEY = 'pub_782763e13907562b1538253e6f549220fe0c0';
const BASE_URL = 'https://newsdata.io';

export const fetchNews = async (category = 'top') => {
    try {
        const response = await axios.get(`${BASE_URL}/api/1/news`, {
            params: {
                apikey: API_KEY,
                category,
                language: 'hi', // Hindi language
                country: 'in'
            }
        });

        console.log("Full API Response:", response.data);

        return response.data.results || [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};

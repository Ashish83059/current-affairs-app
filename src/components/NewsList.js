import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';
import NewsItem from './NewsItem';

const NewsList = ({ category }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const getNews = async () => {
            setLoading(true); // Show loading state before fetching
            const data = await fetchNews(category);
            setNews(data);
            setLoading(false); // Hide loading after fetching
        };
        getNews();
    }, [category]);

    return (
        <div>
            {loading && <p>Loading news...</p>} {/* Show loading text */}
            {news.length === 0 && !loading && <p>No news found.</p>} {/* Show message if no news */}
            {news.map((article, index) => (
                <NewsItem key={index} article={article} />
            ))}
        </div>
    );
};

export default NewsList;

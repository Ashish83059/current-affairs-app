import React, { useEffect, useState } from 'react';
import './NewsComponent.css';

const NewsComponent = ({ selectedCategory }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsdata.io/api/1/news?apikey=pub_782763e13907562b1538253e6f549220fe0c0&country=in&language=hi&category=${selectedCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      setNewsList(data.results || []);
    };

    fetchNews();
  }, [selectedCategory]);

  return (
    <div className="news-container">
      {newsList.map((news, index) => (
        <div className="news-card" key={index}>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          {news.link && (
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              पूरा पढ़ें(Read more)
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;

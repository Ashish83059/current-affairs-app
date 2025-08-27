import React from 'react';

const NewsItem = ({ article }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
            maxWidth: "600px"
        }}>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={{ width: "100%", borderRadius: "8px" }} />}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default NewsItem;

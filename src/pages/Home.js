import React from 'react';
import NewsList from '../components/NewsList';

const Home = ({ category }) => {
    return (
        <div>
            <h1>{category.toUpperCase()} NEWS</h1>
            <NewsList category={category} />
        </div>
    );
};

export default Home;

import React from 'react';
import Banner from '../Pages/Home/Banner';
import Topfoods from '../Pages/Home/Topfoods';
import Catagories from '../Pages/Home/Catagories';
import Review from '../Pages/Home/Review';

const Home = () => {
    return (
        <div className='space-y-16'>
            <Banner></Banner>
            <Topfoods></Topfoods>
            <Catagories></Catagories>
            <Review></Review>
        </div>
    );
};

export default Home;
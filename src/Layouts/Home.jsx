import React from 'react';
import Banner from '../Pages/Home/Banner';
import Topfoods from '../Pages/Home/Topfoods';

const Home = () => {
    return (
        <div className='space-y-16'>
            <Banner></Banner>
            <Topfoods></Topfoods>
        </div>
    );
};

export default Home;
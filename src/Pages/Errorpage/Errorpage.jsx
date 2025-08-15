import Lottie from 'lottie-react';
import React from 'react';
import errorgif from '../../assets/error/Lonely 404.json'
const Errorpage = () => {
    return (
        <div className='h-screen max-w-6xl mx-auto mt-20'>
            <Lottie animationData={errorgif}></Lottie>
        </div>
    );
};

export default Errorpage;
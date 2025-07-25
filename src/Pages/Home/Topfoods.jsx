import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Topfood from './Topfood';

const Topfoods = () => {
    const [topfoods,settopfoods]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/topcuisin')
        .then(res=>{
            settopfoods(res.data)
        })
    },[])
    return (
        <div>
            <div className='pb-16'><h1 class="md:text-5xl text-3xl font-bold text-center mb-4 text-gray-800">Flavors Worth Sharing</h1>
<p class="text-center md:text-xl text-base text-gray-600 ">
  Enjoy a curated collection of customer favorites, prepared with care and bursting with <br /> flavor. Each dish is crafted to delight your taste buds.
</p></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
{
    topfoods.map(topfood=><Topfood key={topfood._id} topfood={topfood}></Topfood>)
}

            </div>           
        </div>
    );
};

export default Topfoods;
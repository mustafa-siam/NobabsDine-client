import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Topfood from '../Home/Topfood';

const Allfoods = () => {
    const [allfoods,setallfoods]=useState([])
    const axiosinstance=useAxiosSecure()
    useEffect(()=>{
        axiosinstance.get('/allcuisin')
        .then(res=>{
            setallfoods(res.data)
        })
    },[axiosinstance])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
            {
                 allfoods.map(topfood=><Topfood key={topfood._id} topfood={topfood}></Topfood>)
            }
        </div>
    );
};

export default Allfoods;
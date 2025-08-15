import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Topfood from './Topfood';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { NavLink } from 'react-router-dom';
const Topfoods = () => {
    const [topfoods,settopfoods]=useState([]);
    const axiosinstance=useAxiosSecure()
    useEffect(()=>{
        axiosinstance.get('topcuisin')
        .then(res=>{
            settopfoods(res.data)
        })
    },[axiosinstance])
    return (
        <div className='space-y-16'>
            <div><h1 className="md:text-5xl text-3xl font-bold text-center mb-4 text-gray-800">Flavors Worth Sharing</h1>
<p className="text-center md:text-xl text-base text-gray-600 ">
  Enjoy a curated collection of customer favorites, prepared with care and bursting with <br /> flavor. Each dish is crafted to delight your taste buds.
</p></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
{
    topfoods.map(topfood=><Topfood key={topfood._id} topfood={topfood}></Topfood>)
}

            </div>   

            <div className='flex justify-center items-center'>
                <NavLink to={'/allfoods'}>
<motion.button
                className="relative flex items-center px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium text-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 <span>Explore Now</span>  <FaArrowRight className='pt-1 ml-10'></FaArrowRight>
              </motion.button>
                </NavLink>
        </div>       
        </div>
    );
};

export default Topfoods;
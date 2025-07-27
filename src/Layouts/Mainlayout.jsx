import React, { useState } from 'react';
import Navbar from '../Shared components/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Shared components/Footer';
import { FaShoppingBag } from "react-icons/fa";
const Mainlayout = () => {
    const [cartcount,setcartcount]=useState(0);
    const [totalprice,settotalprice]=useState(0)
    const addtocart=(quantity,price)=>{
        setcartcount(prev=>prev+1);
        settotalprice(prev=>prev+quantity*price)
    }
    return (
        <div className='max-w-7xl mx-auto space-y-16'>
            <NavLink to={'/viewcart'}>
             <div className="flex flex-col justify-center items-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-[#e9004b] text-white px-4 py-2 rounded shadow-lg text-lg z-50">
             <FaShoppingBag className='text-2xl'/>
               <p> {cartcount} items</p> 
               <p className='text-base bg-[#505B74] px-2 rounded-md'>${totalprice}</p>
            </div>
            </NavLink>          
            <Navbar></Navbar>
            <Outlet context={{addtocart}}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;
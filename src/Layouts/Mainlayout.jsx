import React from 'react';
import Navbar from '../Shared components/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Shared components/Footer';
import { FaShoppingBag } from "react-icons/fa";
import useCarts from '../Hooks/useCarts';

const Mainlayout = () => {
    const [carts, fetchCarts] = useCarts();

    const estimatedtotal = carts.reduce(
        (sum, item) => sum + parseFloat(item.newtotalprice),
        0
    );

    return (
        <div className='max-w-7xl mx-auto space-y-16'>
            <NavLink to='/viewcart'>
                <div className="flex flex-col justify-center items-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-[#e9004b] text-white px-4 py-2 rounded shadow-lg text-lg z-50">
                    <FaShoppingBag className='text-2xl' />
                    <p>{carts.length} items</p>
                    <p className='text-base bg-[#505B74] px-2 rounded-md'>
                        ${estimatedtotal.toFixed(2)}
                    </p>
                </div>
            </NavLink>
            <Navbar />
            <Outlet context={{ carts,fetchCarts }} />
            <Footer />
        </div>
    );
};

export default Mainlayout;

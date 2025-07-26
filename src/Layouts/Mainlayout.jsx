import React from 'react';
import Navbar from '../Shared components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared components/Footer';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-16'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;
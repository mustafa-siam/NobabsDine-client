import Lottie from 'lottie-react';
import nobabjson from '../assets/nobabsdine json/nobabsdine.json'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links=<>
  <li><NavLink>All-Foods</NavLink></li>
  <li><NavLink>Gallary</NavLink></li>
  <li><NavLink>My Profile</NavLink></li>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className='w-18'><Lottie animationData={nobabjson}></Lottie></div>
    <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-orange-500 to-lime-500 bg-clip-text text-transparent">    
  NobabDine
</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;
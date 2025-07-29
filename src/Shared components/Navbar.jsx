import Lottie from 'lottie-react';
import nobabjson from '../assets/nobabsdine json/nobabsdine.json'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { authcontext } from '../Providers/Authprovider';
import Swal from 'sweetalert2';
import { CartContext } from '../Cartproveider/Cartcontext';
const Navbar = () => {
  const {user,logout}=useContext(authcontext)
  const {fetchCarts}=useContext(CartContext)
  const handlelogout=()=>{
    logout()
    .then(()=>{Swal.fire({
                title: "LogOut Successfully",
                icon: "success",
                showConfirmButton:false,
                timer:1000,
                })})
  }
  const links=<>
  <li><NavLink to={'/allfoods'}>All-Foods</NavLink></li>
  <li><NavLink>Gallary</NavLink></li>
  <li><NavLink>My Profile</NavLink></li>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className='w-18'><Lottie animationData={nobabjson}></Lottie></div>
    <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-orange-500 to-lime-500 bg-clip-text text-transparent">    
 <NavLink to={'/'}>NobabDine</NavLink> 
</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
     <div className="hidden lg:flex gap-4">
<button className="btn btn-link text-xl"><NavLink to={'/register'}>Register</NavLink></button>
 {user ? 
         <button  onClick={handlelogout} className="btn text-white bg-[#3c65f5] px-6 py-6 text-base hover:bg-[#212529]"><NavLink>Sign Out</NavLink></button>
     : 
      <button className="btn text-white bg-[#3c65f5] px-6 py-6 text-base hover:bg-[#212529]"><NavLink to={'/login'}>Sign In</NavLink></button>
    }
    </div>
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
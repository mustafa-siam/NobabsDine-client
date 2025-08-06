import Lottie from 'lottie-react';
import nobabjson from '../assets/nobabsdine json/nobabsdine.json';
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { authcontext } from '../Providers/Authprovider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logout } = useContext(authcontext);

  const handlelogout = () => {
    logout().then(() => {
      Swal.fire({
        title: "LogOut Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };

  const links = <>
   <li className='text-base hover:border-b-4 border-orange-600'><NavLink to="/">Home</NavLink></li>
    <li className='text-base hover:border-b-4 border-orange-600'><NavLink to="/allfoods">All-Foods</NavLink></li>
    <li className='text-base hover:border-b-4 border-orange-600'><NavLink to={'/foodgallery'}>Food Gallery</NavLink></li>
   
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start flex items-center gap-2">
        <div className="w-16"><Lottie animationData={nobabjson} /></div>
        <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-orange-500 to-lime-500 bg-clip-text text-transparent">
          <NavLink to="/">NobabDine</NavLink>
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className=" flex items-center justify-center px-1 gap-6">{links}</ul>
      </div>

      <div className="navbar-end flex items-center md:gap-4 gap-1">
        {!user && (
          <>
            <Link to="/register" className="btn btn-link text-xl md:block hidden">Register</Link>
            <Link to="/login"><FaUserAlt className="text-3xl" /></Link>
            <Link to="/login" className="btn bg-[#3c65f5] text-white hover:bg-[#212529]">Sign In</Link>
          </>
        )}

        {user && (
          <div className="dropdown dropdown-end cursor-pointer">
            <div  tabIndex={0} role="button" className="avatar tooltip tooltip-bottom"  data-tip={user?.displayName || 'No Name'}>
  <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
    {user.photoURL ? (
                  <img src={user.photoURL} alt="user" />
                ) : (
                  <FaUserAlt className="text-2xl m-auto flex justify-center items-center h-full" />
                )}
  </div>
</div>
            <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-48 space-y-2">
              <li><Link to="/myfoods" className="text-base font-medium hover:border-b-4 border-orange-600">My Added food</Link></li>
              <li><Link to={'/addfood'} className="text-base font-medium hover:border-b-4 border-orange-600">Add a food item</Link></li>
              <li><Link to="/purchase" className="text-base font-medium hover:border-b-4 border-orange-600">My Orderd food</Link></li>
              <li><Link to="/userprofile" className="text-base font-medium hover:border-b-4 border-orange-600">My Profile</Link></li>
              <li><button onClick={handlelogout} className="btn bg-[#3c65f5] text-white hover:bg-[#212529]">Sign Out</button></li>
            </ul>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from 'react';
import { authcontext } from '../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
   const {user,loading}=useContext(authcontext)
   const location=useLocation();
   if(loading){
     return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user){
        return children
   }
   return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Privateroute;
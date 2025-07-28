import React, { useContext } from 'react';
import { authcontext } from '../Providers/Authprovider';

const Privateroute = ({children}) => {
   const {user,loading}=useContext(authcontext)
   if(loading){
     return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user){
        return children
   }
   return <Navigate  to={'/login'}></Navigate>
};

export default Privateroute;
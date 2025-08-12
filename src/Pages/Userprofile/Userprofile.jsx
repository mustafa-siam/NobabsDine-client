import React, { useContext, useState } from 'react';

import { Link} from 'react-router-dom';
import { authcontext } from '../../Providers/Authprovider';
import { Helmet } from 'react-helmet-async';
const Userprofile = () => {
    const {user}=useContext(authcontext);
     const { displayName, email, photoURL } = user || {};
    return (
      <div className="h-screen flex items-center justify-center px-4">
         <Helmet>
                <title>My profile | Nobabdine</title>
              </Helmet>
 <div className="card h-[50vh] w-full max-w-3xl md:card-side bg-base-100 shadow-sm">
  <figure className='md:w-2/5 w-full'>
    <img
      src={photoURL}
      className='w- h-full object-cover'
      alt="userphoto" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">User Name:{displayName}</h2>
    <p>Email: {email}</p>
    <div className="card-actions justify-end">
      <Link to={'/editprofile'}><button className="btn btn-primary">Edit profile</button></Link> 
    </div>
  </div>
</div>
      </div>
    );
};

export default Userprofile;
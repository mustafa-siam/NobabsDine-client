import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { authcontext } from '../../Providers/Authprovider';
import Myfood from './Myfood';

const Myfoods = () => {
   const [allfoods,setallfoods]=useState([])
   const {user}=useContext(authcontext)
       const axiosinstance=useAxiosSecure()
       useEffect(()=>{
           axiosinstance.get(`/mycuisin?email=${user?.email}`)
           .then(res=>{
               setallfoods(res.data)
           })
       },[axiosinstance,user?.email])
       return (
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
               {
                    allfoods.map(topfood=><Myfood key={topfood._id} topfood={topfood} allfoods={allfoods} setallfoods={setallfoods}></Myfood>)
               }
           </div>
       );
};

export default Myfoods;
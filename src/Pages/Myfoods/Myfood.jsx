import React from 'react';
import { hover, motion, scale } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
const Myfood = ({ topfood,allfoods,setallfoods }) => {
   const {_id, name, image, category, price, quantity } = topfood;
   const axiosinstance=useAxiosSecure()
const handledeletefood=(id)=>{
     Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axiosinstance.delete(`allcuisin/${id}`);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
              });
              const remainingcarts = allfoods.filter(food => food._id !== id);
              setallfoods(remainingcarts);
            }
          }
        });
}
    return (
        <motion.div 
        whileHover={{scale:1.03}}
       transition={{type:'spring',stiffness:300}}
         className="card bg-white shadow-xl rounded-lg overflow-hidden">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-60"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-gray-600 text-lg  font-semibold px-3 py-1 rounded-full shadow-md">
                    ${price}
                </div>
            </figure>
            <div className="p-5 space-y-3">
                <h2 className="card-title text-2xl font-bold text-gray-800 leading-tight">
                    {name}
                </h2>
                
                <p className="text-md text-red-600 font-medium">{category}</p>
                <div className="flex items-center justify-between text-gray-600 text-sm">
                    <p>
                        On Hand: <span className="font-semibold text-lg">{quantity}</span>
                    </p>
                    <p className='text-2xl cursor-pointer' onClick={()=>handledeletefood(_id)}><RiDeleteBinFill /></p>
                </div>
                <div className="card-actions justify-between items-center pt-3">
                    <Link to={`/updatefood/${_id}`}><button className='text-red-700 font-bold text-lg py-2 px-4 border border-red-700 rounded-lg cursor-pointer hover:text-red-300'>Update</button></Link>
                    <NavLink to={`/detailfood/${_id}`}>
<motion.button
                        whileHover="hover"
                        initial="initial"
                        variants={{
                             initial: { color: "#b91c1c" },
                             hover: { color: "#ffffff" },
                           }}
                       className="relative overflow-hidden text-red-700 font-bold text-lg py-2 px-4 border border-red-700 rounded-lg w-full z-10"
                    >
                    <motion.div
                        variants={{
                          initial: { y: "-100%" },
                          hover: { y: "0%" },
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                   className="absolute inset-0 bg-red-700 z-0"
                    />
                 <span className="relative z-10">View Details</span>
               </motion.button>

                    </NavLink>
                </div>              
            </div>
        </motion.div>
    );
};

export default Myfood;
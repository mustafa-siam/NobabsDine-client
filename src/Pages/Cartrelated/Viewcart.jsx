import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { CartContext } from '../../Cartproveider/Cartcontext';
import { authcontext } from '../../Providers/Authprovider';
import { useNavigate } from 'react-router-dom';


const Viewcart = () => {
  const { user } = useContext(authcontext);
  const { carts, fetchCarts, setcarts } = useContext(CartContext);
  const estimatedtotal = carts.reduce((sum, item) => sum + parseFloat(item.newtotalprice), 0);
  const axiosinstance = useAxiosSecure();
  const navigate = useNavigate();

  const handledelete = (id) => {
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
        const res = await axiosinstance.delete(`carts/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success"
          });
          fetchCarts();
          const remainingcarts = carts.filter(cart => cart._id !== id);
          setcarts(remainingcarts);
        }
      }
    });
  };

  const handlePlaceOrder = async () => {
    const orderInfo = {
      userEmail: user.email,
      items: carts,
      totalAmount: estimatedtotal,
      orderDate: new Date(),
    };

    const res = await axiosinstance.post('/orders', orderInfo);
    if (res.data.insertedId) {
      Swal.fire({
        title: "Order Placed!",
        text: "U will get your Food within 1 hour Till then keep patince",
        icon: "success",
        showConfirmButton: false,
        timer: 3000 // Display the message for 3 seconds
      });
       fetchCarts();
      setcarts([]);
      // Redirect to the purchase page after the timer
      setTimeout(() => {
        navigate('/purchase');
      }, 3100);
    }
  };

  return (
    <div className='w-full flex lg:flex-row flex-col p-2 gap-12 items-start'>
      <div className="overflow-x-auto lg:w-2/3">
        <table className="table">
          <thead className='bg-[#000] text-white text-lg'>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th></th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              carts.map(cart => <tr key={cart._id}>
                <td className='flex flex-col md:flex-row text-center items-center gap-4'><img src={cart.image} className='w-28' alt={cart.name} />
                  <h2 className='text-lg text-[#E9004B]'>{cart.name}</h2></td>
                <td className='text-lg '>${cart.price}</td>
                <td className='text-lg font-medium items-center'>
                  <input type="number" readOnly defaultValue={cart.inputqty}
                    className="px-4 py-3 text-lg border-2 border-gray-300 hover:border-orange-500 rounded-md w-20 "
                  />
                  <button onClick={() => handledelete(cart._id)} className='text-base pl-4 underline hover:cursor-pointer'>Remove item</button>
                </td>
                <td className='text-lg font-medium'>
                  <p>{cart.newtotalprice}</p></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <div className='lg:w-1/3 shadow-xl p-4 space-y-4'>
        <h2 className='font-medium'>CART TOTALS</h2>
        <hr />
        <div className="bg-base-100 collapse collapse-arrow border-base-300 border">
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title text-[#54595F]"
          >
            Add cuopons
          </div>
          <div
            className="collapse-content"
          >
            <div className="join w-full">
              <input type="text" className="input join-item" placeholder="Enter Code" />
              <button className="btn join-item text-white bg-[#e9004b]">Apply</button>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex justify-between text-lg'>
          <p>Free Shipping</p>
          <p className='font-semibold'>Free</p>
        </div>
        <hr />
        <div className='text-xl font-bold flex justify-between'>

          <p>Estimated Total</p>
          <p>${estimatedtotal.toFixed(2)}</p>
        </div>
        <div>
          <button onClick={handlePlaceOrder} className='btn w-full text-xl bg-[#e9004b] text-white hover:text-[#e9004b] hover:bg-white hover:border-red-600 my-4 py-6'>Place the Order</button>
        </div>
      </div>
    </div>
  );
};

export default Viewcart;
import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { authcontext } from '../../Providers/Authprovider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Updatefood = () => {
  const { user } = useContext(authcontext);
  const [inputqty,setinputqty]=useState(1)
  const navigate=useNavigate()
  const food = useLoaderData();
  const { _id, name, image, category, price, quantity, chef, origin, description } = food;
  const axiosinstance = useAxiosSecure();

  const handleupdateFood = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const origin = form.origin.value;
    const description = form.description.value;
    const chef=form.chef.value;
    const foodItem = {
      name,
      image,
      category,
      quantity:inputqty,
      price,
      origin,
      description,
      chef,
    }
    console.log(foodItem)
    const res=await axiosinstance.put(`allcuisin/${_id}`,foodItem)
     if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Food Item Updated',
          text: 'The food item has been successfully updated!',
          showConfirmButton:false,
          timer:2000,
        });
        setTimeout(() => {
          navigate(-1);
        }, 2200);    
      } 
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6from-[#fff0e5] via-[#c79fd6] to-[#f3aaaa] rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center pb-3 text-[#6c2a8c]">Share a Culinary Masterpiece</h1>
      <p className="text-center text-gray-600 font-medium pb-10">Fill in the details below to add a new food item to NobabDine.</p>

      <form onSubmit={handleupdateFood} className="grid md:grid-cols-2 gap-6">
        <fieldset>
          <legend className="text-base">Food Name</legend>
          <input name="name" type="text" defaultValue={name} className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Food Image URL</legend>
          <input name="image" type="text" defaultValue={image} className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Food Category</legend>
          <input name="category" type="text" defaultValue={category} className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Quantity</legend>
          <input onChange={(e)=>setinputqty(parseInt(e.target.value))} type="number" min="1" placeholder={quantity} className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Price ($)</legend>
          <input name="price" type="number" step="0.01" defaultValue={price} className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Food Origin (Country)</legend>
          <input name="origin" type="text" defaultValue={origin} className="input input-bordered w-full" required />
        </fieldset>

        <fieldset className="md:col-span-2">
          <legend className="text-base">Description (ingredients / making process)</legend>
          <textarea name="description" defaultValue={description} className="textarea textarea-bordered w-full" rows="4" required></textarea>
        </fieldset>

        <fieldset>
          <legend className="text-base">Chief Name</legend>
          <input type="text" name='chef'  defaultValue={chef} className="input input-bordered w-full"  />
        </fieldset>

        <fieldset>
          <legend className="text-base">Added By Email</legend>
          <input type="email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
        </fieldset>

        <input type="submit" value="Update Item" className="btn btn-block bg-[#6c2a8c] hover:bg-[#6c2a8c]/80 text-white md:col-span-2" />
      </form>
    </div>
  );
};

export default Updatefood;

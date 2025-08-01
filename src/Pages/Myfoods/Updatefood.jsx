import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { authcontext } from '../../Providers/Authprovider';

const Updatefood = () => {
      const { user } = useContext(authcontext);
    const axiosinstance=useAxiosSecure()
      const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;
    
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseFloat(form.price.value);
        const origin = form.origin.value;
        const description = form.description.value;
    
        const foodItem = {
          name,
          image,
          category,
          quantity,
          price,
          origin,
          description,
          addedByName: user?.displayName,
          email: user?.email,
          createdAt: Date.now(),
          purchase_count: 0 
        }}
    return (
         <div className="max-w-3xl mx-auto p-4 space-y-6from-[#fff0e5] via-[#c79fd6] to-[#f3aaaa] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center pb-3 text-[#6c2a8c]">Share a Culinary Masterpiece</h1>
      <p className="text-center text-gray-600 font-medium pb-10">Fill in the details below to add a new food item to NobabDine.</p>


      <form onSubmit={handleAddFood} className="grid md:grid-cols-2 gap-6">
        <fieldset>
          <legend className="text-base">Food Name</legend>
          <input name="name" type="text" className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Food Image URL</legend>
          <input name="image" type="text" className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Food Category</legend>
          <input name="category" type="text" className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Quantity</legend>
          <input name="quantity" type="number" min="1" className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Price ($)</legend>
          <input name="price" type="number" step="0.01" className="input input-bordered w-full" required />
        </fieldset>

        <fieldset>
          <legend className="text-base">Food Origin (Country)</legend>
          <input name="origin" type="text" className="input input-bordered w-full" required />
        </fieldset>

        <fieldset className="md:col-span-2">
          <legend className="text-base">Description (ingredients / making process)</legend>
          <textarea name="description" className="textarea textarea-bordered w-full" rows="4" required></textarea>
        </fieldset>

        <fieldset>
          <legend className="text-base">Added By Name</legend>
          <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full" readOnly />
        </fieldset>

        <fieldset>
          <legend className="text-base">Added By Email</legend>
          <input type="email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
        </fieldset>

        <input type="submit" value="Add Item" className="btn btn-block bg-[#6c2a8c] hover:bg-[#6c2a8c]/80 text-white md:col-span-2" />
      </form>
    </div>
    );
};

export default Updatefood;
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authcontext } from "../../Providers/Authprovider";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { CartContext } from "../../Cartproveider/Cartcontext";
import { Helmet } from "react-helmet";
const Fooddetails = () => {
    const { fetchCarts } = useContext(CartContext);
    const food = useLoaderData();
    const { _id, name, image, category, price, quantity, chef, origin, description } = food;
    const [inputqty, setinputqty] = useState(1);
    const { user } = useContext(authcontext);
    const axiosinstance = useAxiosSecure();

    const handleaddtocart = async () => {
        if (inputqty > quantity || inputqty <= 0) {
            Swal.fire({
                title: "Error!",
                text: `Only ${quantity} items are available.`,
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }

        const newtotalprice = parseFloat((inputqty * price).toFixed(2));

        const cartitem = {
            cuisineId: _id,
            email: user.email,
            image,
            name,
            price,
            newtotalprice,
            inputqty,
        };

        const res = await axiosinstance.post('carts', cartitem);

        if (res.data.insertedId) {
            Swal.fire({
                title: "Items Added In Cart",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });
            fetchCarts();
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 p-4">
             <Helmet>
                    <title>Food details | Nobabdine</title>
                  </Helmet>
            <div className="md:w-1/2">
                <img src={image} alt={name} className="w-full h-[400px] rounded-md shadow-md" />
                <h2 className="text-3xl font-bold pt-5 text-[#f97316]">{name}</h2>
            </div>
            <div className="md:w-1/2">
                <p className="text-xl text-gray-700 pb-6">{description}</p>
                <hr className="mb-4 border-orange-300" />
                <div className="grid grid-cols-2 gap-4 text-lg text-gray-800">
                    <p><span className="font-semibold text-orange-600">Category:</span> {category}</p>
                    <p><span className="font-semibold text-orange-600">Origin:</span> {origin}</p>
                    <p><span className="font-semibold text-orange-600">Chef:</span> {chef}</p>
                    <p><span className="font-semibold text-orange-600">Price:</span> ${price}</p>
                    <p>
                        <span className="font-semibold text-orange-600">Available Quantity:</span> 
                        <span className={quantity <= 0 ? "text-red-500 font-bold" : ""}>{quantity}</span>
                    </p>
                </div>
                <hr className="mb-4 border-orange-300 mt-6" />
                <div className="mt-6 flex items-center gap-4">
                    <input
                        type="number"
                        placeholder="Quantity"
                        name="quantity"
                        value={inputqty}
                        onChange={(e) => setinputqty(parseInt(e.target.value) || 1)}
                        className="px-4 py-3 text-lg border-2 border-gray-300 hover:border-orange-500 rounded-md w-40"
                        min="1"
                        max={quantity}
                        disabled={quantity <= 0}
                    />
                    <button 
                        onClick={handleaddtocart} 
                        className={`btn px-12 py-6 text-xl font-medium ${quantity <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E9004B] text-white hover:text-[#E9004B] hover:bg-white hover:border-red-600'}`}
                        disabled={quantity <= 0}
                    >
                        {quantity <= 0 ? 'Out of Stock' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Fooddetails;
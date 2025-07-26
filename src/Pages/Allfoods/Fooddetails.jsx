import { useLoaderData } from "react-router-dom";

const Fooddetails = () => {
    const food = useLoaderData();
    const { name, image, category, price, quantity, chef, origin, description } = food;

    return (
        <div className="flex flex-col md:flex-row justify-center  gap-6 p-4 ">
            <div className="md:w-1/2">
                <img src={image} alt={name} className="w-full h-[400px] rounded-md shadow-md" />
                <h2 className="text-3xl font-bold pt-5 text-[#f97316]">{name}</h2>
            </div>

    
            <div className="md:w-1/2 ">
                <p className="text-xl text-gray-700 pb-6">{description}</p>
                <hr className="mb-4 border-orange-300" />
                <div className="grid grid-cols-2 gap-4 text-lg text-gray-800">
                    <p><span className="font-semibold text-orange-600">Category:</span> {category}</p>
                    <p><span className="font-semibold text-orange-600">Origin:</span> {origin}</p>
                    <p><span className="font-semibold text-orange-600">Chef:</span> {chef}</p>
                    <p><span className="font-semibold text-orange-600">Price:</span> ${price}</p>
                    <p><span className="font-semibold text-orange-600">Available Quantity:</span> {quantity}</p>
                </div>
                <hr className="mb-4 border-orange-300 mt-6" />
                 <div className="mt-6 flex items-center gap-4">
                    
                    <input
    type="number"
    placeholder="Quantity"
    className="px-4 py-3 text-lg border-2 border-gray-300 hover:border-orange-500 rounded-md w-40 "
  />
                      <button className="btn bg-[#E9004B] text-white px-12 py-6 text-xl font-medium">
                                  Add to cart
                       </button>
            </div>
            </div>
        </div>
    );
};

export default Fooddetails;

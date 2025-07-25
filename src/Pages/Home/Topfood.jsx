import { motion } from "framer-motion";

const Topfood = ({ topfood }) => {
    const { name, image, category, price, quantity } = topfood;

    return (
        <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
            <figure className="relative ">
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
                {/* Category with a slightly richer red */}
                <p className="text-md text-red-600 font-medium">{category}</p>
                <div className="flex items-center justify-between text-gray-600 text-sm">
                    <p>
                        On Hand: <span className="font-semibold text-lg">{quantity}</span>
                    </p>
                </div>
                <div className="card-actions justify-end pt-3">
                    <motion.button initial={{ backgroundColor:"#ffffff", color:"#b91c1c" }} whileHover={{backgroundColor:"#b91c1c",color:"#ffffff"}} transition={{duration:2,ease:"easeInOut"}} className="btn text-red-700 font-bold text-lg py-2 border border-red-700 px-4 rounded-lg transition-colors duration-200 w-full">
                        View Details
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Topfood;
import { createContext, useContext, useEffect, useState } from "react";
import { authcontext } from "../Providers/Authprovider";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(authcontext);
  const [carts, setCarts] = useState([]);
  const axiosSecure = useAxiosSecure(); 

  const fetchCarts = async () => {
    if (user?.email) {
      try {
        const res = await axiosSecure.get(`/carts?email=${user.email}`);
        setCarts(res.data);
      } catch (err) {
        console.error("Failed to fetch carts", err);
      }
    } else {
      setCarts([]);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, [user?.email, axiosSecure]); // Add axiosSecure to dependencies

  const cartValue = {
    carts,
    setCarts,
    fetchCarts,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
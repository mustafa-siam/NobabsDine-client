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
  }, [user?.email]); // ✅ no need to depend on axiosSecure

  return (
    <CartContext.Provider value={{ carts, setCarts, fetchCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

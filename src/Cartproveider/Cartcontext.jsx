import { createContext, useContext, useEffect, useState } from "react";
import { authcontext } from "../Providers/Authprovider";
import useAxiosSecure from "../Hooks/UseAxiosSecure";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(authcontext);
  const axiosSecure = useAxiosSecure();
  const [carts, setcarts] = useState([]);

  const fetchCarts = () => {
  if (user?.email) {
    axiosSecure.get(`carts?email=${user.email}`)
      .then((res) => {
        setcarts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch carts", err);
      });
  } else {
    setcarts([]);
  }
};

 useEffect(() => {
    fetchCarts();
  }, [user?.email]);
const cartvalue={
    carts,
    setcarts,
    fetchCarts,
}
  return (
    <CartContext.Provider value={cartvalue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

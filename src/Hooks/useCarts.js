import { useContext, useEffect, useState } from "react";
import { authcontext } from "../Providers/Authprovider";
import useAxiosSecure from "./UseAxiosSecure";

const useCarts = () => {
    const { user, loading } = useContext(authcontext);
    const [carts, setCarts] = useState([]);
    const axiosSecure = useAxiosSecure();

    const fetchCarts = async () => {
        // Only run if user exists and is not loading
        if (user?.email && !loading) {
            try {
                const res = await axiosSecure.get(`/carts?email=${user.email}`);
                setCarts(res.data);
            } catch (err) {
                console.error("Failed to fetch carts", err);
                setCarts([]);
            }
        } else {
            // Reset carts if no user or user is logging out
            setCarts([]);
        }
    };

    useEffect(() => {
        // Call fetchCarts only when the user is available and not in a loading state
        fetchCarts();
    }, [user, loading, axiosSecure]);

    // Return an ARRAY
    return [carts, fetchCarts, setCarts];
};

export default useCarts;
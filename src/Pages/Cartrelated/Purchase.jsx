import React, { useContext, useEffect, useState } from 'react';
import { authcontext } from '../../Providers/Authprovider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Purchase = () => {
    const { user } = useContext(authcontext);
    const axiosinstance = useAxiosSecure();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            if (user?.email) {
                const res = await axiosinstance.get(`/orders?email=${user.email}`);
                setOrders(res.data);
            }
        };
        fetchOrders();
    }, [user, axiosinstance]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">My Ordered Items</h1>
            {orders.length === 0 ? (
                <div className="text-center text-lg text-gray-500">You have no orders yet.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className='bg-[#000] text-white text-lg'>
                            <tr>
                                <th>Product</th>
                                <th>Details</th>
                                <th>Buying Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.flatMap(order => order.items.map(item => (
                                <tr  key={`${order._id}-${item._id}`}>
                                    <td className='flex items-center gap-4'>
                                        <img src={item.image} className='w-20 h-20 object-cover rounded-lg' alt={item.name} />
                                        <h2 className='text-lg text-[#E9004B]'>{item.name}</h2>
                                    </td>
                                    <td>
                                        <p className='text-md'>Price: ${item.price} x {item.inputqty}</p>
                                        <p className='font-bold'>Total: ${item.newtotalprice}</p>
                                    </td>
                                    <td>
                                        <p>{new Date(order.orderDate).toLocaleString()}</p>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Purchase;
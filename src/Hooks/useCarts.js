import { useContext, useEffect, useState } from "react"
import useAxiosSecure from "./UseAxiosSecure"
import { authcontext } from "../Providers/Authprovider"

const useCarts=()=>{
    const {user}=useContext(authcontext)
    const [carts,setcarts]=useState([])
    const axiosinstance=useAxiosSecure()
    useEffect(()=>{
        if(user?.email){
            axiosinstance.get(`carts?email=${user?.email}`)
           .then(res=>setcarts(res.data))
           .catch(error=>console.log('error hanle by enterceptor',error))
        }         
    },[axiosinstance,user?.email])
    return carts;
}
export default useCarts;
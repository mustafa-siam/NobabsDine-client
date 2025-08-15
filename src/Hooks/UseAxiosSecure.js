import axios from 'axios';
import { useContext, useEffect } from 'react';
import { authcontext } from '../Providers/Authprovider';
import { useNavigate } from 'react-router-dom';

const axiosinstance = axios.create({
  baseURL: 'https://nobabs-dine-server.vercel.app/',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const {logout}=useContext(authcontext)
  const navigate=useNavigate();
  useEffect(()=>{axiosinstance.interceptors.response.use(response=>{
        return response;
    },error=>{
        console.log("error in interceptor",error)
        if(error.status==401 || error.status==403){
            console.log('need to log out the user')
            logout()
            .then(()=>{
                console.log('logged out user')
                navigate('/login')
            })
            .catch(error=>{
                console.log(error)
            })
        }
         return Promise.reject(error);
    })},[])
  return axiosinstance;
};

export default useAxiosSecure;

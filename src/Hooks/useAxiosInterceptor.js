import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../Providers/Authprovider";
import useAxiosSecure from "./UseAxiosSecure";

const useAxiosInterceptor = () => {
  const navigate = useNavigate();
  const { logout } = useContext(authcontext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch(console.error);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [axiosSecure, logout, navigate]);
};

export default useAxiosInterceptor;

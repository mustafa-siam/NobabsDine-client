import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosinstance;
};

export default useAxiosSecure;

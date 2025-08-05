import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Topfood from '../Home/Topfood';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const Allfoods = () => {
  const [allfoods, setallfoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page,setpage]=useState(1)
  const [totalpage,settotalpage]=useState(1)
  const limit=9;
  const axiosinstance = useAxiosSecure();

  useEffect(() => {
    axiosinstance.get(`/allcuisin?search=${searchTerm}&page=${page}&limit${limit}`)
      .then(res => {
        setallfoods(res.data.foods);
        settotalpage(res.data.totalpage)
        console.log(res.data.totalpage)
      });
  }, [axiosinstance,searchTerm,page]);


  return (
    <>
      <div className='flex justify-end'>
        <label className="input flex items-center gap-2">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={searchTerm}
            onChange={(e) =>{
                 setSearchTerm(e.target.value);
                 setpage(1);
            }}     
          />
        </label>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
       {allfoods.length > 0 ? (
          allfoods.map(item => <Topfood key={item._id} topfood={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No foods found</p>
        )}
      </div>
       {totalpage > 1 && (
        <div className='flex justify-center mt-6'>
          <Pagination
            count={totalpage}
            page={page}
            onChange={(e, value) => setpage(value)}
            color="secondary"
            size="large"
          />
        </div>
      )}
    </>
  );
};

export default Allfoods;
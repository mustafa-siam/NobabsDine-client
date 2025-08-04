import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Foodgallery = () => {
   const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  const [allfoods, setAllFoods] = useState([]);
  const axiosinstance = useAxiosSecure();

  useEffect(() => {
    axiosinstance.get("/allcuisin").then((res) => {
      setAllFoods(res.data);
    });
  }, [axiosinstance]);


  return (
    <>
 <div className="columns-1 gap-2 md:columns-3  p-4">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
            {
              allfoods.map((food,idx)=>{
                return(
                    <a href={food.image} key={idx}>
                    <img alt={food.name} src={food.image} 
                     className="w-full rounded-xl mb-2"
                    />
                </a>
                )
              })
            }
            </LightGallery>
        </div>
    </>
  );
};

export default Foodgallery;

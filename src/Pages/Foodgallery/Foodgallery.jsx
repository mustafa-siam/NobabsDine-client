import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-rotate.css'
//plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen'
import lgRotate from 'lightgallery/plugins/rotate'
import { Helmet } from "react-helmet";
const Foodgallery = () => {
   const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  const [allfoods, setAllFoods] = useState([]);
  const axiosinstance = useAxiosSecure();

  useEffect(() => {
    axiosinstance.get("/allcuisin").then((res) => {
      setAllFoods(res.data.foods);
    });
  }, [axiosinstance]);


  return (
    <>
    <Helmet>
      <title>Food Gallery | Nobabdine</title>
    </Helmet>
 <div className="columns-1 gap-2 md:columns-2 lg:columns-3  p-4">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom,lgAutoplay,lgFullscreen,lgRotate]}
                 mode="lg-fade"
            >
            {
              allfoods.map((food,idx)=>{
                return(
                    <a href={food.image} key={idx}>
                    <img alt={food.name} src={food.image} 
                     className="w-full rounded-xl mb-2 transition duration-300 hover:opacity-90 hover:scale-[1.01]"
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

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay} from 'swiper/modules';

const Catagories = () => {
  return (
    <div className='p-2'>
      <div className='text-center space-y-4'>
        <h1 className='text-[#05264e] md:text-5xl text-3xl font-bold'>Our Categories</h1>
        <p className='md:text-xl text-base text-gray-600'>
          Discover a variety of delicious options organized just for you. From savory favorites to sweet indulgences
          <br />
          our categories make it easy to find exactly what you are craving
        </p>
      </div>

      <div className='py-12'>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={
            {
              0:{
                slidesPerView:1,
              },
              768:{
                slidesPerView:2,
              },
              1024:{
                slidesPerView:3
              }
            }
          }
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card bg-base-100 shadow-sm hover:border-2 hover:border-red-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1f/e2/c0/a-qualidade-da-nossa.jpg"
                  alt="pizza"
                  className="rounded-xl h-52 w-full hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pizza</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 shadow-sm hover:border-2 hover:border-red-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FThe_Chicago_Burger_41a6888826.jpeg&w=1920&q=75"
                  alt="burger"
                  className="rounded-xl h-52 w-full hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Burger</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 shadow-sm hover:border-2 hover:border-red-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg"
                  alt="biriyani"
                  className="rounded-xl h-52 w-full hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Biriyani</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 shadow-sm hover:border-2 hover:border-red-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://kfoods.com/images1/newrecipeicon/pakistani-kachumbar-salad-by-chef-fauzia_5099.jpg"
                  alt="salad"
                  className="rounded-xl h-52 w-full hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Salad</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 shadow-sm hover:border-2 hover:border-red-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg"
                  alt="dessert"
                  className="rounded-xl h-52 w-full hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Dessert</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card bg-base-100 shadow-sm hover:border-2 hover:border-red-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://www.eatingwell.com/thmb/iCdLRBC1BMcDYKRYMTyyToQ8mRs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8401873-ad2429ae1858464a92229875c91c093d.jpg"
                  alt="pasta"
                  className="rounded-xl h-52 w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pasta</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Catagories;

import { motion } from "framer-motion";
import burger from "../../assets/banner/burger.jpg";
import pizza from "../../assets/banner/pizza.jpg";
import meat from "../../assets/banner/meat-plate.jpg";

const imageVariants = {
  hover: {
    y: -15,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 5,
    },
  },
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Banner = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden"
    >
      <div className="w-full">
        <motion.div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          <div className="lg:w-1/2 text-center lg:text-left px-2">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{opacity:0, y: 20 }}
              animate={{opacity:1, y: 0 }}
              transition={{ duration: 2,
                repeat: 1,
                ease: "easeInOut" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Savor the Flavor
              </span>
              <span className="block mt-2">Of Premium Cuisine</span>
            </motion.h1>

            <motion.p
              className="text-gray-700 mb-8 leading-relaxed text-base sm:text-lg md:text-xl"
              initial={{opacity:0, y: 20 }}
              animate={{opacity:1, y: 0 }}
              transition={{ duration: 2,
                repeat: 1,
                ease: "easeInOut"
               }}
            >
              Experience culinary excellence with our handcrafted dishes made from the freshest ingredients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay:4 }}
            >
              <motion.button
                className="relative px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium text-lg shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </motion.div>
          </div>

          <motion.div className="relative lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-2xl shadow-2xl overflow-hidden z-10"
                animate={floatingAnimation}
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={burger}
                  alt="Delicious Burger"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="absolute top-32 left-0 w-40 sm:w-56 h-40 sm:h-56 rounded-xl shadow-xl overflow-hidden"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={pizza}
                  alt="Tasty Pizza"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-48 sm:w-60 h-48 sm:h-60 rounded-xl shadow-xl overflow-hidden"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={meat}
                  alt="Juicy Meat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>      
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
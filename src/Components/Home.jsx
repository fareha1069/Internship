import React from 'react';
import back from '../assets/back.jpg';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      <motion.div 
        className="bg-gradient-to-br from-[#2E3A48] via-[#3b4a5a] to-[#5a6675] relative flex flex-col justify-center px-8 py-12 lg:w-[30%] w-full backdrop-blur-sm text-white overflow-hidden"
      >
        {/* Radial glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Content */}
        <div className="relative z-10">
          <span className="text-xl font-semibold text-gray-300 mb-2">Welcome to </span>
          <span className='text-2xl md:text-3xl font-bold text-white drop-shadow-xl'>eco<span className='font-light '>rooms</span>  </span>
    
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl" style={{ fontFamily: "Oswald, sans-serif" }}>
            <Typewriter
              words={['Modern Interior Home Store', 'Timeless Designs', 'Smart Living']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>

          <p className="mt-4 text-lg text-gray-200 leading-relaxed">
            Discover timeless furniture, aesthetic décor, and smart interior solutions tailored to elevate your living space. Our eCommerce platform ensures a seamless shopping experience from selection to doorstep delivery.
          </p>

          {/* Shop Now button */}
          <Link to='/products'>
          <button 
          style={{ cursor: "pointer" }}
          className="mt-6 px-6 py-3 bg-white text-[#2E3A48] font-semibold rounded-lg hover:bg-gray-200 transition duration-300 shadow-md">
            Shop Now
          </button>
          </Link>
        </div>
      </motion.div>

      {/* RIGHT SIDE - Background image with overlay */}
      <motion.div
        initial={{ opacity: 0.7, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="lg:w-[70%] w-auto h-[50vh] lg:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>
    </div>
  );
};

export default Home;

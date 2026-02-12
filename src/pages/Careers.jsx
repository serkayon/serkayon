import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import  Navbar from "./NavBar"
const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center relative overflow-hidden">
      <Navbar/>
  
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-4xl md:text-7xl font-bold tracking-tighter text-center px-6"
      >
        Careers <span className="text-gray-600 font-light italic text-3xl md:text-5xl block mt-4 md:inline md:mt-0">Coming Soon.</span>
      <div className="text-lg md:text-2xl mt-6 tracking-wide font-normal flex-wrap text-gray-400 flex items-center justify-center gap-2">
  <span>Mail your resume to</span>

  <a 
    href="mailto:your@email.com"
    className="text-cyan-400 hover:underline"
  >
 support@serkayon.com 
  </a>

</div>

      </motion.h1>
    </div>
  );
};

export default Careers;
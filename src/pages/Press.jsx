import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./NavBar";
import { Helmet } from "react-helmet-async";
const Press = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Press & News | Serkayon Industrial Intelligence Updates</title>
        <meta
          name="description"
          content="Explore Serkayon press releases, industry updates, and technology announcements."
        />
      </Helmet>
      <div className="min-h-screen bg-[#060606] flex items-center justify-center relative overflow-hidden">
        <Navbar />
        {/* CAPSULE BACK BUTTON */}
        {/* <motion.button 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => navigate(-1)}
        className="fixed top-10 left-10 z-50 flex items-center gap-2 px-6 py-2.5 bg-[#111111]/90 backdrop-blur-xl border border-white/5 rounded-full hover:border-cyan-400/40 transition-all group"
      >
        <ArrowLeft size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
        <span className="text-[11px] font-black tracking-[0.25em] text-gray-500 group-hover:text-white uppercase">Back</span>
      </motion.button> */}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-7xl font-bold tracking-tighter text-center px-6"
        >
          Press{" "}
          <span className="text-gray-600 font-light italic text-3xl md:text-5xl block mt-4 md:inline md:mt-0">
            Coming Soon.
          </span>
        </motion.h1>
      </div>
    </>
  );
};

export default Press;

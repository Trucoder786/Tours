import React from "react";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaCloud } from "react-icons/fa";
import earth from "../assets/earth.png"; // Make sure this is correct
import PopularTours from "./SubComponents/PopularTours";
import WhyChooseUs from "./SubComponents/WhyChooseUs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#0d1b2a] via-[#121212] to-[#0d1b2a] text-white flex items-center justify-center px-4 md:px-12 relative overflow-hidden">
        {/* ===== Clouds from Right to Left ===== */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-12 right-0 opacity-20 z-0"
        >
          <FaCloud size={80} />
        </motion.div>

        <motion.div
          initial={{ x: "150%" }}
          animate={{ x: "-150%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-32 right-0 opacity-10 z-0"
        >
          <FaCloud size={60} />
        </motion.div>

        <motion.div
          initial={{ x: "120%" }}
          animate={{ x: "-120%" }}
          transition={{
            repeat: Infinity,
            duration: 35,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-60 right-0 opacity-15 z-0"
        >
          <FaCloud size={100} />
        </motion.div>

        {/* ===== Clouds from Left to Right ===== */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 32,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-20 left-0 opacity-15 z-0"
        >
          <FaCloud size={90} />
        </motion.div>

        <motion.div
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{
            repeat: Infinity,
            duration: 38,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-48 left-0 opacity-10 z-0"
        >
          <FaCloud size={70} />
        </motion.div>

        {/* ===== Main Content ===== */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl">
          {/* Left Text Section */}
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left z-10">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#d4af37] leading-tight"
            >
              Discover India
              <br /> Like Never Before
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 max-w-xl"
            >
              Curated luxurious experiences that redefine travel and adventure.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#d4af37] text-black font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
            >
              <Link to={"/tours"}>Discover Tours</Link>
            </motion.button>
          </div>

          {/* Right Animation Section */}
          <div className="relative flex items-center justify-center w-full md:w-1/2 z-10">
            {/* Rotating Earth */}
            <motion.img
              src={earth}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              alt="Rotating Earth"
              className="w-64 sm:w-80 md:w-[450px] opacity-90 relative z-10"
            />

            {/* Plane moving across */}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 300, opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 8,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute top-8 left-0 z-20"
            >
              <FaPlaneDeparture size={50} className="text-[#d4af37]" />
            </motion.div>
          </div>
        </div>

        {/* Soft Background Glow Effects */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#d4af37] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
      </section>
      <PopularTours />
      <WhyChooseUs />
    </>
  );
};

export default Home;

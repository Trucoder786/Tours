import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShieldAlt, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0d1b2a] py-16 px-6 md:px-20" id="why-choose-us">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#d4af37] font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Experience excellence with HappyFamilyTrip
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Feature Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121212] p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaStar size={40} className="text-[#d4af37]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 font-serif">
            Best Rated Tours
          </h3>
          <p className="text-gray-400 text-sm">
            Highly rated experiences curated just for you.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121212] p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaShieldAlt size={40} className="text-[#d4af37]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 font-serif">
            Secure & Reliable
          </h3>
          <p className="text-gray-400 text-sm">
            100% trusted bookings with full security.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121212] p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaMapMarkedAlt size={40} className="text-[#d4af37]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 font-serif">
            Wide Range of Destinations
          </h3>
          <p className="text-gray-400 text-sm">
            Explore hidden gems across the country with us.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#121212] p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaHeadset size={40} className="text-[#d4af37]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 font-serif">
            24/7 Support
          </h3>
          <p className="text-gray-400 text-sm">
            Our travel experts are always ready to assist you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

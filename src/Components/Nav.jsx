import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark text-accent sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <img
              src={logo}
              alt="HappyFamilyTrip Logo"
              className="h-20 w-auto object-contain"
            />
            </Link>

            <span className="text-xl font-serif font-bold hidden sm:block">
              <Link to={"/"}>
              Happy<span className="text-secondary text-2xl">Family</span>Trip
              </Link>
            </span>
        </div>
        <ul className="hidden md:flex gap-8 text-lg font-sans">
          {["Home", "Tours", "About", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#f5c518" }}
              className="cursor-pointer"
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-secondary transition-all"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Book Now Button for Desktop */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="hidden md:block bg-secondary text-dark font-semibold py-2 px-4 rounded-full hover:bg-primary hover:text-secondary transition-all"
        >
          <Link to="/contact" >
          Book Now
          </Link>
        </motion.button>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="space-y-1 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-6 h-0.5 bg-accent"></div>
            <div className="w-6 h-0.5 bg-accent"></div>
            <div className="w-6 h-0.5 bg-accent"></div>
          </motion.div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-2/3 sm:w-1/3 h-full bg-dark text-accent shadow-lg p-6 flex flex-col gap-8 z-50"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <FaTimes
                size={24}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-6 text-2xl font-sans mt-8">
              {["Home", "Tours", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, color: "#f5c518" }}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-secondary transition-all"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Book Now Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-8 bg-secondary text-dark font-semibold py-2 px-6 rounded-full hover:bg-primary hover:text-accent transition-all"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact" >
              Book Now
              </Link>
            </motion.button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

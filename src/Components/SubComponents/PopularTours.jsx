import React from "react";
import { motion } from "framer-motion";
import mahakalImg from "../../assets/Mahakal.jpg";
import tajImg from "../../assets/Taj.png";
import kedarnathImg from "../../assets/Kedarnath.png";
import jaipurImg from "../../assets/Jaipur.png";
import { Link } from "react-router-dom";
// Dummy tours data
const tours = [
  {
    id: 1,
    title: "Mahakaleshwar, Ujjain",
    description: "Spiritual journey to one of the 12 Jyotirlingas.",
    price: "Starting ₹4999",
    image: mahakalImg,
  },
  {
    id: 2,
    title: "Taj Mahal, Agra",
    description: "Experience the symbol of eternal love.",
    price: "Starting ₹3999",
    image: tajImg,
  },
  {
    id: 3,
    title: "Kedarnath Temple",
    description: "Divine trek to the Himalayan temple.",
    price: "Starting ₹7999",
    image: kedarnathImg,
  },
  {
    id: 4,
    title: "City Palace, Jaipur",
    description: "Explore the royal heritage of Rajasthan.",
    price: "Starting ₹5999",
    image: jaipurImg,
  },
];

const PopularTours = () => {
  return (
    <section className="bg-[#0d1b2a] py-16 px-6 md:px-20" id="popular-tours">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#d4af37] font-bold mb-4">
          Popular Tours
        </h2>
        <p className="text-sm md:text-base text-gray-300">
          Discover the most loved destinations in India
        </p>
      </div>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            whileHover={{ scale: 1.05 }}
            className="bg-[#121212] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="h-60 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2 font-serif">
                {tour.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{tour.description}</p>
              <div className="text-[#d4af37] font-medium">{tour.price}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="border-2 border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-full hover:bg-[#d4af37] hover:text-[#0d1b2a] transition duration-300">
          <Link to={"/tours"}>View All Tours</Link>
        </button>
      </div>
    </section>
  );
};

export default PopularTours;

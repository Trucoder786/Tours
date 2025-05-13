import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/About.png";

// Stats data
const stats = [
  { label: "Happy Travelers", value: 500 },
  { label: "Tour Packages", value: 9 },
  { label: "Years of Experience", value: 10 },
  { label: "Satisfaction Rate", value: 100, suffix: "%" },
];

// Animation for text elements
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Animated counter component
const AnimatedCounter = ({ to, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to);
    if (start === end) return;

    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-dark text-accent">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
          About <span className="text-secondary">Us</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-accent">
          Discover what makes our travel experiences unforgettable. Passion. Planning. People.
        </p>
      </div>

      {/* Image + Stats */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Image with left-right animation */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate={{ x: [0, 20, 0, -20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full md:w-[90%] max-w-5xl"
          />
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-10 w-full md:w-1/2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={index + 2}
            >
              <h2 className="text-4xl font-bold text-secondary">
                <AnimatedCounter to={stat.value} suffix={stat.suffix || "+"} />
              </h2>
              <p className="text-lg mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-semibold text-accent mb-4">
          Our <span className="text-secondary">Mission</span>
        </h3>
        <p className="max-w-3xl mx-auto text-accent">
          We aim to make travel hassle-free, memorable, and accessible for everyone. From
          personalized tour packages to 24/7 support, we walk the journey with you.
        </p>
      </div>
    </div>
  );
};

export default About;

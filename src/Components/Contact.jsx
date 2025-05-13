import React from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/Contact.png";
import { Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { FaPhoneAlt, FaPlaneDeparture } from "react-icons/fa";

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

const Contact = () => {
  return (
    <div className="bg-dark text-accent min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE SECTION */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate={{ y: [0, -10, 0, 10, 0] }} // Moves up and down continuously
          transition={{
            duration: 4, // Slower duration for the complete cycle
            repeat: Infinity, // Makes the animation repeat infinitely
            repeatType: "loop", // Ensures smooth looping
            ease: "easeInOut", // Smooth easing for the movement
          }}
        >
          <img src={contactImg} alt="" />
        </motion.div>

        {/* RIGHT DETAILS SECTION */}
        <motion.div className="space-y-6" initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl font-bold text-center md:text-left"
            variants={fadeIn}
            custom={1}
          >
            Contact <span className="text-secondary">Info</span>
          </motion.h1>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-primary p-5 rounded-2xl border-2 border-secondary shadow-md flex items-center gap-4 hover:bg-secondary transition hover:border-2 hover:border-primary  "
            custom={2}
            variants={fadeIn}
          >
            <FaPhoneAlt className="text-secondary" />
            <div>
              <p className="font-semibold text-sm">Call / WhatsApp</p>
              <p className="text-accent hover:underline">+91 9999999999</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.div
            className="bg-primary border-2  border-secondary p-5 hover:border-2 hover:border-primary rounded-2xl shadow-md flex items-center gap-4"
            custom={3}
            variants={fadeIn}
          >
            <Mail className="text-secondary" />
            <div>
              <p className="font-semibold text-sm">Email</p>
              <p className="text-accent">example@email.com</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="bg-primary border-2 border-secondary p-5 rounded-2xl hover:border-2 hover:border-primary shadow-md flex items-center gap-4"
            custom={4}
            variants={fadeIn}
          >
            <MapPin className="text-secondary" />
            <div>
              <p className="font-semibold text-sm">Location</p>
              <p className="text-accent">Pune, Maharastra</p>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="bg-primary border-2 border-secondary p-5 rounded-2xl hover:border-2 hover:border-primary shadow-md flex items-center gap-4"
            custom={5}
            variants={fadeIn}
          >
            <div className="flex gap-4 text-secondary">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
            </div>

            <div>
              <p className="font-semibold text-sm">Socials</p>
              <p className="text-accent">Follow us online</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

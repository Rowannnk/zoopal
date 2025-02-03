"use client";

import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] w-full p-10 h-screen overflow-hidden">
      {/* Background Blur Elements */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#d5d3e1] opacity-30 rounded-full blur-3xl"
        initial={{ x: "100%" }} // Changed to slide from the right
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-0 w-96 h-96 bg-[#d5d3e1] opacity-50 rounded-full blur-3xl"
        initial={{ x: "-100%" }} // Changed to slide from the left
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Column - Image */}
        <div className="md:w-full p-5">
          <motion.div
            className="flex justify-center items-center w-full transition-transform transform hover:scale-110 hover:rotate-3 ease-in-out duration-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Image
              src="/images/main1.jpg"
              alt="Zoo Animal"
              width={1200}
              height={800}
              className="rounded-3xl object-contain w-full h-auto mt-10"
            />
          </motion.div>
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold text-[#7b6fb1] leading-snug mb-6"
            initial={{ x: "100%" }} // Changed to slide from the right
            animate={{ x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Adopt a Zoo Pal, <br />
            <span className="text-[#5f4fa8]">Make a Difference!</span>
          </motion.h1>
          <motion.p
            className="text-[#7b6fb1] text-lg leading-relaxed mb-6"
            initial={{ x: "100%" }} // Changed to slide from the right
            animate={{ x: "0%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Welcome to <strong>Adopt a Zoo Pal</strong>, where the wild meets
            your heart! Our mission is to create deeper connections between
            people and the incredible animals who call our zoo home. Modern zoos
            focus on conservation, research, and education, striving to protect
            endangered species and promote environmental awareness.
          </motion.p>
          <motion.p
            className="text-[#7b6fb1] text-lg leading-relaxed mb-8"
            initial={{ x: "100%" }} // Changed to slide from the right
            animate={{ x: "0%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Join us in building lasting bonds with wildlife. Your new animal
            friend is waiting to meet you!
          </motion.p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Link to the adoption page */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Adoption"
                className="flex items-center px-8 py-3 bg-[#5f4fa8] text-white rounded-full shadow-lg hover:bg-[#504394] hover:shadow-2xl transition-all focus:ring-4 focus:ring-[#5f4fa8]/50"
              >
                <FaPaw className="mr-2" />
                Adopt a Zoo Pal
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Appointment"
                className="flex items-center px-8 py-3 bg-white text-[#5f4fa8] border border-[#5f4fa8] rounded-full shadow-lg hover:bg-[#f4f2fa] hover:shadow-2xl transition-all focus:ring-4 focus:ring-[#5f4fa8]/50"
              >
                <FaPaw className="mr-2" />
                Make an appointment with your Pal
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

"use client";

import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#f4f2fa] via-white to-[#eae6f8] w-full p-10 h-screen overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d5d3e1] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#d5d3e1] opacity-50 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Column - Image */}
        <div className="md:w-full p-5">
          {" "}
          {/* Full width of the column */}
          <div className="flex justify-center items-center w-full transition-transform transform hover:scale-110 hover:rotate-3 ease-in-out duration-700">
            <Image
              src="/images/hero_section_img.png"
              alt="Zoo Animal"
              width={1200} // Set the width of the image to a high number for full width
              height={800} // Adjust height as necessary
              className="rounded-3xl object-cover w-full h-auto" // Ensures full width, auto height for aspect ratio
            />
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-[#7b6fb1] leading-snug mb-6">
            Adopt a Zoo Pal, <br />
            <span className="text-[#5f4fa8]">Make a Difference!</span>
          </h1>
          <p className="text-[#7b6fb1] text-lg leading-relaxed mb-6">
            Welcome to <strong>Adopt a Zoo Pal</strong>, where the wild meets
            your heart! Our mission is to create deeper connections between
            people and the incredible animals who call our zoo home. Modern zoos
            focus on conservation, research, and education, striving to protect
            endangered species and promote environmental awareness.
          </p>
          <p className="text-[#7b6fb1] text-lg leading-relaxed mb-8">
            Join us in building lasting bonds with wildlife. Your new animal
            friend is waiting to meet you!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {" "}
            {/* Link to the adoption page */}
            <Link
              href="/Adoption"
              className="flex items-center px-8 py-3 bg-[#5f4fa8] text-white rounded-full shadow-lg hover:bg-[#504394] hover:shadow-2xl transition-all focus:ring-4 focus:ring-[#5f4fa8]/50"
            >
              <FaPaw className="mr-2" />
              Adopt a Zoo Pal
            </Link>
            <Link
              href="/Appointment"
              className="flex items-center px-8 py-3 bg-white text-[#5f4fa8] border border-[#5f4fa8] rounded-full shadow-lg hover:bg-[#f4f2fa] hover:shadow-2xl transition-all focus:ring-4 focus:ring-[#5f4fa8]/50"
            >
              <FaPaw className="mr-2" />
              Make an appointment with your Pal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

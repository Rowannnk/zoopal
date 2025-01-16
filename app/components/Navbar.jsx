"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="flex justify-between items-center px-6 py-8 bg-white shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">AdoptAZooPal</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-[#7b6fb1] font-semibold"
                : "hover:text-[#7b6fb1]"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/Adoption"
            className={`${
              pathname === "/Adoption"
                ? "text-[#7b6fb1] font-semibold"
                : "hover:text-[#7b6fb1]"
            }`}
          >
            Make an Adoption
          </Link>
        </li>
        <li>
          <Link
            href="/Appointment"
            className={`${
              pathname === "/Appointment"
                ? "text-[#7b6fb1] font-semibold"
                : "hover:text-[#7b6fb1]"
            }`}
          >
            Make an Appointment
          </Link>
        </li>
      </ul>
      <div className="relative">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaUserCircle className="text-2xl" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-30">
            <ul className="p-2">
              <li className="py-2 hover:bg-gray-100 text-center">
                <a href="#">Profile</a>
              </li>
              <li className="py-2 hover:bg-gray-100 text-center">
                <a href="#">Check your Pals</a>
              </li>
              <li className="py-2 hover:bg-gray-100 text-center">
                <a href="#">Appointments</a>
              </li>
            </ul>
            <button className="block w-full py-2 text-center bg-[#7b6fb1] text-white rounded-lg hover:bg-[#504394] hover:shadow-2xl transition-all">
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

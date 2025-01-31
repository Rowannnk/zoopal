"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "admin",
    };

    // Retrieve existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    existingUsers.push(newUser);

    // Save the updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful!");

    window.location.href = "/auth/login";
  };

  const handleLoginRedirect = () => {
    window.location.href = "/auth/login";
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 min-h-screen flex items-center  flex-col">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center mt-20">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#7b6fb1]">Register</h2>
            <p className="text-xs mt-4 text-[#7b6fb1] flex gap-2 items-center">
              Register to get your wild experience
              <FaPaw />
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <button className="bg-[#7b6fb1] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Register
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm"></p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-5 text-xs flex justify-between items-center text-[#7b6fb1]">
              <p>Already have an account?</p>
              <a
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 cursor-pointer"
                onClick={handleLoginRedirect}
              >
                Login
              </a>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <Image
              width={612}
              height={500}
              alt="Register Image"
              className="rounded-2xl h-[500px] w-full object-cover"
              src="/images/register_image.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterRedirect = () => {
    window.location.href = "/auth/register"; // Change to the registration page
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the users array from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Login successful
      alert("Login successful!");
      window.location.href = "/"; // Redirect to home page or dashboard
    } else {
      // Login failed
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 min-h-screen flex items-center flex-col">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center mt-20">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#7b6fb1]">Login</h2>
            <p className="text-xs mt-4 text-[#7b6fb1] flex gap-2 items-center">
              Login to get your wild experience
              <FaPaw />
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-[#7b6fb1] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm"></p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-5 text-xs border-b border-[#7b6fb1] py-4 text-[#7b6fb1]">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#7b6fb1]">
              <p>Don't have an account?</p>
              <button
                onClick={handleRegisterRedirect}
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Register
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2 ">
            <img
              className="rounded-2xl h-[500px] w-full object-cover "
              src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGQlMjBhbmltYWxzfGVufDB8fDB8fHww"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;

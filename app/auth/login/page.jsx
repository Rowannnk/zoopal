"use client";
import swal from "sweetalert";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaPaw } from "react-icons/fa";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a logged-in user in localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      // Optionally, redirect to home if already logged in
      window.location.href = "/";
    }
  }, []);

  const handleRegisterRedirect = () => {
    window.location.href = "/auth/register";
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCredentials = { email, password };

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        // Store the user in localStorage for persistence
        localStorage.setItem("user", JSON.stringify(data.user));
        swal("Success", "Login successful!", "success").then(() => {
          window.location.href = "/"; // Redirect after successful login
        });
      } else {
        setErrorMessage(data.message || "Something went wrong.");
        swal("Error", data.message || "Something went wrong.", "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while trying to login.");
      swal("Error", "An error occurred while trying to login.", "error");
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

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

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
              <p>Dont have an account?</p>
              <button
                onClick={handleRegisterRedirect}
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Register
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2 ">
            <Image
              width={612}
              height={500}
              className="rounded-2xl h-[500px] w-full object-cover"
              src="/images/login_image.jpeg"
              alt="Login Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;

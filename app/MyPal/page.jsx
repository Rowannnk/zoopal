"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const MyPal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const adoptedAnimals = [
    {
      id: 1,
      species: "Panthera uncia",
      commonName: "Snow Leopard",
      name: "Snowy",
      description:
        "A solitary and elusive big cat native to the mountain ranges of Central and South Asia.",
      gender: "Female",
      age: 5,
      birthdate: "2018-05-15",
      adoptionStatus: "Endangered",
      imageUrl: "/images/snow_leopard.jpg",
    },
    {
      id: 3,
      species: "Ailurus fulgens",
      commonName: "Red Panda",
      name: "Rusty",
      description:
        "A small, nocturnal mammal native to the Himalayas and southwestern China, recognized by its reddish-brown fur.",
      gender: "Male",
      age: 3,
      birthdate: "2020-07-10",
      adoptionStatus: "Moderately Concerned",
      imageUrl: "/images/red_panda.jpg",
    },
    {
      id: 4,
      species: "Panthera tigris",
      commonName: "Bengal Tiger",
      name: "Rajah",
      description:
        "A powerful and majestic predator native to India, known for its orange coat with black stripes.",
      gender: "Male",
      age: 7,
      birthdate: "2016-03-25",
      adoptionStatus: "Endangered",
      imageUrl: "/images/bengal_tiger.jpg",
    },
  ];

  // Handle opening modal and setting selected animal
  const handleAnimalLatest = (animalId) => {
    const animal = adoptedAnimals.find((a) => a.id === animalId);
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#7b6fb1]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            Thank You for Giving Them A Brighter Future!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-center"
          >
            At AdoptAZooPal.com, we believe in connecting our adopters with the
            animals they support. Whether here to meet your adopted animal up
            close, take a behind-the-scenes tour, or just spend some quality
            time with your new pal, we have made it easy to schedule an
            unforgettable experience.
          </motion.p>
        </div>

        {/* Grid displaying adopted animals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
          {adoptedAnimals.map((animal) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={animal.id}
              className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-100 cursor-pointer hover:shadow-xl transition-transform duration-500 transform hover:scale-105"
            >
              {/* Card Content */}
              <Link href={`/pets/${animal.id}`} className="block">
                <div className="p-4">
                  <h6 className="mb-1 text-2xl font-bold text-[#7b6fb1]">
                    {animal.name}
                  </h6>
                  <p className="text-sm font-medium text-gray-700">
                    {animal.commonName}
                  </p>
                  <p
                    className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold inline-block ${
                      animal.adoptionStatus === "Endangered"
                        ? "bg-green-200 text-green-800"
                        : animal.adoptionStatus === "Moderately Concerned"
                        ? "bg-red-200 text-red-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {animal.adoptionStatus}
                  </p>
                </div>

                {/* Card Image */}
                <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
                  <Image
                    width={300}
                    height={200}
                    src={animal.imageUrl}
                    alt="animal image"
                    className="object-cover w-full h-full  rounded-md transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
              </Link>

              {/* "See All Latest" Button - Outside of Link */}
              <button
                onClick={() => handleAnimalLatest(animal.id)}
                className="absolute top-6 right-4 text-sm text-[#7b6fb1] font-semibold underline transition-all duration-300 hover:text-purple-400"
              >
                See All Latest
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedAnimal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                ✖️
              </button>

              {/* Header */}
              <h3 className="text-2xl font-semibold text-center mb-6">
                Here are some updates on your pal!
              </h3>

              {/* Two Column Layout */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Left Column: Image */}
                <div className="sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0 bg-gray-100 rounded-lg p-6">
                  <Image
                    src={selectedAnimal.imageUrl || "/placeholder-image.png"}
                    alt={`${selectedAnimal.commonName}'s latest photo`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>

                {/* Right Column: Details */}
                <div className="sm:w-1/2 sm:pl-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Has {selectedAnimal.name} been fed today?
                  </h4>
                  <ul>
                    <li className="flex items-center">
                      <span className="text-lg">Lunch:</span>
                      <span className="ml-2 text-gray-300 font-bold">
                        <FaCheckCircle />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg">Snack:</span>
                      <span className="ml-2 text-gray-300 font-bold">
                        <FaCheckCircle />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-lg">Dinner:</span>
                      <span className="ml-2 text-[#7b6fb1] font-bold">
                        <FaCheckCircle />
                      </span>
                    </li>
                  </ul>
                  <h4 className="text-xl font-semibold mb-2 mt-5">
                    {selectedAnimal.name} Mood Today
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Currently, {selectedAnimal.name} is feeling playful and
                    energetic!
                  </p>
                  <p className="text-sm text-gray-500">
                    Fun Fact: Every animal has its own personality, so their
                    mood can change from day to day! Check back tomorrow for a
                    new update on how {selectedAnimal.name} is feeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyPal;

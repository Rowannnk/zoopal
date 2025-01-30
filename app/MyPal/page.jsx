"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const MyPal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Animal data (adopted animals)
  const adoptedAnimals = [
    {
      id: 1,
      species: "Panthera uncia",
      commonName: "Snow Leopard",
      imageUrl: "/images/pet1.jpg",
      age: 7,
      gender: "Female",
      conservationStatus: "Endangered",
      description:
        "The Snow Leopard is a majestic and elusive big cat known for its thick fur and powerful build.",
    },
    {
      id: 2,
      species: "Loxodonta africana",
      commonName: "African Elephant",
      imageUrl: "/images/pet2.jpg",
      age: 12,
      gender: "Male",
      conservationStatus: "Vulnerable",
      description:
        "The African Elephant is the largest land animal, revered for its intelligence and memory.",
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
      <div className="relative min-h-screen overflow-hidden bg-white">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#7b6fb1]">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Thank You for Giving Them A Brighter Future!
          </h1>
          <p className="text-lg leading-relaxed mb-10 text-center">
            At AdoptAZooPal.com, we believe in connecting our adopters with the
            animals they support. Whether here to meet your adopted animal up
            close, take a behind-the-scenes tour, or just spend some quality
            time with your new pal, we have made it easy to schedule an
            unforgettable experience.
          </p>
        </div>

        {/* Grid displaying adopted animals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
          {adoptedAnimals.map((animal) => (
            <div
              key={animal.id}
              className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-100 cursor-pointer hover:shadow-xl transition-transform duration-500 transform hover:scale-105"
            >
              {/* "See All Latest" Button */}
              <button
                onClick={() => handleAnimalLatest(animal.id)}
                className="absolute top-6 right-4 text-sm text-[#7b6fb1] font-semibold underline transition-all duration-300 hover:text-purple-600"
              >
                See All Latest
              </button>

              {/* Card Content */}
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {animal.commonName}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  {animal.species}
                </p>
                <p className="text-slate-600 leading-normal font-light">
                  {animal.conservationStatus}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
                <Image
                  width={300}
                  height={200}
                  src={animal.imageUrl}
                  alt="animal image"
                  className="object-contain w-full  rounded-md transition-transform duration-300 transform hover:scale-110"
                />
              </div>
            </div>
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
              ></button>

              {/* Header */}
              <h3 className="text-2xl font-semibold text-center mb-6">
                Here are some updates on your pal!
              </h3>

              {/* Two Column Layout */}
              <div className="flex flex-col sm:flex-row items-center">
                {/* Left Column: Image */}
                <div className="sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
                  <Image
                    src={selectedAnimal.imageUrl || "/placeholder-image.png"}
                    alt={`animal's latest photo`}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>

                {/* Right Column: Details */}
                <div className="sm:w-1/2 sm:pl-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Has {selectedAnimal.commonName} been fed today?
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
                    {selectedAnimal.commonName} Mood Today
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Currently, {selectedAnimal.commonName} is feeling playful
                    and energetic!
                  </p>
                  <p className="text-sm text-gray-500">
                    Fun Fact: Every animal has its own personality, so their
                    mood can change from day to day! Check back tomorrow for a
                    new update on how {selectedAnimal.commonName} is feeling.
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

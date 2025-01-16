"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Adoption = () => {
  const animals = [
    {
      id: 1,
      name: "Mrs. Zara",
      species: "Panthera uncia",
      commonName: "Snow Leopard",
      imageUrl: "/images/pet1.jpg",
    },
    {
      id: 2,
      name: "Mr. Max",
      species: "Loxodonta africana",
      commonName: "African Elephant",
      imageUrl: "/images/pet2.jpg",
    },
    {
      id: 3,
      name: "Ms. Mei",
      species: "Ailurus fulgens",
      commonName: "Red Panda",
      imageUrl: "/images/pet3.jpg",
    },
    {
      id: 4,
      name: "Ms. Ming",
      species: "Panthera tigris",
      commonName: "Bengal Tiger",
      imageUrl: "/images/pet4.jpg",
    },
    {
      id: 5,
      name: "Mr. Leo",
      species: "Panthera leo",
      commonName: "Lion",
      imageUrl: "/images/pet5.jpg",
    },
    {
      id: 6,
      name: "Ms. Ella",
      species: "Elephas maximus",
      commonName: "Asian Elephant",
      imageUrl: "/images/pet6.jpg",
    },
  ];

  const [selectedSpecies, setSelectedSpecies] = useState("All");

  const handleSpeciesFilter = (species) => {
    setSelectedSpecies(species);
  };

  const filteredAnimals =
    selectedSpecies === "All"
      ? animals
      : animals.filter((animal) => animal.species === selectedSpecies);

  const speciesList = [
    "All",
    ...new Set(animals.map((animal) => animal.species)),
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#f4f2fa] via-white to-[#eae6f8] w-full min-h-screen py-10">
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl font-bold text-[#7b6fb1] mb-4">
            Meet Today&apos;s Zoo Pals Waiting for You!
          </h1>
          <p className="text-gray-700 mb-8">
            Looking for a new friend? Check out today’s hand-picked animals that
            are waiting for your love and support! Every adoption makes a real
            impact — from feeding to donations, your support helps these amazing
            creatures thrive.
          </p>

          {/* Species Scroll Bar */}
          <div className="flex overflow-x-scroll gap-4 px-4 pb-4 scrollbar-hide">
            {speciesList.map((species, index) => (
              <button
                key={index}
                onClick={() => handleSpeciesFilter(species)}
                className={`px-6 py-3 rounded-full whitespace-nowrap ${
                  selectedSpecies === species
                    ? "bg-[#7b6fb1] text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-[#504394] hover:text-white transition-all`}
              >
                {species}
              </button>
            ))}
          </div>

          {/* Animal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredAnimals.map((animal) => (
              <div
                key={animal.id}
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center border border-gray-200"
              >
                <div className="bg-gray-100 h-56 w-full rounded-md flex justify-center items-center mb-4">
                  <Image
                    src={animal.imageUrl}
                    alt={animal.commonName}
                    width={500}
                    height={500}
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {animal.name}
                </h2>
                <p className="text-gray-500">
                  Species: <span className="italic">{animal.species}</span>
                </p>
                <p className="text-gray-500">
                  Common Name: {animal.commonName}
                </p>
                <Link
                  href={`/pets/${animal.id}`}
                  className="mt-4 text-[#7b6fb1] hover:text-[#504394] transition-all flex items-center gap-1"
                >
                  More Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Adoption;

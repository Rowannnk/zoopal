"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaSort, FaFilter, FaSearch } from "react-icons/fa"; // Importing icons
import { motion } from "framer-motion"; // Importing motion from framer-motion

const Adoption = () => {
  const animals = [
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
      id: 2,
      species: "Loxodonta africana",
      commonName: "African Elephant",
      name: "Tusker",
      description:
        "The largest land animal, known for its large ears and long tusks, found in Africa.",
      gender: "Male",
      age: 10,
      birthdate: "2013-11-20",
      adoptionStatus: "Least Concerned",
      imageUrl: "/images/african_elephant.jpg",
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
    {
      id: 5,
      species: "Panthera leo",
      commonName: "Lion",
      name: "Simba",
      description:
        "Known as the 'king of the jungle', lions are large wild cats found in Africa and parts of India.",
      gender: "Male",
      age: 8,
      birthdate: "2015-02-10",
      adoptionStatus: "Least Concerned",
      imageUrl: "/images/lion.jpg",
    },
    {
      id: 6,
      species: "Gorilla gorilla",
      commonName: "Western Gorilla",
      name: "Koko",
      description:
        "The Western Gorilla, a powerful and intelligent primate, is native to the forests of Central Africa. This species is known for its robust build, with large hands, arms, and a broad chest, which make them strong and capable of climbing trees, although they are primarily terrestrial. Western Gorillas are highly social creatures, living in small groups led by a dominant silverback male. They communicate through vocalizations, body language, and facial expressions. Despite their intelligence and strength, Western Gorillas are critically endangered due to habitat loss, poaching, and disease, making them one of the most at-risk species of great apes.",
      gender: "Female",
      age: 12,
      birthdate: "2011-06-21",
      adoptionStatus: "Critically Endangered",
      imageUrl: "/images/gorilla.jpg",
    },
  ];

  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const getSortedAnimals = (animalsList) => {
    switch (sortOption) {
      case "name-asc":
        return [...animalsList].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...animalsList].sort((a, b) => b.name.localeCompare(a.name));
      case "age-asc":
        return [...animalsList].sort((a, b) => a.age - b.age);
      case "age-desc":
        return [...animalsList].sort((a, b) => b.age - a.age);
      default:
        return animalsList;
    }
  };

  const filteredAnimals = animals
    .filter(
      (animal) =>
        filterOption === "All" || animal.adoptionStatus === filterOption
    )
    .filter((animal) =>
      animal.commonName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedAnimals = getSortedAnimals(filteredAnimals);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0]  w-full min-h-screen py-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#7b6fb1] mb-4">
            Meet Today&apos;s Zoo Pals Waiting for You!
          </h1>
          <p className="text-gray-700 mb-8">
            Looking for a new friend? Check out todays hand-picked animals that
            are waiting for your love and support!
          </p>

          {/* Filters Row */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sort By */}
            <div className="relative">
              <select
                value={sortOption}
                onChange={handleSort}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 pl-10"
              >
                <option value="">Sort By</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="age-asc">Age (Ascending)</option>
                <option value="age-desc">Age (Descending)</option>
              </select>
              <FaSort className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Filter By */}
            <div className="relative">
              <select
                value={filterOption}
                onChange={handleFilter}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 pl-10"
              >
                <option value="All">Filter By</option>
                <option value="Least Concerned">Least Concerned</option>
                <option value="Endangered">Endangered Species</option>
                <option value="Moderately Concerned">
                  Moderately Concerned Species
                </option>
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center border border-gray-300 bg-white rounded-md px-4 py-2">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by name..."
                className="ml-5 outline-none text-gray-800 w-full border-0 bg-tran"
              />
            </div>
          </motion.div>

          {/* Animal Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {sortedAnimals.length > 0 ? (
              sortedAnimals.map((animal) => (
                <motion.div
                  key={animal.id}
                  className="relative w-75 rounded-lg overflow-hidden shadow-lg border border-gray-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-66">
                    <Image
                      src={animal.imageUrl}
                      alt={animal.commonName}
                      width={500}
                      height={500}
                      className="object-cover w-full h-96"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 flex justify-between items-center">
                    <div>
                      <p className="text-md text-left font-semibold text-white tracking-wide drop-shadow-md">
                        {animal.name}
                      </p>
                      <p className="text-xs text-white/80 italic tracking-wide">
                        {animal.commonName}
                      </p>
                    </div>

                    <Link
                      href={`/pets/${animal.id}`}
                      className="text-xs text-white bg-black/20 px-3 py-1 rounded-lg"
                    >
                      More Info
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="col-span-3 text-gray-600 text-lg">
                No animals match your criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Adoption;

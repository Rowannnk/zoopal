"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaSort, FaFilter, FaSearch } from "react-icons/fa"; // Importing icons

const Adoption = () => {
  const animals = [
    {
      id: 1,
      species: "Panthera uncia",
      commonName: "Snow Leopard",
      age: 5,
      adoptionStatus: "Endangered",
      imageUrl: "/images/pet1.jpg",
    },
    {
      id: 2,
      species: "Loxodonta africana",
      commonName: "African Elephant",
      age: 10,
      adoptionStatus: "No Adoptive Owner",
      imageUrl: "/images/pet2.jpg",
    },
    {
      id: 3,
      species: "Ailurus fulgens",
      commonName: "Red Panda",
      age: 3,
      adoptionStatus: "Moderately Concerned",
      imageUrl: "/images/pet3.jpg",
    },
    {
      id: 4,
      species: "Panthera tigris",
      commonName: "Bengal Tiger",
      age: 7,
      adoptionStatus: "Endangered",
      imageUrl: "/images/pet4.jpg",
    },
    {
      id: 5,
      species: "Panthera leo",
      commonName: "Lion",
      age: 8,
      adoptionStatus: "No Adoptive Owner",
      imageUrl: "/images/pet5.jpg",
    },
    {
      id: 6,
      species: "Elephas maximus",
      commonName: "Asian Elephant",
      age: 6,
      adoptionStatus: "Moderately Concerned",
      imageUrl: "/images/pet6.jpg",
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
      <div className="bg-gradient-to-br from-[#f4f2fa] via-white to-[#eae6f8] w-full min-h-screen py-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#7b6fb1] mb-4">
            Meet Today&apos;s Zoo Pals Waiting for You!
          </h1>
          <p className="text-gray-700 mb-8">
            Looking for a new friend? Check out today’s hand-picked animals that
            are waiting for your love and support!
          </p>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
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
                <option value="No Adoptive Owner">No Adoptive Owner</option>
                <option value="Endangered">Endangered Species</option>
                <option value="Moderately Concerned">
                  Moderately Concerned Species
                </option>
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center border border-gray-300 rounded-md px-4 py-2">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by name..."
                className="ml-10 outline-none text-gray-800"
              />
            </div>
          </div>

          {/* Animal Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {sortedAnimals.length > 0 ? (
              sortedAnimals.map((animal) => (
                <div
                  key={animal.id}
                  className="relative w-70 rounded-lg overflow-hidden shadow-lg border border-gray-200"
                >
                  <div className="h-64">
                    <Image
                      src={animal.imageUrl}
                      alt={animal.commonName}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 flex justify-between items-center">
                    <p className="text-xs text-white/80">{animal.commonName}</p>
                    <Link
                      href={`/pets/${animal.id}`}
                      className="text-xs text-white bg-black/20 px-3 py-1 rounded-lg"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
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

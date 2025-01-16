"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import { FaPaw, FaMars, FaTree } from "react-icons/fa";

const animals = [
  {
    id: 1,
    name: "Mrs. Zara",
    species: "Panthera uncia",
    commonName: "Snow Leopard",
    imageUrl: "/images/pet1.jpg",
    age: 7,
    gender: "Female",
    conservationStatus: "Endangered",
    description:
      "The Snow Leopard is a majestic and elusive big cat known for its thick fur and powerful build.About Bobo: Bobo is a curious and intelligent gorilla who loves to solve puzzles and spend time with his family group. His playful nature and deep connection with his troop make him a zoo favorite. Western lowland gorillas are critically endangered, and your adoption supports their care, as well as global conservation efforts to protect their rainforest habitats.",
  },
  {
    id: 2,
    name: "Mr. Max",
    species: "Loxodonta africana",
    commonName: "African Elephant",
    imageUrl: "/images/pet2.jpg",
    age: 12,
    gender: "Male",
    conservationStatus: "Vulnerable",
    description:
      "The African Elephant is the largest land animal, revered for its intelligence and memory.",
  },
  // Add details for other animals
];

const PetDetail = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  const router = useRouter();

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  // Find the animal by ID
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-gray-700">Animal not found</h1>
        <button
          className="mt-4 px-4 py-2 bg-[#7b6fb1] text-white rounded hover:bg-[#504394]"
          onClick={() => router.push("/")}
        >
          Back to Adoption
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#f4f2fa] via-white to-[#eae6f8] w-full min-h-screen py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Text */}
          <div className="md:w-1/2 pr-20">
            <h1 className="text-4xl font-bold text-[#7b6fb1] mb-4">
              {animal.name}
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Species:</strong> {animal.species}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Common Name:</strong> {animal.commonName}
            </p>
            <div className="flex gap-6 mb-10 mt-10">
              <div className="text-center flex flex-col items-center">
                <FaPaw className="text-2xl text-[#504394]" /> {/* Age Icon */}
                <p className="text-xl font-bold text-[#504394]">
                  {animal.age} Years Old
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <FaMars className="text-2xl text-[#504394]" />{" "}
                {/* Gender Icon */}
                <p className="text-xl font-bold text-[#504394]">
                  {animal.gender}
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <FaTree className="text-2xl text-[#504394]" />{" "}
                {/* Status Icon */}
                <p className="text-xl font-bold text-[#504394]">
                  {animal.conservationStatus}
                </p>
              </div>
            </div>
            <p className="text-[#7b6fb1] text-xl mb-4 leading-relaxed tracking-wide">
              {animal.description}
            </p>
            <div className="flex gap-4 mt-10">
              <button className="px-4 py-2 bg-[#7b6fb1] text-white rounded hover:bg-[#504394]">
                Adopt Now!
              </button>
              <div className="relative">
                {/* Button to toggle options */}
                <button
                  className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
                  onClick={toggleOptions}
                >
                  Choose Options
                </button>

                {/* Dropdown options */}
                {isOptionsVisible && (
                  <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <ul className="text-gray-700 text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Food for 3 Months
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Enclosure Maintenance
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Donation to Wildlife Conservation
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex justify-center h-full">
            <Image
              src={animal.imageUrl}
              alt={animal.commonName}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PetDetail;

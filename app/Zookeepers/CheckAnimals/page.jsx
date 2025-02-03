"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const CheckAnimals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [image, setImage] = useState(null);

  // State to track checkbox and mood for each animal
  const [animalUpdates, setAnimalUpdates] = useState({
    1: { fed: { Lunch: false, Snack: false, Dinner: false }, mood: "" },
    2: { fed: { Lunch: false, Snack: false, Dinner: false }, mood: "" },
  });

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
      id: 2,
      species: "Loxodonta africana",
      commonName: "African Elephant",
      name: "Tusker",
      description:
        "The largest land animal, known for its large ears and long tusks, found in Africa.",
      gender: "Male",
      age: 10,
      birthdate: "2013-11-20",
      adoptionStatus: "No Adoptive Owner",
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
  ];

  const handleAnimalLatest = (animalId) => {
    const animal = adoptedAnimals.find((a) => a.id === animalId);
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = (animalId, meal) => {
    setAnimalUpdates((prevUpdates) => ({
      ...prevUpdates,
      [animalId]: {
        ...prevUpdates[animalId],
        fed: {
          ...prevUpdates[animalId].fed,
          [meal]: !prevUpdates[animalId].fed[meal],
        },
      },
    }));
  };

  const handleMoodChange = (animalId, mood) => {
    setAnimalUpdates((prevUpdates) => ({
      ...prevUpdates,
      [animalId]: {
        ...prevUpdates[animalId],
        mood: mood,
      },
    }));
  };

  const handleSaveChanges = () => {
    Swal.fire({
      icon: "success",
      title: "Animal Details Updated Successfully!",
      showConfirmButton: true, // This enables the confirm button
      confirmButtonText: "OK", // You can customize the text of the button
    });
    // Additional logic to save changes can be added here (e.g., API call)
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#7b6fb1]">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Thank You for Giving Them A Brighter Future!
          </h1>
          <p className="text-lg leading-relaxed text-center">
            At AdoptAZooPal , we believe in connecting our adopters with the
            animals they support. Whether here to meet your adopted animal up
            close, take a behind-the-scenes tour, or just spend some quality
            time with your new pal, we have made it easy to schedule an
            unforgettable experience.
          </p>
        </div>

        {/* Grid displaying adopted animals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
          {adoptedAnimals.map((animal) => (
            <Link
              href={`/pets/${animal.id}`}
              key={animal.id}
              className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-100 cursor-pointer hover:shadow-xl transition-transform duration-500 transform hover:scale-105"
            >
              {/* "See All Latest" Button */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent the Link navigation
                  handleAnimalLatest(animal.id);
                }}
                className="absolute top-6 right-4 text-sm text-[#7b6fb1] font-semibold underline transition-all duration-300 hover:text-purple-600"
              >
                Update Latest
              </button>

              {/* Card Content */}
              <div className="p-4">
                <h6 className="mb-2 text-[#7b6fb1] text-xl font-semibold">
                  {animal.name}
                </h6>
                <p className="text-slate-600 leading-normal font-light ">
                  {animal.commonName}
                </p>
                <p className="text-slate-600 leading-normal font-light">
                  {animal.conservationStatus}
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
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedAnimal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-3xl w-full relative shadow-lg">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              >
                &times;
              </button>

              {/* Header */}
              <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Give some updates on your animal!
              </h3>

              {/* Content Layout */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Column: Image Placeholder */}
                <div className="sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0 bg-gray-100 rounded-lg p-6">
                  <Image
                    src={
                      image ||
                      selectedAnimal.imageUrl ||
                      "/placeholder-image.png"
                    }
                    alt={`${selectedAnimal.commonName}'s latest photo`}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>

                {/* Right Column: Details */}
                <div className="md:w-1/2 w-full">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700">
                    Has {selectedAnimal.name} been fed today?
                  </h4>
                  <ul className="space-y-2">
                    {["Lunch", "Snack", "Dinner"].map((meal) => (
                      <li key={meal} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={animalUpdates[selectedAnimal.id]?.fed[meal]}
                          onChange={() =>
                            handleCheckboxChange(selectedAnimal.id, meal)
                          }
                          className="w-5 h-5"
                        />
                        <span className="text-gray-700">{meal}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mood Input */}
                  <h4 className="text-lg font-semibold mt-5 mb-2 text-gray-700">
                    {selectedAnimal.name}&#39;s Mood Today
                  </h4>
                  <input
                    type="text"
                    value={animalUpdates[selectedAnimal.id]?.mood || ""}
                    onChange={(e) =>
                      handleMoodChange(selectedAnimal.id, e.target.value)
                    }
                    placeholder="Type in what they seem to be feeling today."
                    className="w-full p-3 rounded-lg border border-gray-300  text-gray-700"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {/* Button to trigger File Input */}
                <button
                  onClick={() => document.getElementById("fileInput").click()} // Triggers hidden input
                  className="bg-[#7b6fb1] text-white px-6 py-2 rounded-lg hover:bg-indigo-500"
                >
                  Upload new Photo
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckAnimals;

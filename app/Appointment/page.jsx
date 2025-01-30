"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAnimalSelect = (animal) => setSelectedAnimal(animal);
  const handleDateChange = (newDate) => setSelectedDate(newDate);

  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const animals = [
    {
      id: 1,
      species: "Panthera uncia",
      commonName: "Snow Leopard",
      imageUrl: "/images/pet1.jpg",
    },
    {
      id: 2,
      species: "Loxodonta africana",
      commonName: "African Elephant",
      imageUrl: "/images/pet2.jpg",
    },
    {
      id: 3,
      species: "Ailurus fulgens",
      commonName: "Red Panda",
      imageUrl: "/images/pet3.jpg",
    },
    {
      id: 4,
      species: "Panthera tigris",
      commonName: "Bengal Tiger",
      imageUrl: "/images/pet4.jpg",
    },
    {
      id: 5,
      species: "Panthera leo",
      commonName: "Lion",
      imageUrl: "/images/pet5.jpg",
    },
    {
      id: 6,
      species: "Elephas maximus",
      commonName: "Asian Elephant",
      imageUrl: "/images/pet6.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden bg-[#f4f2fa]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#7b6fb1]">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Meet Your Adopted Pal!
          </h1>
          <p className="text-lg leading-relaxed mb-10 text-left">
            At AdoptAZooPal.com, we believe in connecting our adopters with the
            animals they support. Whether here to meet your adopted animal up
            close, take a behind-the-scenes tour, or just spend some quality
            time with your new pal, we’ve made it easy to schedule an
            unforgettable experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Why Book an Appointment?
              </h2>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  Exclusive Meet & Greets: Spend quality time with your adopted
                  animal and chat with our zookeepers.
                </li>
                <li>
                  Behind-the-Scenes Tours: Go behind the scenes to learn about
                  your animal’s care and habitat.
                </li>
                <li>
                  Enrichment Activities: Watch or participate in feeding,
                  training, and other fun activities.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Your Appointment Includes:
              </h2>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  Personal Animal Time: Depending on the animal, you might get
                  to feed, touch, or observe them up close.
                </li>
                <li>
                  Zookeeper Insight: Learn fun facts and get answers to your
                  questions from our expert zookeepers.
                </li>
                <li>
                  Photo Opportunities: Capture special moments with your animal
                  friend!
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-right">
            <button
              className="px-8 py-4 bg-[#7b6fb1] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90"
              onClick={openModal}
            >
              Let’s meet’em!!
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Schedule an Appointment
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-800 transition"
                >
                  ✖
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-4 py-4 rounded-full text-center">
                    Choose A Pal
                  </h3>
                  <div className="h-60 overflow-y-auto">
                    {" "}
                    <div className="grid grid-cols-1 gap-4">
                      {animals.map((animal) => (
                        <button
                          key={animal.id}
                          className={`flex items-center gap-4 p-3 border rounded-lg transition ${
                            selectedAnimal === animal.commonName
                              ? "border-[#7b6fb1] bg-[#f4f2fa] text-[#7b6fb1]"
                              : "border-gray-300 text-gray-700 hover:border-[#7b6fb1]"
                          }`}
                          onClick={() => setSelectedAnimal(animal.commonName)}
                        >
                          <Image
                            src={animal.imageUrl}
                            alt={animal.commonName}
                            width={80} // 12 * 4 for responsiveness (can adjust as needed)
                            height={80} // 12 * 4 for responsiveness (can adjust as needed)
                            className="rounded-md"
                          />
                          <span>{animal.commonName}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-4 py-4 rounded-full text-center">
                    Pick A Date
                  </h3>
                  <Calendar value={selectedDate} onChange={handleDateChange} />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  className="px-5 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 text-white bg-[#7b6fb1] rounded-lg hover:bg-[#6a5fb1] transition"
                  onClick={() => {
                    if (selectedAnimal && selectedDate) {
                      alert(
                        `Animal: ${selectedAnimal}\nDate: ${formattedDate}`
                      );
                      closeModal();
                    } else {
                      alert("Please select an animal and a date.");
                    }
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Appointment;

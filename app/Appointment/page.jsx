"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaDog, FaCat, FaHorse, FaFish, FaArrowDown } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-[600px]">
              {/* Header */}
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

              {/* Modal Content - Two Columns */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column: Animal Selection */}
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-4 py-2 rounded-md text-center">
                    Choose A Pal
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "Dog", icon: FaDog },
                      { name: "Cat", icon: FaCat },
                      { name: "Horse", icon: FaHorse },
                      { name: "Fish", icon: FaFish },
                    ].map(({ name, icon: Icon }) => (
                      <button
                        key={name}
                        className={`flex flex-col items-center justify-center p-3 border rounded-lg transition ${
                          selectedAnimal === name
                            ? "border-[#7b6fb1] bg-[#f4f2fa] text-[#7b6fb1]"
                            : "border-gray-300 text-gray-700 hover:border-[#7b6fb1]"
                        }`}
                        onClick={() => setSelectedAnimal(name)}
                      >
                        <div className="flex gap-5">
                          <Icon size={32} />
                          <span className="mt-2">{name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column: Date Selection */}
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-4 py-2 rounded-md text-center">
                    Pick A Date
                  </h3>
                  {/* <input
                    type="date"
                    className="w-full p-3 border rounded-lg text-gray-700 bg-gray-100 outline-none focus:border-[#7b6fb1]"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  /> */}
                  <Calendar value={selectedDate} onChange={handleDateChange} />
                </div>
              </div>

              {/* Modal Footer */}
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
                  Confirm
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

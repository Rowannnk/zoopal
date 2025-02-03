"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [user, setUser] = useState(null);

  const closeModal = () => setIsModalOpen(false);

  const handleAnimalSelect = (animal) => setSelectedAnimal(animal);
  const handleDateChange = (newDate) => setSelectedDate(newDate);
  const handleTimeChange = (event) => setSelectedTime(event.target.value);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);
  const openModal = () => {
    if (user.role !== "user") {
      swal("Oops!", "You cannot make appoinemnt.You are not user!", "warning");
    } else {
      setIsModalOpen(true);
    }
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

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
      adoptionStatus: "No Adoptive Owner",
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

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] ">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#7b6fb1]">
          <motion.h1
            className="text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Your Pal !
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed mb-10 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            At AdoptAZooPal.com, we believe in connecting our adopters with the
            animals they support. Whether here to meet your adopted animal up
            close, take a behind-the-scenes tour, or just spend some quality
            time with your new pal, weve made it easy to schedule an
            unforgettable experience.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
              <motion.h2
                className="text-xl font-semibold mb-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {" "}
                Why Book an Appointment?
              </motion.h2>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  Exclusive Meet & Greets: Spend quality time with your adopted
                  animal and chat with our zookeepers.
                </li>
                <li>
                  Behind-the-Scenes Tours: Go behind the scenes to learn about
                  your animals care and habitat.
                </li>
                <li>
                  Enrichment Activities: Watch or participate in feeding,
                  training, and other fun activities.
                </li>
              </ul>
            </div>
            <div>
              <motion.h2
                className="text-xl font-semibold mb-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {" "}
                Your Appointment Includes:
              </motion.h2>
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
            <motion.button
              className="px-8 py-4 bg-[#7b6fb1] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90"
              onClick={openModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {"Let's meet'em!!"}
            </motion.button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-[800px]">
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
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-1 py-3 rounded-full text-center">
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
                            width={50}
                            height={40}
                            className="rounded-md"
                          />
                          <span>{animal.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-1 py-3 rounded-full text-center">
                    Pick A Date
                  </h3>
                  <Calendar value={selectedDate} onChange={handleDateChange} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white bg-[#7b6fb1] px-1 py-3 rounded-full text-center">
                    Choose A Time
                  </h3>
                  <select
                    className="w-full p-3 border rounded-lg text-gray-700"
                    value={selectedTime}
                    onChange={handleTimeChange}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
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
                      Swal.fire({
                        title: "Appointment Confirmed!",
                        text: `You have booked an appointment with ${selectedAnimal} on ${formattedDate} at ${selectedTime}.`,
                        icon: "success",
                        confirmButtonColor: "#7b6fb1",
                      });
                      closeModal();
                    } else {
                      Swal.fire({
                        title: "Missing Information",
                        text: "Please select an animal and a date before booking.",
                        icon: "warning",
                        confirmButtonColor: "#7b6fb1",
                      });
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

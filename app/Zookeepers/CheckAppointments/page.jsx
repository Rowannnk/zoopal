"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function CheckAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-02-01",
      time: "10:00 AM",
      commonName: "Snow Leopard",
      name: "Snowy",
      status: "Confirmed",
      type: "today",
      photoUrl: "/images/snow_leopard.jpg",
      adoptiveOwner: "John Doe",
    },
    {
      id: 2,
      date: "2025-02-03",
      time: "2:00 PM",
      commonName: "Red Panda",
      name: "Mr Panda",

      status: "Pending",
      type: "upcoming",
      photoUrl: "/images/red_panda.jpg",
      adoptiveOwner: "Jane Smith",
    },
    {
      id: 3,
      date: "2025-02-03",
      time: "1:30 PM",
      commonName: "Bengal Tiger",
      name: "Mr Tiger",
      status: "Confirmed",
      type: "upcoming",
      photoUrl: "/images/bengal_tiger.jpg",
      adoptiveOwner: "Sam Wilson",
    },
  ]);

  const [activeTab, setActiveTab] = useState("today");
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMarkAs = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
    setDropdownOpen(null);
  };

  const handleOptionSelect = (option) => {
    console.log(option);
  };

  const filteredAppointments = appointments.filter(
    (appt) => appt.type === activeTab
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] py-10 px-10">
        <h1 className="text-4xl font-bold text-center text-[#7b6fb1] mb-6">
          Appointments {"-"} Animals in Your Care
        </h1>

        <div className="flex justify-center text-lg font-semibold space-x-6">
          {["today", "upcoming"].map((tab) => (
            <div key={tab} className="text-center">
              <p className="capitalize">{tab}</p>
              <span className="text-2xl font-bold">
                {appointments.filter((appt) => appt.type === tab).length}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 border-b-2 border-gray-200 ">
          {["today", "upcoming"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 capitalize ${
                activeTab === tab
                  ? "border-b-4 border-[#7b6fb1]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative"
            >
              <Image
                src={appointment.photoUrl}
                alt={appointment.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7b6fb1]">
                  {appointment.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {appointment.date} at {appointment.time}
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  Adoptive Owner: {appointment.adoptiveOwner}{" "}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {["Done", "Didn't Show Up"].map((status) => (
                      <span
                        key={status}
                        className={`px-3 py-1 rounded-full text-white ${
                          appointment.status === status
                            ? status === "Done"
                              ? "bg-green-300 text-green-700"
                              : "bg-red-300 text-red-700"
                            : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {status}
                      </span>
                    ))}
                  </div>

                  {/* Right: Mark as button */}
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-[#7b6fb1] rounded-full"
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === appointment.id
                            ? null
                            : appointment.id
                        )
                      }
                    >
                      Mark as
                    </button>

                    {dropdownOpen === appointment.id && (
                      <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                        <ul className="text-gray-700 text-sm">
                          {["Done", "Didn't Show Up"].map((option) => (
                            <li
                              key={option}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                handleOptionSelect(option);
                                handleMarkAs(appointment.id, option);
                              }}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

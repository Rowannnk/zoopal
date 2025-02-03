"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function AppointmentCard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "Feb 10, 2025",
      time: "10:00 AM",
      commonName: "Snow Leopard",
      name: "Mr Snowy",
      status: "Done",
      imageUrl: "/images/snow_leopard.jpg",
    },
    {
      id: 2,
      date: "Mar 5, 2025",
      time: "2:00 PM",
      commonName: "Red Panda",
      name: "Mrs Panda",
      status: "Did not show up",
      imageUrl: "/images/red_panda.jpg",
    },
    {
      id: 3,
      date: "Apr 20, 2025",
      time: "1:30 PM",
      commonName: "Bengal Tiger",
      name: "Mr Berlin",
      status: "Upcoming",
      imageUrl: "/images/bengal_tiger.jpg",
    },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedTime, setUpdatedTime] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleUpdateAppointment = (appointmentId) => {
    const appointmentToUpdate = appointments.find(
      (appt) => appt.id === appointmentId
    );

    if (!appointmentToUpdate) return;

    if (
      appointmentToUpdate.status === "Done" ||
      appointmentToUpdate.status === "Did not show up"
    ) {
      Swal.fire({
        icon: "error",
        title: "Cannot Update",
        text: `Appointments marked as '${appointmentToUpdate.status}' cannot be updated.`,
        confirmButtonColor: "#7b6fb1",
      });
      return;
    }

    setSelectedAppointment(appointmentToUpdate);
    setUpdatedDate(appointmentToUpdate.date);
    setUpdatedTime(appointmentToUpdate.time);
    setShowUpdateModal(true);
  };
  const handleCancelAppointment = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appt) => appt.id !== appointmentId)
    );
  };

  const handleSaveChanges = () => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appt) =>
        appt.id === selectedAppointment.id
          ? { ...appt, date: updatedDate, time: updatedTime }
          : appt
      )
    );
    setShowUpdateModal(false);
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#7b6fb1]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            Get Ready To Meet Your Pals!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed mb-10 text-center"
          >
            At AdoptAZooPal.com, we believe in connecting our adopters with the
            animals they support. Whether here to meet your adopted animal up
            close, take a behind-the-scenes tour, or just spend some quality
            time with your new pal, we have made it easy to schedule an
            unforgettable experience.
          </motion.p>
        </div>

        {/* Appointment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 mx-20">
          {appointments.map((appointment) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={appointment.id}
              className="w-full max-w-[500px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mx-auto"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                    <Image
                      src={appointment.imageUrl}
                      alt={appointment.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {appointment.name}
                    </h4>
                    <p className="text-md text-[#7b6fb1] text-bold">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-md text-gray-600">
                  Status:{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      appointment.status === "Done"
                        ? "bg-green-200 text-green-800"
                        : appointment.status === "Did not show up"
                        ? "bg-red-200 text-red-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-md text-gray-500">
                    Get ready for a wild experience!
                  </span>
                  <span role="img" aria-label="paw">
                    🐾
                  </span>
                </div>
              </div>

              <div className="flex justify-between p-4 border-t border-gray-200">
                <button
                  className="px-4 py-2 text-md font-medium text-[#7b6fb1] hover:bg-purple-50 rounded-lg"
                  onClick={() => handleUpdateAppointment(appointment.id)}
                >
                  Update
                </button>
                <button
                  className="px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-100 rounded-lg"
                  onClick={() => handleCancelAppointment(appointment.id)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Update Modal */}
        {showUpdateModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Update Appointment
              </h2>
              <label className="block text-sm font-medium text-gray-700">
                Date:
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                value={updatedDate}
                onChange={(e) => setUpdatedDate(e.target.value)}
              />
              <label className="block text-sm font-medium text-gray-700 mt-2">
                Time:
              </label>
              <input
                type="time"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                value={updatedTime}
                onChange={(e) => setUpdatedTime(e.target.value)}
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-lg"
                  onClick={() => setShowUpdateModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-[#7b6fb1] hover:bg-purple-500 rounded-lg"
                  onClick={handleSaveChanges}
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
}

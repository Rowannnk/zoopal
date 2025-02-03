"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const AppointmentList = [
  {
    id: 1,
    username: "Ava",
    animalname: "Deer",
    madeOn: "2025-01-15",
    appointmentDate: "2025-01-20T09:30:00Z",
    status: "Done",
  },
  {
    id: 2,
    username: "Max",
    animalname: "Tiger",
    madeOn: "2025-01-16",
    appointmentDate: "2025-01-21T11:00:00Z",
    status: "Didn't Show Up",
  },
  {
    id: 3,
    username: "Winnie",
    animalname: "Bear",
    madeOn: "2025-01-18",
    appointmentDate: "2025-01-22T08:45:00Z",
    status: "UpComing",
  },
  {
    id: 4,
    username: "Cappy",
    animalname: "Capybara",
    madeOn: "2025-01-17",
    appointmentDate: "2025-01-23T10:00:00Z",
    status: "Done",
  },
  {
    id: 5,
    username: "Mimi",
    animalname: "Capybara",
    madeOn: "2025-01-19",
    appointmentDate: "2025-01-24T12:30:00Z",
    status: "Didn't Show Up",
  },
  {
    id: 6,
    username: "Ava",
    animalname: "Rabbit",
    madeOn: "2025-01-14",
    appointmentDate: "2025-01-25T10:00:00Z",
    status: "UpComing",
  },
  {
    id: 7,
    username: "Max",
    animalname: "Lion",
    madeOn: "2025-01-12",
    appointmentDate: "2025-01-26T11:30:00Z",
    status: "Done",
  },
  {
    id: 8,
    username: "Winnie",
    animalname: "Wolf",
    madeOn: "2025-01-20",
    appointmentDate: "2025-01-27T13:00:00Z",
    status: "Didn't Show Up",
  },
  {
    id: 9,
    username: "Cappy",
    animalname: "Otter",
    madeOn: "2025-01-21",
    appointmentDate: "2025-01-28T14:00:00Z",
    status: "Done",
  },
  {
    id: 10,
    username: "Mimi",
    animalname: "Guinea Pig",
    madeOn: "2025-01-13",
    appointmentDate: "2025-01-29T09:00:00Z",
    status: "UpComing",
  },
];

export default function Appointments() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 10;

  const filteredAppointments = AppointmentList.filter((appointment) =>
    appointment.animalname.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );
  const totalPages = Math.ceil(
    filteredAppointments.length / appointmentsPerPage
  );

  return (
    <>
      <Navbar />
      <div className="w-full p-8 bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Appointments</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-2 border rounded-lg outline-none"
            />
            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-[#cecde1]">
                <th className="p-4 text-left w-1/2">Username</th>
                <th className="p-4 text-left w-1/6">Animal Name</th>
                <th className="p-4 text-left w-1/6">Made On</th>
                <th className="p-4 text-left w-1/6">Appointment Date</th>
                <th className="p-4 text-left w-1/6">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-t">
                  <td className="p-4 flex items-center gap-2">
                    <span className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                      👤
                    </span>
                    {appointment.username}
                  </td>
                  <td className="p-4">{appointment.animalname}</td>
                  <td className="p-4">
                    {new Date(appointment.madeOn).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="p-4">
                    {new Date(appointment.appointmentDate).toLocaleString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                      }
                    )}
                  </td>
                  <td className="p-2">
                    <span
                      className={`${
                        appointment.status === "Done"
                          ? "bg-green-200"
                          : appointment.status === "Didn't Show Up"
                          ? "bg-red-200"
                          : appointment.status === "UpComing"
                          ? "bg-gray-200"
                          : ""
                      } text-center text-sm px-3 py-1 rounded-full whitespace-nowrap`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-600">
          <button
            className="hover:text-gray-900 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &larr; Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === num
                    ? "bg-[#7b6fb1] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button
            className="hover:text-gray-900 disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

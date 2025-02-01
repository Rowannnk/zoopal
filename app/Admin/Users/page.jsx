"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const users = Array.from({ length: 30 }, (_, i) => ({
  name: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
  phone: `085-945-${100 + i}`,
}));

const adoptedAnimals = [
  { name: "Ava the Deer", image: "/images/pet6.jpg", type: "Food" },
  {
    name: "Max the Tiger",
    image: "/images/pet2.jpg",
    type: "Enclosure Maintenance",
  },
  {
    name: "Winnie the Bear",
    image: "/images/pet3.jpg",
    type: "Donation to Organizations",
  },
  { name: "Cappy the Capybara", image: "/images/pet4.jpg", type: "Food" },
  {
    name: "Mimi the Capybara",
    image: "/images/pet5.jpg",
    type: "Enclosure Maintenance",
  },
];

export default function UserList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(2);
  const usersPerPage = 10;
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterType, setFilterType] = useState("All");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const filteredAnimals = adoptedAnimals.filter((animal) => {
    if (filterType === "All") return true;
    return animal.type === filterType;
  });

  return (
    <>
      <Navbar />
      <div className="w-full p-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-60 p-2 pl-10 border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-[#cecde1]">
                <th className="p-2 text-left w-1/2">Name</th>
                <th className="p-2 text-left w-1/6">Email</th>
                <th className="p-2 text-left w-1/6">Phone</th>
                <th className="p-2 text-left w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 flex items-center gap-2">
                    <span className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                      👤
                    </span>
                    {user.name}
                  </td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phone}</td>
                  <td className="p-2">
                    <button
                      className="text-black hover:bg-[#cecde1] px-4 py-2 rounded-full"
                      onClick={() => setSelectedUser(user)}
                    >
                      View adopted list
                    </button>
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
                    ? "bg-purple-200 text-purple-800"
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

      {selectedUser && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#cbcbe2] p-8 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold mx-auto">
                Animals Adopted by {selectedUser.name}
              </h3>
              <button onClick={() => setSelectedUser(null)} className="text-xl">
                ✖
              </button>
            </div>

            {/* Filter Dropdown for Animal Types */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-700">
                Adoption Type:
              </span>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-purple-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors"
              >
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Enclosure Maintenance">
                  Enclosure Maintenance
                </option>
                <option value="Donation to Organizations">
                  Donation to Organizations
                </option>
              </select>
            </div>

            {/* Display Filtered Animals */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredAnimals.map((animal, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-xl flex flex-col items-center"
                >
                  <Image
                    width={300}
                    height={176}
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-44 object-cover rounded"
                  />
                  <span className="font-semibold text-center mt-2">
                    {animal.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

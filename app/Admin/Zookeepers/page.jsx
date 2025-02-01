"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const zookeeperList = [
  {
    id: 123,
    name: "Ava",
    email: "ava@example.com",
    phone: "123-456-7890",
    adoptedAnimals: [
      { name: "Deer", image: "/images/pet2.jpg" },
      { name: "Rabbit", image: "/images/pet3.jpg" },
    ],
  },
  {
    id: 345,
    name: "Max",
    email: "max@example.com",
    phone: "234-567-8901",
    adoptedAnimals: [
      { name: "Tiger", image: "/images/pet4.jpg" },
      { name: "Lion", image: "/images/pet5.jpg" },
    ],
  },
  {
    id: 567,
    name: "Winnie",
    email: "winnie@example.com",
    phone: "345-678-9012",
    adoptedAnimals: [
      { name: "Bear", image: "/images/pet6.jpg" },
      { name: "Wolf", image: "/images/pet2.jpg" },
    ],
  },
  {
    id: 487,
    name: "Cappy",
    email: "cappy@example.com",
    phone: "456-789-0123",
    adoptedAnimals: [
      { name: "Capybara", image: "/images/pet3.jpg" },
      { name: "Otter", image: "/images/pet4.jpg" },
    ],
  },
  {
    id: 789,
    name: "Mimi",
    email: "mimi@example.com",
    phone: "567-890-1234",
    adoptedAnimals: [
      { name: "Capybara", image: "/images/pet5.jpg" },
      { name: "Guinea Pig", image: "/images/pet6.jpg" },
    ],
  },
];

export default function ZookeepersList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const zookeepersPerPage = 10;
  const [selectedZookeeper, setSelectedZookeeper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newZookeeper, setNewZookeeper] = useState({
    name: "",
    email: "",
    phone: "",
    password: "", // Add password field
    adoptedAnimals: [],
  });

  const filteredZookeepers = zookeeperList.filter((zookeeper) =>
    zookeeper.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastZookeeper = currentPage * zookeepersPerPage;
  const indexOfFirstZookeeper = indexOfLastZookeeper - zookeepersPerPage;
  const currentZookeepers = filteredZookeepers.slice(
    indexOfFirstZookeeper,
    indexOfLastZookeeper
  );
  const totalPages = Math.ceil(filteredZookeepers.length / zookeepersPerPage);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = zookeeperList.length
      ? zookeeperList[zookeeperList.length - 1].id + 1
      : 1;
    const newZookeeperWithId = { ...newZookeeper, id: newId };
    zookeeperList.push(newZookeeperWithId);
    closeModal();
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Zookeepers</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => openModal()}
              className="bg-purple-200 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-400"
            >
              + Add New Zookeeper
            </button>
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
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-[#cecde1]">
                <th className="p-2 text-left w-1/3">Name</th>
                <th className="p-2 text-left w-1/6">Email</th>
                <th className="p-2 text-left w-1/6">Phone</th>
                <th className="p-2 text-left w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentZookeepers.map((zookeeper) => (
                <tr key={zookeeper.id} className="border-t">
                  <td className="p-2 flex items-center gap-2">
                    <span className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                      👤
                    </span>
                    {zookeeper.name}
                  </td>
                  <td className="p-2">{zookeeper.email}</td>
                  <td className="p-2 ">{zookeeper.phone}</td>
                  <td className="p-2 ">
                    <button
                      className="text-black hover:bg-[#cecde1] px-4 py-2 rounded-full"
                      onClick={() => setSelectedZookeeper(zookeeper)}
                    >
                      View adopted animals
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

      {selectedZookeeper && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#cbcbe2] p-8 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold mx-auto">
                Animals Adopted by {selectedZookeeper.name}
              </h3>
              <button
                onClick={() => setSelectedZookeeper(null)}
                className="text-xl"
              >
                ✖
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedZookeeper.adoptedAnimals.map((animal, index) => (
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

      {/* Modal to add new zookeeper */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-200 h-[400px]">
            <h3 className="text-xl font-semibold mb-4">Add New Zookeeper</h3>
            <form onSubmit={handleSubmit}>
              {/* Two input fields side by side: Name and Email */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newZookeeper.name}
                    onChange={(e) =>
                      setNewZookeeper({ ...newZookeeper, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={newZookeeper.email}
                    onChange={(e) =>
                      setNewZookeeper({
                        ...newZookeeper,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>

              {/* Single input for Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={newZookeeper.phone}
                  onChange={(e) =>
                    setNewZookeeper({ ...newZookeeper, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={newZookeeper.password}
                  onChange={(e) =>
                    setNewZookeeper({
                      ...newZookeeper,
                      password: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-200 text-purple-700 rounded-lg"
                >
                  Add Zookeeper
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

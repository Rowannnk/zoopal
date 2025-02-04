"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";

const initialAnimals = [
  {
    id: 1,
    name: "Ava",
    commonName: "Deer",
    age: 2,
    gender: "Female",
    assignedZooKeeper: "John Doe",
    birthdate: "2022-02-15",
    status: "Moderately Concerned",
  },
  {
    id: 2,
    name: "Leo",
    commonName: "Lion",
    age: 5,
    gender: "Male",
    assignedZooKeeper: "Jane Smith",
    birthdate: "2018-06-01",
    status: "Endangered",
  },
  {
    id: 3,
    name: "Bella",
    commonName: "Elephant",
    age: 10,
    gender: "Female",
    assignedZooKeeper: "Alice Johnson",
    birthdate: "2013-11-10",
    status: "Endangered",
  },
  {
    id: 4,
    name: "Charlie",
    commonName: "Wolf",
    age: 4,
    gender: "Male",
    assignedZooKeeper: "Bob Brown",
    birthdate: "2019-03-20",
    status: "Moderately Concerned",
  },
  {
    id: 5,
    name: "Milo",
    commonName: "Tiger",
    age: 3,
    gender: "Male",
    assignedZooKeeper: "Sara Davis",
    birthdate: "2021-07-15",
    status: "Endangered",
  },
  {
    id: 6,
    name: "Luna",
    commonName: "Panda",
    age: 6,
    gender: "Female",
    assignedZooKeeper: "Mike Wilson",
    birthdate: "2017-12-25",
    status: "Endangered",
  },
  {
    id: 7,
    name: "Max",
    commonName: "Giraffe",
    age: 7,
    gender: "Male",
    assignedZooKeeper: "Emma Clark",
    birthdate: "2016-04-10",
    status: "Moderately Concerned",
  },
  {
    id: 8,
    name: "Zara",
    commonName: "Zebra",
    age: 4,
    gender: "Female",
    assignedZooKeeper: "David Lee",
    birthdate: "2019-08-18",
    status: "Least Concerned",
  },
  {
    id: 9,
    name: "Oliver",
    commonName: "Kangaroo",
    age: 8,
    gender: "Male",
    assignedZooKeeper: "Chris Martin",
    birthdate: "2015-03-05",
    status: "Least Concerned",
  },
  {
    id: 10,
    name: "Ella",
    commonName: "Koala",
    age: 5,
    gender: "Female",
    assignedZooKeeper: "Natalie Walker",
    birthdate: "2018-10-20",
    status: "Endangered",
  },
  {
    id: 11,
    name: "Rocky",
    commonName: "Raccoon",
    age: 3,
    gender: "Male",
    assignedZooKeeper: "Frank Harris",
    birthdate: "2020-09-12",
    status: "Least Concerned",
  },
  {
    id: 12,
    name: "Nala",
    commonName: "Cheetah",
    age: 4,
    gender: "Female",
    assignedZooKeeper: "Grace Evans",
    birthdate: "2019-05-30",
    status: "Endangered",
  },
  {
    id: 13,
    name: "Sasha",
    commonName: "Leopard",
    age: 6,
    gender: "Female",
    assignedZooKeeper: "Olivia Scott",
    birthdate: "2017-02-11",
    status: "Moderately Concerned",
  },
  {
    id: 14,
    name: "Jack",
    commonName: "Polar Bear",
    age: 9,
    gender: "Male",
    assignedZooKeeper: "Lucas Young",
    birthdate: "2014-08-25",
    status: "Endangered",
  },
  {
    id: 15,
    name: "Daisy",
    commonName: "Sloth",
    age: 12,
    gender: "Female",
    assignedZooKeeper: "Ethan King",
    birthdate: "2011-01-19",
    status: "Least Concerned",
  },
];

const PAGE_SIZE = 10;

const AnimalsList = () => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [image, setImage] = useState(null);

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    commonName: "",
    species: "",
    age: "",
    gender: "",
  });

  const [customNames, setCustomNames] = useState([
    "Deer",
    "Lion",
    "Elephant",
    "Wolf",
    "Tiger",
    "Panda",
  ]);
  const [newCommonName, setNewCommonName] = useState("");

  const addNewCommonName = () => {
    if (newCommonName && !customNames.includes(newCommonName)) {
      setCustomNames([...customNames, newCommonName]);
      setFormData({ ...formData, commonName: newCommonName });
      setNewCommonName("");
      setShowNameModal(false);
    }
  };

  const openModal = (animal = null) => {
    setSelectedAnimal(animal);
    setFormData(
      animal
        ? { ...animal }
        : {
            name: "",
            commonName: "",
            species: "",
            age: "",
            gender: "",
            assignedZooKeeper: "",
          }
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    Swal.fire({
      title: selectedAnimal
        ? "Are you sure you want to update this animal?"
        : "Are you sure you want to add this animal?",
      text: selectedAnimal
        ? "Changes will be saved."
        : "The animal will be added to the list.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: selectedAnimal ? "Yes, update it!" : "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (selectedAnimal) {
          setAnimals((prev) =>
            prev.map((a) =>
              a.id === selectedAnimal.id ? { ...formData, id: a.id } : a
            )
          );
        } else {
          setAnimals((prev) => [{ ...formData, id: prev.length + 1 }, ...prev]);
        }
        Swal.fire(
          selectedAnimal ? "Updated!" : "Added!",
          selectedAnimal
            ? "The animal has been updated."
            : "The new animal has been added.",
          "success"
        );
        closeModal();
      }
    });
  };

  const filteredAnimals = animals.filter((animal) =>
    Object.values(animal).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const handleZooKeeperChange = (e) => {
    setFormData({ ...formData, assignedZooKeeper: e.target.value });
  };

  const totalPages = Math.ceil(filteredAnimals.length / PAGE_SIZE);
  const currentAnimals = filteredAnimals.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setAnimals((prev) => prev.filter((animal) => animal.id !== id));
        Swal.fire("Deleted!", "The animal has been deleted.", "success");
      }
    });
  };
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-8 bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Animals</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => openModal()}
              className="bg-[#7b6fb1] text-white px-4 py-2 rounded-lg hover:bg-[#9a89c8]"
            >
              Add a New Animal
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery} // Bind search query
                onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
                className="pl-8 pr-4 py-2 border rounded-lg outline-none"
              />
              <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#cecde1] text-left uppercase text-sm">
                <th className="p-4 w-1/3">Name</th>
                <th className="p-4">Common Name</th>
                <th className="p-4">Assigned Zookeeper</th>

                <th className="p-4">Birthdate</th>
                <th className="p-4">Age</th>
                <th className="p-4">Gender</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentAnimals.map((animal) => (
                <tr
                  key={animal.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      🐾
                    </div>
                    {animal.name}
                  </td>
                  <td className="p-4">{animal.commonName}</td>
                  <td className="p-4">{animal.assignedZooKeeper}</td>

                  <td className="p-4">{animal.birthdate}</td>
                  <td className="p-4">{animal.age}</td>
                  <td className="p-4">{animal.gender}</td>
                  <td>
                    <span
                      className={`py-2 px-4 rounded-full ${
                        animal.status === "Endangered"
                          ? "bg-red-400 text-white"
                          : animal.status === "Moderately Concerned"
                          ? "bg-blue-400 text-white"
                          : animal.status === "Least Concerned"
                          ? "bg-gray-400 text-white"
                          : ""
                      }`}
                    >
                      {animal.status}
                    </span>
                  </td>

                  <td className="p-4 space-x-2">
                    <button
                      onClick={() => openModal(animal)}
                      className="text-gray-600 border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(animal.id)}
                      className="text-red-600 border border-red-300 px-3 py-1 rounded-lg hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-600">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="hover:text-gray-900 disabled:text-gray-400"
          >
            &larr; Previous
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-[#7b6fb1] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="hover:text-gray-900 disabled:text-gray-400"
          >
            Next &rarr;
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 grid grid-cols-2 gap-6">
            {/* Left side with form inputs */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                {selectedAnimal ? "Edit Animal" : "Add Animal"}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full mb-2 p-2 border rounded"
                />
                <div className="flex gap-2 ">
                  <select
                    className="border border-gray-300 rounded-lg p-1 text-sm w-4/5"
                    value={formData.commonName}
                    onChange={(e) =>
                      setFormData({ ...formData, commonName: e.target.value })
                    }
                  >
                    <option value="">Select Common Name</option>
                    {customNames.map((name, index) => (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <button
                    className="bg-[#7b6fb1] text-white p-2 mt-3 rounded-lg text-sm hover:bg-[#9a89c8] h-1/2 flex items-center"
                    onClick={() => setShowNameModal(true)}
                  >
                    <FiPlus />
                  </button>
                </div>
                {showNameModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                      <h2 className="text-lg font-semibold mb-3">
                        Add Common Name
                      </h2>
                      <div className="flex flex-col gap-4">
                        <input
                          type="text"
                          className="border border-gray-300 rounded-lg p-2 w-full"
                          placeholder="Enter new common name"
                          value={newCommonName}
                          onChange={(e) => setNewCommonName(e.target.value)}
                        />
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleDropdownChange}
                          className="mt-1 block w-full p-1 text-sm border border-gray-300 rounded-md"
                        >
                          <option value="">Select Status</option>
                          <option value="Endangered">Endangered</option>
                          <option value="Moderately Concerned">
                            Moderately Concerned
                          </option>
                          <option value="Least Concerned">
                            Least Concerned
                          </option>
                        </select>{" "}
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-400"
                          onClick={() => setShowNameModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-[#7b6fb1] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#9a89c8]"
                          onClick={addNewCommonName}
                        >
                          Add Name
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-1 text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  className="w-full mb-2 p-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 ">
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate ? formData.birthdate : ""}
                  onChange={handleInputChange}
                  placeholder="Birthdate"
                  className="w-full mb-2 p-2 border rounded"
                />
              </div>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full mb-4 p-2 border rounded"
                rows="4"
              />
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="bg-[#7b6fb1] text-white px-4 py-2 rounded-lg hover:bg-[#9a89c8]"
                >
                  {selectedAnimal ? "Edit Animal" : "Add Animal"}
                </button>
                <button
                  onClick={closeModal}
                  className="ml-2 bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Right side with image and zoo keeper */}
            <div className="flex flex-col">
              <div className="w-full h-[240px] bg-gray-200 flex items-center justify-center">
                {/* Display image preview if exists */}
                {image ? (
                  <Image
                    width={400}
                    height={500}
                    src={image}
                    alt="Animal Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <p>Upload Image</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-lg font-medium mb-2 text-[#7b6fb1]">
                  Assign Zoo Keeper
                </label>
                <div className="flex items-center justify-between space-x-4">
                  <input
                    type="text"
                    value={formData.assignedZooKeeper}
                    onChange={handleZooKeeperChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg w-1/2"
                    placeholder="Enter zoo keeper"
                  />
                  <label className="bg-[#7b6fb1] text-white py-2 px-4 rounded-full cursor-pointer hover:bg-[#9a89c8]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    Select Photo
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimalsList;

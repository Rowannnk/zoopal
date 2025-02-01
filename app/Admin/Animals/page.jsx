// "use client";
// import Navbar from "@/app/components/Navbar";
// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";

// const animals = [
//   {
//     id: 1,
//     name: "Ava",
//     commonName: "Deer",
//     species: "Cervidae",
//     age: 2,
//     gender: "Female",
//   },
//   {
//     id: 2,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
//   {
//     id: 3,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
//   {
//     id: 4,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
//   {
//     id: 5,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
//   {
//     id: 6,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
//   {
//     id: 7,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
//   {
//     id: 8,
//     name: "Animal Name",
//     commonName: "Cell Text",
//     species: "Cell Text",
//     age: "Cell Text",
//     gender: "Cell Text",
//   },
// ];

// const PAGE_SIZE = 10;

// const AnimalsList = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(animals.length / PAGE_SIZE);
//   const currentAnimals = animals.slice(
//     (currentPage - 1) * PAGE_SIZE,
//     currentPage * PAGE_SIZE
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="w-full p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-semibold">Animals</h2>
//           <div className="flex items-center gap-2">
//             <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-400">
//               + Add a New Animal
//             </button>
//             <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
//               Delete
//             </button>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-8 pr-4 py-2 border rounded-lg outline-none"
//               />
//               <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-[#cecde1] text-left uppercase text-sm">
//                 <th className="py-3 px-4">Name</th>
//                 <th className="py-3 px-4">Common Name</th>
//                 <th className="py-3 px-4">Species</th>
//                 <th className="py-3 px-4">Age</th>
//                 <th className="py-3 px-4">Gender</th>
//                 <th className="py-3 px-4"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentAnimals.map((animal) => (
//                 <tr
//                   key={animal.id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="py-3 px-4 flex items-center gap-2">
//                     <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                       🐾
//                     </div>
//                     {animal.name}
//                   </td>
//                   <td className="py-3 px-4">{animal.commonName}</td>
//                   <td className="py-3 px-4">{animal.species}</td>
//                   <td className="py-3 px-4">{animal.age}</td>
//                   <td className="py-3 px-4">{animal.gender}</td>
//                   <td className="py-3 px-4">
//                     <button className="text-gray-600 border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100">
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-between items-center mt-4 text-gray-600">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             className="hover:text-gray-900 disabled:text-gray-400"
//           >
//             &larr; Previous
//           </button>
//           <div className="flex gap-2">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-3 py-1 rounded-lg ${
//                   currentPage === index + 1
//                     ? "bg-purple-200 text-purple-800"
//                     : "hover:bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             className="hover:text-gray-900 disabled:text-gray-400"
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AnimalsList;
"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const initialAnimals = [
  {
    id: 1,
    name: "Ava",
    commonName: "Deer",
    species: "Cervidae",
    age: 2,
    gender: "Female",
    assignedZooKeeper: "John Doe",
  },
  {
    id: 2,
    name: "Leo",
    commonName: "Lion",
    species: "Panthera leo",
    age: 5,
    gender: "Male",
    assignedZooKeeper: "Jane Smith",
  },
  {
    id: 3,
    name: "Bella",
    commonName: "Elephant",
    species: "Loxodonta",
    age: 10,
    gender: "Female",
    assignedZooKeeper: "Alice Johnson",
  },
  {
    id: 4,
    name: "Charlie",
    commonName: "Wolf",
    species: "Canis lupus",
    age: 4,
    gender: "Male",
    assignedZooKeeper: "Bob Brown",
  },
  {
    id: 5,
    name: "Milo",
    commonName: "Tiger",
    species: "Panthera tigris",
    age: 3,
    gender: "Male",
    assignedZooKeeper: "Sara Davis",
  },
  {
    id: 6,
    name: "Luna",
    commonName: "Panda",
    species: "Ailuropoda melanoleuca",
    age: 6,
    gender: "Female",
    assignedZooKeeper: "Mike Wilson",
  },
  {
    id: 7,
    name: "Max",
    commonName: "Giraffe",
    species: "Giraffa camelopardalis",
    age: 7,
    gender: "Male",
    assignedZooKeeper: "Emma Clark",
  },
  {
    id: 8,
    name: "Zara",
    commonName: "Zebra",
    species: "Equus zebra",
    age: 4,
    gender: "Female",
    assignedZooKeeper: "David Lee",
  },
  {
    id: 9,
    name: "Oliver",
    commonName: "Kangaroo",
    species: "Macropus rufus",
    age: 8,
    gender: "Male",
    assignedZooKeeper: "Chris Martin",
  },
  {
    id: 10,
    name: "Ella",
    commonName: "Koala",
    species: "Phascolarctos cinereus",
    age: 5,
    gender: "Female",
    assignedZooKeeper: "Natalie Walker",
  },
  {
    id: 11,
    name: "Rocky",
    commonName: "Raccoon",
    species: "Procyon lotor",
    age: 3,
    gender: "Male",
    assignedZooKeeper: "Frank Harris",
  },
  {
    id: 12,
    name: "Nala",
    commonName: "Cheetah",
    species: "Acinonyx jubatus",
    age: 4,
    gender: "Female",
    assignedZooKeeper: "Grace Evans",
  },
  {
    id: 13,
    name: "Sasha",
    commonName: "Leopard",
    species: "Panthera pardus",
    age: 6,
    gender: "Female",
    assignedZooKeeper: "Olivia Scott",
  },
  {
    id: 14,
    name: "Jack",
    commonName: "Polar Bear",
    species: "Ursus maritimus",
    age: 9,
    gender: "Male",
    assignedZooKeeper: "Lucas Young",
  },
  {
    id: 15,
    name: "Daisy",
    commonName: "Sloth",
    species: "Bradypus variegatus",
    age: 12,
    gender: "Female",
    assignedZooKeeper: "Ethan King",
  },
];

const PAGE_SIZE = 10;

const AnimalsList = () => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (selectedAnimal) {
      setAnimals((prev) =>
        prev.map((a) =>
          a.id === selectedAnimal.id ? { ...formData, id: a.id } : a
        )
      );
    } else {
      setAnimals((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
    }
    closeModal();
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
    const confirmed = window.confirm(
      "Are you sure you want to delete this animal?"
    );
    if (confirmed) {
      setAnimals((prev) => prev.filter((animal) => animal.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Animals</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => openModal()}
              className="bg-purple-200 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-400"
            >
              + Add a New Animal
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
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Common Name</th>
                <th className="py-3 px-4">Species</th>
                <th className="py-3 px-4">Age</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {currentAnimals.map((animal) => (
                <tr
                  key={animal.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      🐾
                    </div>
                    {animal.name}
                  </td>
                  <td className="py-3 px-4">{animal.commonName}</td>
                  <td className="py-3 px-4">{animal.species}</td>
                  <td className="py-3 px-4">{animal.age}</td>
                  <td className="py-3 px-4">{animal.gender}</td>
                  <td className="py-3 px-4 space-x-2">
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
                    ? "bg-purple-200 text-purple-800"
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
                <input
                  type="text"
                  name="commonName"
                  value={formData.commonName}
                  onChange={handleInputChange}
                  placeholder="Common Name"
                  className="w-full mb-2 p-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder="Gender"
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  className="w-full mb-2 p-2 border rounded"
                />
              </div>
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
                placeholder="Birthdate"
                className="w-full mb-2 p-2 border rounded"
              />
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
                  className="bg-purple-200 text-black px-4 py-2 rounded-lg"
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
                    width={"100%"}
                    height={"100%"}
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
                  <label className="bg-purple-200 py-2 px-4 rounded-full cursor-pointer">
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

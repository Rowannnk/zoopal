// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { FaCheckCircle, FaEdit } from "react-icons/fa";
// import Navbar from "../components/Navbar";
// import Link from "next/link";

// const Profile = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [selectedAnimal, setSelectedAnimal] = useState(null);

//   const [updatedDate, setUpdatedDate] = useState("");
//   const [updatedTime, setUpdatedTime] = useState("");
//   const [user, setUser] = useState({
//     name: "John Doe",
//     imageUrl: "/images/user.jpg",
//     phone: "0809722960",
//     email: "oppa@gmail.com",
//   });
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       date: "Feb 10, 2025",
//       time: "10:00 AM",
//       animal: "Snow Leopard",
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       date: "Feb 15, 2025",
//       time: "3:00 PM",
//       animal: "African Elephant",
//       status: "Pending",
//     },
//   ]);

//   // Mock User Data
//   const adoptedAnimals = [
//     {
//       id: 1,
//       name: "Mrs. Zara",
//       species: "Snow Leopard",
//       imageUrl: "/images/pet1.jpg",
//     },
//     {
//       id: 2,
//       name: "Mr. Max",
//       species: "African Elephant",
//       imageUrl: "/images/pet2.jpg",
//     },
//   ];

//   const [activeTab, setActiveTab] = useState("appointments");

//   const handleEditClick = () => {
//     setIsModalOpen(true);
//     setSelectedAnimal(null);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSaveChanges = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const updatedUser = {
//       name: formData.get("name"),
//       phone: formData.get("phone"),
//       imageUrl: user.imageUrl, // Image URL update logic can be added here
//     };
//     setUser(updatedUser);
//     setIsModalOpen(false);
//   };

//   // Handle appointment update click
//   const handleUpdateAppointment = (appointmentId) => {
//     const appointmentToUpdate = appointments.find(
//       (appt) => appt.id === appointmentId
//     );
//     setSelectedAppointment(appointmentToUpdate);
//     setUpdatedDate(appointmentToUpdate.date);
//     setUpdatedTime(appointmentToUpdate.time);
//     setShowUpdateModal(true);
//   };

//   // Handle updating the appointment details
//   const handleSaveUpdatedAppointment = () => {
//     const updatedAppointments = appointments.map((appt) =>
//       appt.id === selectedAppointment.id
//         ? { ...appt, date: updatedDate, time: updatedTime }
//         : appt
//     );
//     setAppointments(updatedAppointments);
//     setShowUpdateModal(false);
//   };

//   const handleCancelAppointment = (appointmentId) => {
//     const confirmed = confirm(
//       "Are you sure you want to cancel this appointment?"
//     );
//     if (confirmed) {
//       const updatedAppointments = appointments.filter(
//         (appt) => appt.id !== appointmentId
//       );
//       setAppointments(updatedAppointments);
//       alert("Appointment canceled.");
//     }
//   };
//   const handleAnimalLatest = (animalId) => {
//     const animal = adoptedAnimals.find((a) => a.id === animalId);
//     setSelectedAnimal(animal);
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-[#f4f2fa] py-10 px-4">
//         <div className="max-w-6xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl">
//           {/* Profile Details Section */}
//           <div className="p-6 grid grid-cols-1 gap-6 border-b">
//             {/* Profile Image and Name */}
//             <div className="flex flex-col items-center">
//               <Image
//                 src={user.imageUrl}
//                 alt="User"
//                 width={120}
//                 height={120}
//                 className="rounded-full border-4 border-[#7b6fb1] shadow-md"
//               />
//               <h2 className="mt-2 text-2xl font-bold text-gray-800">
//                 {user.name}
//               </h2>
//             </div>

//             {/* Contact Information */}
//             <div className="flex flex-col justify-center items-center space-y-2">
//               <p className="text-gray-600 font-medium">Phone: {user.phone}</p>
//               <p className="text-gray-600 font-medium">Email: {user.email}</p>
//             </div>

//             {/* Actions */}
//             <div className="flex flex-col items-center">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={handleEditClick}
//                   className="p-3 bg-[#7b6fb1] text-white rounded-lg shadow hover:bg-indigo-700 transition-all flex items-center gap-2"
//                 >
//                   <FaEdit className="text-white" />
//                   Edit Profile
//                 </button>
//                 <div className="bg-indigo-50 p-3 rounded-lg shadow-md">
//                   <p className="text-[#7b6fb1] font-semibold">
//                     Adopted Animals: {adoptedAnimals.length}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Modal */}
//           {isModalOpen && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">
//                   Edit Profile
//                 </h3>
//                 <form onSubmit={handleSaveChanges}>
//                   <div className="grid gap-4">
//                     {/* Image */}
//                     <div className="flex items-center gap-4">
//                       <Image
//                         src={user.imageUrl}
//                         alt="User"
//                         width={50}
//                         height={50}
//                         className="rounded-full border shadow"
//                       />
//                       <button
//                         type="button"
//                         className="text-sm text-[#7b6fb1] hover:underline"
//                       >
//                         Change Image
//                       </button>
//                     </div>
//                     {/* Name */}
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Username"
//                       defaultValue={user.name}
//                       className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#7b6fb1]"
//                     />
//                     {/* Phone */}
//                     <input
//                       type="text"
//                       name="phone"
//                       placeholder="Phone Number"
//                       defaultValue={user.phone}
//                       className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#7b6fb1]"
//                     />
//                   </div>
//                   <div className="flex justify-end gap-4 mt-6">
//                     <button
//                       type="button"
//                       onClick={handleCloseModal}
//                       className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-[#7b6fb1] text-white rounded-lg hover:bg-indigo-700"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}

//           {/* Update Appointment Modal */}
//           {showUpdateModal && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
//                 <h3 className="text-lg font-bold text-gray-800 mb-4">
//                   Update Appointment
//                 </h3>
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     handleSaveUpdatedAppointment();
//                   }}
//                 >
//                   <div className="grid gap-4">
//                     <div>
//                       <label className="block text-sm text-gray-600">
//                         Date
//                       </label>
//                       <input
//                         type="date"
//                         value={updatedDate}
//                         onChange={(e) => setUpdatedDate(e.target.value)}
//                         className="w-full p-2 border rounded-lg"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600">
//                         Time
//                       </label>
//                       <input
//                         type="time"
//                         value={updatedTime}
//                         onChange={(e) => setUpdatedTime(e.target.value)}
//                         className="w-full p-2 border rounded-lg"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-end gap-4 mt-6">
//                     <button
//                       type="button"
//                       onClick={() => setShowUpdateModal(false)}
//                       className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-[#7b6fb1] text-white rounded-lg hover:bg-indigo-700"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}

//           {/* Tab Navigation (Centered) */}
//           <div className="flex justify-center border-b border-gray-300 mb-6">
//             <button
//               className={`p-3 text-lg font-semibold ${
//                 activeTab === "appointments"
//                   ? "border-b-4 border-[#7b6fb1]"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("appointments")}
//             >
//               Appointments
//             </button>
//             <button
//               className={`p-3 text-lg font-semibold ${
//                 activeTab === "animals"
//                   ? "border-b-4 border-[#7b6fb1]"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("animals")}
//             >
//               Adopted Animals
//             </button>
//           </div>

//           {activeTab === "appointments" && (
//             <div className="p-6">
//               {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                 Appointments
//               </h3> */}
//               <div className="space-y-4">
//                 {appointments.map((appointment) => (
//                   <div
//                     key={appointment.id}
//                     className="p-6 bg-white bg-opacity-50 backdrop-blur-md border-l-4 border-[#7b6fb1] rounded-lg shadow-xl transition-transform hover:scale-105"
//                   >
//                     {/* Main Content Container */}
//                     <div className="flex justify-between items-center">
//                       {/* Appointment Details */}
//                       <div>
//                         <p className="text-lg font-medium text-gray-700">
//                           {appointment.date} at {appointment.time}
//                         </p>
//                         <p className="text-sm text-gray-600">
//                           Animal: {appointment.animal} ({appointment.status})
//                         </p>
//                       </div>

//                       {/* Buttons */}
//                       <div className="flex gap-6">
//                         {/* Update Button */}
//                         <button
//                           className="px-5 py-3 text-white bg-[#7b6fb1] rounded-lg hover:bg-indigo-700 transition"
//                           onClick={() =>
//                             handleUpdateAppointment(appointment.id)
//                           }
//                         >
//                           Update
//                         </button>
//                         {/* Cancel Button */}
//                         <button
//                           className="px-5 py-3 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
//                           onClick={() =>
//                             handleCancelAppointment(appointment.id)
//                           }
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//           {/* Modal for Animal Updates */}
//           {isModalOpen && selectedAnimal && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
//                 {/* Close Button */}
//                 <button
//                   onClick={handleCloseModal}
//                   className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
//                 >
//                   ×
//                 </button>

//                 {/* Header */}
//                 <h3 className="text-2xl font-semibold text-center mb-6">
//                   Here are some updates on your pal!
//                 </h3>

//                 {/* Two Column Layout */}
//                 <div className="flex flex-col sm:flex-row items-center">
//                   {/* Left Column: Image */}
//                   <div className="sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
//                     <Image
//                       src={selectedAnimal.imageUrl || "/placeholder-image.png"}
//                       alt={`${selectedAnimal.name}'s latest photo`}
//                       width={300}
//                       height={300}
//                       className="rounded-lg shadow-md object-cover"
//                     />
//                   </div>

//                   {/* Right Column: Details */}
//                   <div className="sm:w-1/2 sm:pl-6">
//                     <h4 className="text-xl font-semibold mb-4">
//                       Has {selectedAnimal.name} been fed today?
//                     </h4>
//                     <ul>
//                       <li className="flex items-center">
//                         <span className="text-lg">Lunch:</span>
//                         <span className="ml-2 text-gray-300 font-bold">
//                           <FaCheckCircle />
//                         </span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-lg">Snack:</span>
//                         <span className="ml-2 text-gray-300 font-bold">
//                           <FaCheckCircle />
//                         </span>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-lg">Dinner:</span>
//                         <span className="ml-2 text-[#7b6fb1] font-bold">
//                           <FaCheckCircle />
//                         </span>
//                       </li>
//                     </ul>
//                     <h4 className="text-xl font-semibold mb-2 mt-5">
//                       {selectedAnimal.name} Mood Today
//                     </h4>
//                     <p className="text-gray-600 mb-4">
//                       Currently, {selectedAnimal.name} is feeling playful and
//                       energetic!
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Fun Fact: Every animal has its own personality, so their
//                       mood can change from day to day! Check back tomorrow for a
//                       new update on how {selectedAnimal.name} is feeling.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "animals" && (
//             <div className="p-6">
//               {/* <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
//                 Adopted Animals
//               </h3> */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {adoptedAnimals.map((animal) => (
//                   <div
//                     key={animal.id}
//                     className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//                   >
//                     {/* Image Section */}
//                     <div className="bg-gray-100 w-full h-56 rounded-t-xl flex justify-center items-center mb-4">
//                       <Image
//                         src={animal.imageUrl}
//                         alt={animal.name}
//                         width={500}
//                         height={300}
//                         className="rounded-3xl w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Animal Information */}
//                     <div className="p-6 flex flex-col items-center justify-center">
//                       <h4 className="text-2xl font-semibold text-gray-800 mb-2">
//                         {animal.name}
//                       </h4>
//                       <p className="text-sm text-gray-500 mb-4">
//                         {animal.species}
//                       </p>

//                       {/* Link */}
//                       <a
//                         href="#"
//                         className="inline-block text-[#7b6fb1] text-lg font-medium hover:text-purple-300 transition-all duration-200"
//                         onClick={() => handleAnimalLatest(animal.id)}
//                       >
//                         See All Latest →
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

"use client";

import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa"; // Importing the edit (pencil) icon
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [updated, setUpdated] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Get the user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setName(user.name);
      setPhone(user.phone || ""); // Use a default phone if not available
      setEmail(user.email || ""); // Use a default email if not available
    }
  }, []);

  const handleUpdate = () => {
    setUpdated(true);
    setTimeout(() => setUpdated(false), 2000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="shadow-2xl rounded-3xl p-12 flex w-full max-w-6xl">
          {/* Left Section - Profile Update */}
          <div className="w-1/2 bg-[#f2f1fa] p-8 rounded-2xl">
            <div className="flex justify-center mb-8">
              {/* Profile Picture with Upload */}
              <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-semibold">
                {image ? (
                  <Image
                    width={300}
                    height={200}
                    src={image}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span>{name[0]}</span>
                )}
                <label
                  htmlFor="profile-picture-upload"
                  className="absolute bottom-0 right-0 bg-[#7b6fb1] text-white text-xs rounded-lg p-2 cursor-pointer"
                >
                  <input
                    type="file"
                    id="profile-picture-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <FaPen className="text-white text-sm" /> {/* Edit Icon */}
                </label>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Profile Details
            </h2>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className="block text-gray-700 font-semibold mt-4">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label className="block text-gray-700 font-semibold mt-4">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full mt-2 p-3 rounded-lg bg-gray-200 border-gray-300 cursor-not-allowed"
            />
            <p className="text-sm text-gray-500 mt-2">
              This email will be used to log in and also to contact you!
            </p>

            <button
              onClick={handleUpdate}
              className="mt-6 w-full bg-[#7b6fb1] text-white py-3 rounded-lg font-semibold hover:bg-indigo-500"
            >
              Update
            </button>

            {updated && (
              <p className="text-green-500 mt-4">
                Profile updated successfully!
              </p>
            )}
          </div>

          {/* Right Section - Welcome Message */}
          <div className="w-1/2 flex flex-col justify-center px-8">
            <h2 className="text-gray-500 text-sm uppercase">Hello,</h2>
            <h1 className="text-2xl font-bold text-gray-900">{name}!</h1>
            <p className="text-lg font-semibold text-gray-700 mt-4">
              Together, We Can Make a Difference!
            </p>
            <p className="text-gray-600 mt-3">
              Your support goes far beyond just a donation or adoption — its a
              lifeline for the animals you love. With your help, we are able to
              fund important care, research, and conservation programs that make
              a real impact.
            </p>
            <p className="text-gray-600 mt-3">
              We are excited to have you as part of our community, and we look
              forward to continuing this journey together. Thank you for being
              an amazing part of our mission!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

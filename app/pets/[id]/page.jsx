"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import { FaPaw, FaMars, FaTree } from "react-icons/fa";
import { motion } from "framer-motion";
import swal from "sweetalert";

const animals = [
  {
    id: 1,
    species: "Panthera uncia",
    commonName: "Snow Leopard",
    name: "Snowy",
    description:
      "The Snow Leopard is a solitary and elusive big cat native to the high mountain ranges of Central and South Asia, predominantly found in the rocky and rugged terrain of the Himalayas, the Tibetan Plateau, and parts of Central Asia. This magnificent feline is known for its thick, smoky-gray fur with distinct rosettes and spots, helping it blend perfectly with its snow-covered environment. Snow leopards are exceptional climbers and are adapted to survive in cold, harsh climates. They primarily hunt for medium-sized prey such as goats and sheep, but their elusive nature and low population make them one of the most endangered species in the world.",
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
      "The African Elephant, the largest land animal on Earth, is renowned for its impressive size and powerful presence. This magnificent creature is easily recognized by its massive ears, which help to regulate its body temperature, and its long, curved tusks that are prized for their ivory. Native to sub-Saharan Africa, African elephants are found in a variety of habitats including savannas, forests, and deserts. They are highly social animals, living in matriarchal herds and communicating with one another using a wide range of vocalizations and body language. African elephants are also key to maintaining the ecosystem, as their feeding habits shape the environment around them.",
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
      "The Red Panda is a small, nocturnal mammal native to the temperate forests of the eastern Himalayas and southwestern China. Although it shares the name 'panda' with its much larger relative, the Giant Panda, it is more closely related to raccoons and skunks. Red pandas are known for their reddish-brown fur, bushy tails, and adorable face markings. They are solitary creatures that primarily feed on bamboo, but they also consume fruits, acorns, and small mammals. Despite their charming appearance, red pandas are classified as 'endangered' due to habitat loss and fragmentation, as well as poaching for their beautiful fur.",
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
      "The Bengal Tiger, a symbol of strength and beauty, is one of the most iconic and powerful big cats in the world. With its striking orange coat adorned with black stripes, the Bengal Tiger is a master of stealth and hunting in the dense forests and grasslands of India, Bangladesh, Bhutan, and Nepal. This apex predator preys upon a wide variety of animals, including deer, wild boar, and even buffalo. Tigers are known for their solitary nature and territorial behavior, with males and females only coming together for mating. Despite their formidable presence, Bengal Tigers are critically endangered due to habitat loss, poaching, and human-wildlife conflict.",
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
      "Lions, often referred to as the 'Kings of the Jungle', are large wild cats that symbolize strength, courage, and majesty. Found primarily in Africa and parts of India, lions are the only species of big cats that live in social groups called prides. These prides are led by a dominant male, and the females work together to hunt for food. Lions are known for their distinctive golden manes, which are present only in males, and their powerful roar, which can be heard from miles away. Lions are an integral part of African culture and wildlife, but their populations are rapidly declining due to habitat loss, human encroachment, and poaching.",
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

const PetDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Choose Options");
  const [isAdopted, setIsAdopted] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const toggleOptions = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOptionsVisible(false);
  };

  const animal = animals.find((a) => a.id === parseInt(id));

  const handleAdoptNow = () => {
    if (user.role !== "user") {
      swal("Oops!", "You cannot adopt.You are not user !", "warning");
      return;
    }
    if (selectedOption === "Choose Options") {
      swal("Oops!", "Please choose an option before adopting.", "warning");
    } else {
      swal({
        title: "Success!",
        text: `You adopted ${animal.commonName}! 🎉\n${selectedOption}`,
        icon: "success",
        buttons: ["Cancel", "OK"],
      }).then((willAdopt) => {
        if (willAdopt) {
          setIsAdopted(true);
        }
      });
    }
  };

  if (!animal) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-gray-700">Animal not found</h1>
        <button
          className="mt-4 px-4 py-2 bg-[#7b6fb1] text-white rounded hover:bg-[#504394]"
          onClick={() => router.push("/")}
        >
          Back to Adoption
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] w-full min-h-screen py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 pr-20">
            <h1 className="text-4xl font-bold text-[#7b6fb1] mb-4">
              {animal.name}
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Common Name:</strong> {animal.commonName}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Birthdate:</strong> {animal.birthdate}
            </p>

            <div className="flex gap-6 mb-10 mt-10">
              <div className="text-center flex flex-col items-center">
                <FaPaw className="text-2xl text-[#504394]" />
                <p className="text-xl font-bold text-[#504394]">
                  {animal.age} Years Old
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <FaMars className="text-2xl text-[#504394]" />
                <p className="text-xl font-bold text-[#504394]">
                  {animal.gender}
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <FaTree className="text-2xl text-[#504394]" />
                <p className="text-xl font-bold text-[#504394]">
                  {animal.adoptionStatus}
                </p>
              </div>
            </div>
            <p className="text-black text-xl mb-4 leading-relaxed tracking-wide">
              {animal.description}
            </p>
            <div className="flex gap-4 mt-10">
              <button
                className={`px-6 py-4 rounded-full ${
                  isAdopted
                    ? "bg-pink-300 cursor-not-allowed text-white"
                    : "bg-[#7b6fb1] hover:bg-[#504394] text-white"
                }`}
                onClick={handleAdoptNow}
                disabled={isAdopted}
              >
                {isAdopted ? "You already adopted ! " : "Adopt Now"}
              </button>

              <div className="relative">
                <button
                  className={`px-6 py-4 rounded-full border ${
                    isAdopted
                      ? "bg-blue-300 text-white cursor-not-allowed"
                      : "bg-gray-200"
                  }`}
                  onClick={toggleOptions}
                >
                  {selectedOption}
                </button>
                {isOptionsVisible && (
                  <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <ul className="text-gray-700 text-sm">
                      {[
                        "Food for 3 Months",
                        "Enclosure Maintenance",
                        "Donation to Wildlife Conservation",
                      ].map((option) => (
                        <li
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleOptionSelect(option)}
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
          <div className="md:w-1/2 flex justify-center h-full">
            {/* <Image
              src={animal.imageUrl}
              alt={animal.commonName}
              width={400}
              height={300}
              sizes="100vw"
              className="object-cover rounded-xl shadow-md"
            /> */}
            <div className="flex justify-center items-center mb-4 sm:mb-0 bg-gray-200 rounded-lg p-8 ">
              <Image
                src={animal.imageUrl || "/placeholder-image.png"}
                alt={`${animal.commonName}'s latest photo`}
                width={800}
                height={500}
                sizes="100vw"
                className="rounded-xl shadow-md object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetDetail;

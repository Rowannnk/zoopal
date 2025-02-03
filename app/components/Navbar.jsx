"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSpinner, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (
      !userData &&
      pathname !== "/auth/login" &&
      pathname !== "/auth/register"
    ) {
      window.location.href = "/auth/login";
    } else {
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/auth/login";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-purple-500" />
      </div>
    );
  }

  return (
    <nav className="flex justify-between items-center text-black px-6 py-8 bg-gradient-to-br from-[#f4f2fa] via-[#e0d9f3] to-[#d1c8f0] ">
      <div className="text-xl font-bold">
        <Link href="/">AdoptAZooPal</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-[#7b6fb1] font-bold"
                : "hover:text-[#7b6fb1]"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/Adoption"
            className={
              pathname === "/Adoption"
                ? "text-[#7b6fb1] font-semibold"
                : "hover:text-[#7b6fb1]"
            }
          >
            Make an Adoption
          </Link>
        </li>
        <li>
          <Link
            href="/Appointment"
            className={
              pathname === "/Appointment"
                ? "text-[#7b6fb1] font-semibold"
                : "hover:text-[#7b6fb1]"
            }
          >
            Make an Appointment
          </Link>
        </li>
      </ul>
      <div className="relative">
        <div className="flex space-x-2 items-center">
          {user && <span className="text-gray-700">Welcome, {user.name}</span>}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaUserCircle className="text-2xl" />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 text-black bg-white border rounded-lg shadow-md z-30">
            <ul className="p-2">
              {user ? (
                <>
                  {user.role === "admin" ? (
                    <>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Admin/Users"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Admin/Users">Users</Link>
                      </li>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Admin/Animals"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Admin/Animals">Animals</Link>
                      </li>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Admin/Zookeepers"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Admin/Zookeepers">Zookeepers</Link>
                      </li>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Admin/Appointments"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Admin/Appointments">Appointments</Link>
                      </li>
                    </>
                  ) : user.role === "zookeeper" ? (
                    <>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Zookeepers/CheckAppointments"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Zookeepers/CheckAppointments">
                          Check Appointments
                        </Link>
                      </li>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Zookeepers/CheckAnimals"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Zookeepers/CheckAnimals">
                          Check Animals
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/Profile"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/Profile">Profile</Link>
                      </li>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/MyPal"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/MyPal">Check your Pals</Link>
                      </li>
                      <li
                        className={`py-2 text-center hover:bg-gray-100 ${
                          pathname === "/MyAppointment"
                            ? "text-[#7b6fb1] font-semibold"
                            : ""
                        }`}
                      >
                        <Link href="/MyAppointment">Appointments</Link>
                      </li>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full py-2 text-center bg-red-400 text-white rounded-lg hover:bg-[#504394] hover:shadow-2xl transition-all"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <li
                    className={`py-2 text-center hover:bg-gray-100 ${
                      pathname === "/auth/login"
                        ? "text-[#7b6fb1] font-semibold"
                        : ""
                    }`}
                  >
                    <Link href="/auth/login">Login</Link>
                  </li>
                  <li
                    className={`py-2 text-center hover:bg-gray-100 ${
                      pathname === "/auth/register"
                        ? "text-[#7b6fb1] font-semibold"
                        : ""
                    }`}
                  >
                    <Link href="/auth/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

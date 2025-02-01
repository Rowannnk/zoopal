"use client";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Hardcoded mock users data
  const mockUsers = [
    { email: "user@example.com", password: "userpassword", role: "user" },
    { email: "admin@example.com", password: "adminpassword", role: "admin" },
    {
      email: "zookeeper@example.com",
      password: "zookeeperpassword",
      role: "zookeeper",
    },
  ];

  // Login function
  const login = (email) => {
    const userData = mockUsers.find((user) => user.email === email);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

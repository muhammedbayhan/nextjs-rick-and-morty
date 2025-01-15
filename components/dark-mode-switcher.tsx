"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-16 h-6 rounded-full bg-gradient-to-r from-slate-500 via-green-500 to-slate-500 flex items-center transition duration-300 focus:outline-none shadow"
    >
      <div
        className={`w-10 h-10 relative rounded-full transition duration-500 transform ${
          isDarkMode
            ? "bg-yellow-500 translate-x-full"
            : "bg-slate-700 -translate-x-2"
        } p-1 text-white`}
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {isDarkMode ? (
            <Image src="/morty-icon.svg" alt="moon" width={60} height={60} />
          ) : (
            <Image src="/rick-icon.svg" alt="sun" width={60} height={60} />
          )}
        </span>
      </div>
    </button>
  );
};

export default DarkModeSwitcher;

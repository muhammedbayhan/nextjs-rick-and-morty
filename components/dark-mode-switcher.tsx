"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "antd";

const DarkModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Switch
      style={{
        backgroundColor: darkMode ? "#00ffe8" : "#ecff00",
        color: darkMode ? "#000000" : "#000000",
      }}
      checked={darkMode ?? false}
      onChange={toggleDarkMode}
      checkedChildren="Rick Mode"
      unCheckedChildren="Morty Mode"
    />
  );
};

export default DarkModeSwitcher;

"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "antd";

const DarkModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setDarkMode(checked);
  };

  return (
    <Switch
      style={{
        backgroundColor: darkMode ? "#000" : "#E4E7EB",
        color: darkMode ? "#000" : "#000",
      }}
      checked={darkMode}
      onChange={toggleDarkMode}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
  );
};

export default DarkModeSwitcher;

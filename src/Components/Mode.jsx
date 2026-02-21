import React, { useEffect, useState } from "react";

const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="dark:bg-black dark:text-white">
      <button className="bg-red-500 dark:bg-black" onClick={() => setDarkMode(!darkMode)}>
        Dark Mode
      </button>
    </div>
  );
};

export default Mode;

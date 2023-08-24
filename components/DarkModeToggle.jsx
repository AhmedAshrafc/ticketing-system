import { useEffect, useState } from "react";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { Tooltip } from "react-tooltip";

export default function DarkModeToggle({ isOpen }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (preferredTheme) {
      setTheme(preferredTheme);
    } else if (userPrefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
    document.documentElement.classList.toggle("dark", updatedTheme === "dark");
  };

  return (
    <li
      className="group"
      data-tooltip-id="darkmode-tooltip"
      data-tooltip-place="right"
    >
      <div>
        {!isOpen && (
          <Tooltip
            id="darkmode-tooltip"
            content="Dark Mode"
            style={{ zIndex: "9999" }}
            offset={-50}
          />
        )}
        <label className="flex items-center p-2 cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="hidden w-full"
          />
          <div className="flex items-center gap-4">
            <div
              className={`relative w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-600`}
            >
              <div
                className={`absolute flex items-center justify-center top-0 left-0 w-5 h-5 rounded-full bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${
                  theme === "dark" ? "translate-x-5" : ""
                }`}
              >
                {theme === "dark" ? (
                  <HiOutlineMoon className="w-4 h-4 text-black dark:text-white" />
                ) : (
                  <HiOutlineSun className="w-4 h-4 text-black dark:text-white" />
                )}
              </div>
            </div>
            <span
              className={`hidden md:inline-block duration-300 dark:text-white font-semibold ${
                !isOpen && "scale-0"
              }`}
            >
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </div>
        </label>
      </div>
    </li>
  );
}

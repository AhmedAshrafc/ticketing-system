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
      {!isOpen && (
        <Tooltip
          id="darkmode-tooltip"
          content="Dark Mode"
          style={{ zIndex: "9999" }}
        />
      )}
      <button
        onClick={toggleTheme}
        className="flex items-center w-full text-md text-black dark:text-white rounded-md p-2 transition-all group-hover:bg-[#081225] dark:hover:bg-secondary-color group-hover:text-white group-active:bg-[#081225]"
      >
        <div className="flex items-center gap-3">
          {theme === "light" ? (
            <HiOutlineMoon className=" min-w-[20px] text-black dark:text-white group-hover:text-white transition-all ml-2" />
          ) : (
            <HiOutlineSun className=" min-w-[20px] text-black dark:text-white group-hover:text-white transition-all ml-2" />
          )}
          <span
            className={`hidden md:inline-block duration-300 font-semibold ${
              !isOpen && "scale-0"
            }`}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </button>
    </li>
  );
}

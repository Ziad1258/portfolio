import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const theme = localStorage.getItem("theme");
  const [mood, setMood] = useState(() => theme || "light");
  useEffect(() => {
    if (mood === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mood]);
  return (
    <div className="py-4">
      <button
        className="w-10 h-10 text-black bg-gray-50 dark:bg-dark dark:text-gray-300 dark:hover:text-gray-500 border dark:border-gray-500  shadow-sm rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all duration-300"
        onClick={() => setMood((prev) => (prev === "light" ? "dark" : "light"))}
      >
        {mood === "light" ? <FiSun className="hover:fill-black transition-all duration-300" /> : <BsFillMoonStarsFill />}
      </button>
    </div>
  );
}

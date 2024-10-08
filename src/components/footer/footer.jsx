import { navbarLinks } from "../../data/data";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/activeProvider";
import { useContext } from "react";

export default function Footer() {
  const { active, setActive } = useContext(MainContext);
  const handleStates = (activeLink) => {
    setActive(activeLink);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="container mx-auto py-12 px-4 sm:px-12 flex flex-col sm:flex-row gap-4 items-center sm:justify-between bg-white
    dark:bg-dark border-t dark:border-gray-500 dark:text-gray-100
    "
    >
      <ul className="flex gap-4">
        {navbarLinks.map((navLink, index) => {
          return (
            <li
              key={index}
              onClick={() => handleStates(navLink.title)}
              className={` ${
                active === navLink.title
                  ? " text-gray-500 dark:text-gray-500"
                  : " text-black dark:text-gray-300  "
              } hover:text-gray-500 dark:hover:text-gray-500  `}
            >
              <Link className="text-sm font-semibold" to={navLink.path}>
                {navLink.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-gray-500 dark:text-gray-300 text-sm">
        © 2024 Spencer Sharp. All rights reserved.
      </p>
    </div>
  );
}

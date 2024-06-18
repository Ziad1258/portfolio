import ThemeSwitcher from "../../helpers/themeSwitcher";
import { FaChevronDown } from "react-icons/fa6";
import { navbarLinks } from "../../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavbarMobile() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="  ">
      <div
        className=" relative flex justify-between items-center  text-white container mx-auto px-12 pt-12    md:hidden bg-white dark:bg-dark
      "
      >
        <div
          className="px-3 py-2 gap-4 text-black bg-gray-50 dark:bg-dark dark:text-gray-300 dark:hover:text-gray-500 border dark:border-gray-500  shadow-sm rounded-xl flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all duration-300"
          onClick={() => setShowNav(true)}
        >
          <span>Menue</span>
          <FaChevronDown size={10} />
        </div>
        <ThemeSwitcher />
        {showNav && (
          <div className="fixed top-[40px] overflow-hidden shadow-lg dark:border-zinc-700 left-0 right-0 z-20 container mx-auto   rounded-lg border    flex flex-col gap-4">
            <div className=" mx-auto px-12 p-8 bg-white w-full   dark:bg-dark">
              <div className="flex justify-end">
                <button
                  className="font-bold w-10 h-10 text-black bg-gray-50 dark:bg-dark dark:text-gray-300 dark:hover:text-gray-500 border dark:border-gray-500  shadow-sm rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setShowNav(false)}
                >
                  X
                </button>
              </div>
              <ul className="flex flex-col gap-4 ">
                <li className=" border-b pb-4 text-black dark:text-gray-300  dark:border-zinc-700">
                  <Link  to={"/"} onClick={() => setShowNav(false)}>
                    Home
                  </Link>
                </li>
                {navbarLinks.map((navLink, index) => {
                  return (
                    <li
                      className={`${
                        index !== navbarLinks.length - 1 ? "border-b pb-4" : ""
                      } text-black dark:text-gray-300  dark:border-zinc-700`}
                      key={index}
                    >
                      <Link to={navLink.path} onClick={() => setShowNav(false)}>
                        {navLink.title} {" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>

      {showNav && (
        <div
          className="cursor-pointer absolute h-[100%]  backdrop-blur-lg bg-zinc-800/40 opacity-100 dark:bg-zinc-800/80 left-0 right-0 top-0 bottom-0 z-10 "
          onClick={() => setShowNav(false)}
        ></div>
      )}
    </div>
  );
}

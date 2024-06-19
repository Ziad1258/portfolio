import ThemeSwitcher from "../../helpers/themeSwitcher";
import { FaChevronDown } from "react-icons/fa6";
import { navbarLinks } from "../../data/data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavbarMobile() {
  const [fixedNav , setFixedNav] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        setFixedNav(false);
    } else {
        // Scroll Up
        if(scrollTop > 100) {
          setFixedNav(true);
        }
        else {
          setFixedNav(false);
        }
    }
    setLastScrollTop(scrollTop);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [lastScrollTop]);

 
  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const pageLink = window.location.href.split("/");
    const length = pageLink.length;
    const sectionName = pageLink[length - 1];
    const section = navbarLinks.find((link) => link.path === `/${sectionName}`);
    if (section) {
      setActive(section.title);
    } else {
      setActive("");
    }
  }, [active]);
  const handleStates = (navState, activeState) => {
    setShowNav(navState);
    setActive(activeState);
  };
  return (
    <div className={`${fixedNav ? "fixed top-0 left-0 right-0 backdrop-blur-md bg-transparent z-40 " : ""}`}>
      <div
        style={{backgroundColor : fixedNav ? "transparent" : ""}}
        className=" relative flex justify-between  items-center  text-white container mx-auto px-4 sm:px-12 pt-4    md:hidden bg-white dark:bg-dark
      "
      >
        <div>
          {active !== "" && (
            <Link
              to="/"
              className="block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-50 dark:border-gray-500 shadow-lg dark:animate-pulse"
              onClick={() => setActive("")}
            >
              <img
                className="max-w-full"
                src="/public/profile.JPEG"
                alt="photo profile"
              />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-end gap-4">
          <div
            className="px-3 py-2 gap-4 text-black bg-gray-50 dark:bg-dark dark:text-gray-300 dark:hover:text-gray-500 border dark:border-gray-500  shadow-sm rounded-xl flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-all duration-300"
            onClick={() => setShowNav(true)}
          >
            <span>Menue</span>
            <FaChevronDown size={10} />
          </div>
          <ThemeSwitcher />
        </div>
        <div style={{opacity : showNav ? 1 : 0 , transform: showNav ? "scale(1)" : "scale(0)"  }} className="fixed top-[40px] overflow-hidden shadow-lg dark:border-zinc-700 left-0 right-0 z-20 container mx-auto w-[95%]    rounded-lg border    flex flex-col gap-4 transition-all duration-500 ease-in-out">
            <div className=" mx-auto px-4 sm:px-12 p-8 bg-white w-full   dark:bg-dark">
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
                  <Link to={"/"} onClick={() => handleStates(false, "")}>
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
                      <Link
                        to={navLink.path}
                        onClick={() =>
                          handleStates(() => handleStates(false, navLink.title))
                        }
                      >
                        {navLink.title}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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

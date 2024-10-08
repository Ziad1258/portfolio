import ThemeSwitcher from "../../helpers/themeSwitcher";
import { FaChevronDown } from "react-icons/fa6";
import { navbarLinks } from "../../data/data";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "../../context/activeProvider";
import AOS from "aos";
import "aos/dist/aos.css";
export default function NavbarMobile() {
  const [fixedNav, setFixedNav] = useState(false);
  const [, setLastScrollTop] = useState(0);
  const [showNav, setShowNav] = useState(false);
  // const [active, setActive] = useState("");
  const { active, setActive } = useContext(MainContext);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    setLastScrollTop((prevScrollTop) => {
      if (scrollTop > prevScrollTop) {
        // Scroll Down
        setFixedNav(false);
      } else {
        // Scroll Up
        if (scrollTop > 200) {
          setFixedNav(true);
        } else {
          setFixedNav(false);
        }
      }
      return scrollTop; // Update lastScrollTop
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // No dependencies

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
  }, [active, setActive]);
  const handleStates = (navState, activeState) => {
    setShowNav(navState);
    setActive(activeState);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease",
      offset: 100,
    });
  }, []);
  return (
    <div
      className={`${
        fixedNav && !showNav
          ? "fixed  top-0  left-0 right-0 backdrop-blur-md bg-transparent z-40 "
          : ""
      }`}
    >
      <div
        // style={{ backgroundColor: fixedNav ? "transparent" : "" }}
        // className=" relative flex justify-between  items-center  text-white container mx-auto px-4 sm:px-12 pt-4    md:hidden bg-white dark:bg-dark"
        className={` mainNav relative flex justify-between  items-center  text-white container mx-auto px-4 sm:px-12 pt-4    md:hidden
          ${fixedNav ? "bg-transparent" : "bg-white dark:bg-dark"}
          `}
      >
        {/* profile img */}
        <div>
          {active !== "" && (
            <div className="" onClick={() => handleStates("")}>
              <Link
                to="/"
                className="block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-50 dark:border-gray-500 shadow-lg dark:animate-pulse"
              >
                <img
                  className="w-full h-full object-cover "
                  src="/Profile.jpg"
                  alt="photo profile"
                />
              </Link>
            </div>
          )}
        </div>
        {/* menue icon */}
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
        <div
          style={{
            opacity: showNav ? 1 : 0,
            transform: showNav ? "scale(1)" : "scale(0)",
          }}
          className="fixed top-[40px] overflow-hidden shadow-lg dark:border-zinc-700 left-0 right-0 z-20 container mx-auto w-[95%]    rounded-lg border    flex flex-col gap-4 transition-all duration-500 ease-in-out"
        >
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
              <li
                onClick={() => handleStates(false, "")}
                className={` ${
                  active === ""
                    ? " text-gray-500 dark:text-gray-300 "
                    : " text-black dark:text-gray-300"
                } `}
              >
                <Link
                  className="border-b pb-4 hover:text-gray-500 dark:hover:text-gray-500  dark:border-zinc-700 block"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              {navbarLinks.map((navLink, index) => {
                return (
                  <li
                    className={` ${
                      active === navLink.title
                        ? " text-gray-500 dark:text-gray-500"
                        : " text-black dark:text-gray-300  "
                    }   hover:text-gray-500 dark:hover:text-gray-500 `}
                    key={index}
                  >
                    <Link
                      to={navLink.path}
                      className={`block ${
                        index !== navbarLinks.length - 1
                          ? "border-b pb-4 dark:border-zinc-700"
                          : ""
                      }`}
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

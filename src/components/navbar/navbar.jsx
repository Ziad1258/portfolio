import { useEffect, useState } from "react";
import { navbarLinks } from "../../data/data";
import ThemeSwitcher from "../../helpers/themeSwitcher";
import { Link } from "react-router-dom";

import { MainContext } from "../../context/activeProvider";
import { useContext } from "react";

export default function Navbar() {
  // const [active, setActive] = useState("");
  const { active, setActive } = useContext(MainContext);
  const [fixedNav, setFixedNav] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const handlScrollTop = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scroll Down
      setFixedNav(false);
    } else {
      // Scroll Up
      if (scrollTop > 100) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    }
    setLastScrollTop(scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handlScrollTop);
    return () => {
      window.removeEventListener("scroll", handlScrollTop);
    };
  }, [lastScrollTop]);
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
  const handleClick = (title) => {
    setActive(title);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={` ${
        fixedNav
          ? "fixed top-0 left-0 right-0 backdrop-blur-md bg-transparent z-40 "
          : ""
      }`}
    >
      <div
        style={{ backgroundColor: fixedNav ? "transparent" : "" }}
        className="hidden md:flex justify-between pt- items-center container mx-auto px-12 dark:bg-dark  bg-white "
      >
        <div onClick={() => handleClick("home")}>
          <Link
            to={"/"}
            style={{
              opacity: active === "" ? "0" : "1",
              animation: active === "" ? "none" : "",
            }}
            className="dark:animate-pulse block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-50 dark:border-gray-500 shadow-lg "
            onClick={() => setActive("")}
          >
            <img
              className="w-full h-full object-cover "
              src="/public/Profile.jpg"
              alt="photo profile"
            />
          </Link>
        </div>
        <ul className=" flex items-center gap-6 px-6 py-2 rounded-full border dark:border-gray-500 shadow-md bg-white dark:bg-dark">
          {navbarLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`${
                  active === link.title
                    ? "text-gray-500"
                    : "dark:text-gray-100"
                }  hover:text-gray-500 dark:hover:text-gray-500 text-sm font-medium  transition-all duration-300  `}
                onClick={() => handleClick(link.title)}
              >
                <Link className="" to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <ThemeSwitcher />
      </div>
    </div>
  );
}

// {`${fixedNav ? "fixed top-0 left-0 right-0 backdrop-blur-md bg-transparent z-40 " : ""}`}

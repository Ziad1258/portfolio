import { useEffect, useState } from "react";
import { navbarLinks } from "../../data/data";
import ThemeSwitcher from "../../helpers/themeSwitcher";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [active , setActive] =  useState("");
    useEffect(() => {
      const pageLink = window.location.href.split('/');
      const length = pageLink.length
      const sectionName = pageLink[length - 1];
      const section = navbarLinks.find((link) => link.path === `/${sectionName}`);
      if(section) {
        setActive(section.title);
      } else {
        setActive("");
      }
    },[active])
  return (
    <div className="hidden md:flex justify-between pt-8 items-center container mx-auto px-12 dark:bg-dark  bg-white">
    
      <Link to={"/"} style={{opacity : active !== "" ? 1 : "0"}} className="block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-50 shadow-lg" onClick={() => setActive("")}>
      <img className="max-w-full" src="/public/profile.JPEG" alt="photo profile" />
      </Link>
      <ul className=" flex items-center gap-6 px-6 py-2 rounded-full border dark:border-gray-500 shadow-md">
        {navbarLinks.map((link, index) => {
          return (
            <li key={index} className={`${active === link.title ? "text-gray-500 dark:text-gray-300" : ""} dark:text-gray-100 dark:hover:text-gray-300 text-sm font-medium hover:text-gray-500 transition-all duration-300  `}
             onClick={() => setActive(link.title)}>
              <Link className="" to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>

      <ThemeSwitcher />
    </div>
  );
}

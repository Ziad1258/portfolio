import { aboutContent } from "../../data/data";
import { socialMediaIcons } from "../../data/data";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const socialIcons = {
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaWhatsapp: FaWhatsapp,
  FaTelegram: FaTelegram,
};
export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-12 py-24 bg-white  dark:bg-dark">
      <div className="flex  md:flex-row flex-col-reverse gap-8">
        {/* left part [title + including my self]  */}
        <div className="flex flex-col  flex-1 gap-8 ">
          <h1 className="font-bold text-3xl   dark:text-gray-300">
            I’m Ferdjani Ziad. I live in Algeria, where I design the
            future.
          </h1>
          <div className="  flex flex-col gap-8">
            {aboutContent.map((p , index) => {
              return (
                <p key={index} className="leading-loose  text-gray-500 dark:text-gray-300 ">
                  {p.content}
                </p>
              )
            })}
          </div>
          {/* socialMedia */}
          <div className="flex md:hidden flex-col gap-8 ">
              

              {socialMediaIcons.map((icon) => {
                const Icon = socialIcons[icon.icon];
                return (
                 <Link to={icon.link} key={icon.name} className="flex gap-4 items-center">
                  <Icon
                    className={` text-xl text-gray-500 `}
                  />
                  <h1 className="  dark:text-gray-300">Follow on {icon.name} </h1>
                   
                 </Link>
                )
              })}
         </div>
        </div>

        {/* right part [image + socialMediaIcons] */}
        <div className="flex flex-col flex-1 md:pl-16  gap-16">
        
         <div className="w-[250px] sm:w-[300px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg rotate-3">
         <img
          className="max-w-full aspect-square object-cover"
          src="../../../public/Profile.jpg"
            alt=""
          />
         </div>
         <div className="hidden md:flex flex-col gap-8 ">
              

              {socialMediaIcons.map((icon) => {
                const Icon = socialIcons[icon.icon];
                return (
                 <Link to={icon.link} key={icon.name} className="flex gap-4 items-center">
                  <Icon
                    className={` text-xl text-gray-500 `}
                  />
                  <h1 className="  dark:text-gray-300">Follow on {icon.name} </h1>
                   
                 </Link>
                )
              })}
         </div>
        </div>

      </div>
    </div>
  );
}

import "./index.css";
import { Link } from "react-router-dom";
import { socialMediaIcons } from "./data/data";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { images } from "./data/data";
import { workspaces } from "./data/data";

import { IoBagHandleSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";

const socialIcons = {
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaWhatsapp: FaWhatsapp,
  FaTelegram: FaTelegram,
};

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col py-24 gap-8 container mx-auto px-12 bg-white dark:bg-dark  ">
        <Link
          to={"/"}
          className="block h-24 w-24 rounded-full overflow-hidden border-2 border-gray-50 shadow-lg "
        >
          <img
            className="max-w-full"
            src="/public/profile.JPEG"
            alt="photo profile"
          />
        </Link>
        <h1 className="text-4xl font-bold dark:text-white">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="text-gray-500 dark:text-gray-300 ">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="flex gap-4 items-center">
          {socialMediaIcons.map((media, index) => {
            const Icon = socialIcons[media.icon];

            return (
              <Link key={index} rel="noopener noreferrer" to={`${media.link}`}>
                {
                  <Icon
                    className={`${media.className} text-2xl hover:translate-y-[-2px] transition-all duration-300 `}
                  />
                }
              </Link>
            );
          })}
        </div>
      </div>

      <div className=" bg-white dark:bg-dark  ">
        <div className=" flex justify-center gap-5   sm:gap-8">
          {images.map((img, index) => {
            return (
              <div
                key={index}
                className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
                  index % 2 === 0 ? "rotate-2" : "-rotate-2"
                }`}
              >
                <img
                  className="absolute  h-full w-full object-cover"
                  key={index}
                  src={img.name}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto py-24 px-12 flex flex-col md:flex-row md:justify-center gap-8 bg-white dark:bg-dark">
        {/* update */}
        <div className=" border dark:border-gray-500 rounded-lg p-6 flex flex-col gap-4 ">
          <div className="flex gap-4 items-center">
            <span className="text-gray-500 ">
              {" "}
              <IoBagHandleSharp size={20} />{" "}
            </span>
            <h1 className="font-bold dark:text-gray-100">Stay up to date</h1>
          </div>

          <p className="text-gray-500 dark:text-gray-300">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              className="flex-1 dark:text-gray-100 border dark:bg-transparent border-gray-300 dark:border-gray-500 rounded-md outline-none p-2 shadow-md"
            />
            <button className="bg-black dark:bg-zinc-800 py-2 px-4 capitalize text-white border dark:border-gray-500 outline-none rounded-md">
              join
            </button>
          </form>
        </div>

        {/* work */}
        <div className="border dark:border-gray-500 rounded-lg p-6 flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <span className="text-gray-500 ">
              {" "}
              <FaEnvelope size={20} />{" "}
            </span>
            <h1 className="font-bold dark:text-gray-100">Work</h1>
          </div>

          <div className="flex flex-col gap-6">
            {workspaces.map((wSpace, index) => {
              return (
                <div key={index} className=" flex justify-between items-end  ">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full p-1 border dark:border-gray-500 shadow-xl ">
                      <img
                        src={wSpace.img}
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold dark:text-gray-100">
                        {wSpace.name}
                      </h3>
                      <p className="text-gray-500  text-sm font-medium">
                        {wSpace.function}{" "}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 font-medium text-sm">
                    {wSpace.period}{" "}
                  </p>
                </div>
              );
            })}

            <Link
              className="p-2 w-full flex justify-center items-center bg-gray-50 mt-6 rounded-md border hover:bg-gray-100 transition-all duration-300
              dark:bg-zinc-800 dark:hover:bg-dark dark:border-gray-500 dark:text-gray-100  "
              download={true}
              to="/public/five.jpg"
            >
              {" "}
              Download CV{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

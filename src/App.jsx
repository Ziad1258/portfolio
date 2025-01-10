import "./index.css";
import { Link } from "react-router-dom";
import { socialMediaIcons } from "./data/data";
import { workspaces } from "./data/data";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import checkAnimation from "../public/check.json";

import { IoBagHandleSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";

import { useForm, ValidationError } from "@formspree/react";
import Images from "./components/images";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [state, handleSubmit] = useForm("xldrrgea");
  const emailRegEx = /\w+@\D+\.\D+/gi;
  const InputRef = useRef();
  const submitHandling = (e) => {
    e.preventDefault();
    const inputValue = InputRef.current.value;

    if (emailRegEx.test(inputValue)) {
      handleSubmit(e);
    } else {
      InputRef.current.value = "";
      InputRef.current.placeholder = "please enter a valid email";
    }
  };

  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      easing: "ease",
      // offset: 100,
      disableMutationObserver: true, // prevents AOS from overriding styles applied via Tailwind
    });
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col py-24 gap-8 container mx-auto px-12 bg-white dark:bg-dark  ">
        <Link
          id="profile-img"
          to={"/"}
          className="block aspect-square w-36 h-36  rounded-full overflow-hidden border-2 border-gray-50 dark:border-gray-500 shadow-lg   "
          data-aos="zoom-in"
        >
          <img
            className="w-full h-full object-cover "
            src="/Profile.jpg"
            alt="photo profile"
          />
        </Link>
        <h1
          className=" lg:w-[70%] text-3xl lg:text-5xl font-bold dark:text-white"
          data-aos="fade-left"
        >
          Mobile & Web Front-End Developer
        </h1>
        <p
          data-aos="fade-right"
          className="lg:w-[70%] text-gray-500 dark:text-gray-300"
        >
          Hey there! I&#39;m Ferdjani Ziad, a front-end developer from Algeria.
          I focus on building both mobile and web applications. I have a real
          passion for coding and love creating digital experiences that feel
          intuitive and engaging. Let&#39;s build something great together!
        </p>

        <div className="flex gap-4 items-center">
          {socialMediaIcons.map((media, index) => {
            const Icon = media.icon;

            return (
              <Link
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                key={index}
                rel="noopener noreferrer"
                to={`${media.link}`}
              >
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

      {/* images */}

      <Images />

      <div className="container mx-auto py-24 px-12 flex flex-col lg:flex-row  gap-8 bg-white dark:bg-dark">
        {/* update */}
        <div
          data-aos="fade-right"
          className=" border dark:border-gray-500 rounded-lg p-6 flex flex-1 flex-col gap-4 "
        >
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
          <form
            onSubmit={submitHandling}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex flex-1">
              <input
                ref={InputRef}
                type="email"
                name="email"
                className="flex-1 dark:text-gray-100 border dark:bg-transparent border-gray-300 dark:border-gray-500 rounded-md outline-none p-2 shadow-md"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-black dark:bg-zinc-800 py-2 px-4 capitalize text-white border dark:border-gray-500 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed "
            >
              join
            </button>
          </form>
          {state.succeeded ? (
            <div className="text-gray-500 dark:text-gray-300 my-8 flex gap-2 justify-center items-center">
              {" "}
              <p className=" ">your email has sent correctly ! </p>
              <Lottie
                className="h-6"
                animationData={checkAnimation}
                loop="false"
              />
            </div>
          ) : (
            ""
          )}
        </div>

        {/* work */}
        <div
          data-aos="fade-left"
          className="border  dark:border-gray-500 rounded-lg p-6 flex flex-1 flex-col gap-6"
        >
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
                <div
                  key={index}
                  className=" flex flex-col sm:flex-row sm:justify-between sm:items-end  "
                >
                  <div className="flex sm:flex-row flex-col gap-2 items-center   sm:gap-4 sm:items-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full p-1 border dark:border-gray-500 shadow-xl ">
                      <img
                        src={wSpace.img}
                        className="w-full h-full rounded-full object-cover "
                      />
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                      <h3 className="font-semibold dark:text-gray-100">
                        {wSpace.name}
                      </h3>
                      <p className="text-gray-500  text-sm font-medium">
                        {wSpace.function}{" "}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 font-medium text-sm text-center mt-2">
                    {wSpace.period}{" "}
                  </p>
                </div>
              );
            })}

            <a
              className="p-2 w-full flex justify-center items-center bg-gray-50 mt-6 rounded-md border hover:bg-gray-100 transition-all duration-300
  dark:bg-zinc-800 dark:hover:bg-dark dark:border-gray-500 dark:text-gray-100"
              download={true}
              href="/public/ziad-frontend-dev_compressed.pdf"
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

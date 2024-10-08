import { aboutContent } from "../../data/data";
import { socialMediaIcons } from "../../data/data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
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
    <div className="container mx-auto px-4 sm:px-12 py-24 bg-white  dark:bg-dark">
      <div className="flex  lg:flex-row flex-col-reverse gap-8">
        {/* left part [title + including my self]  */}
        <div className="flex flex-col  flex-1 gap-8 ">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-bold text-3xl   dark:text-gray-300"
          >
            I’m Ferdjani Ziad. I live in Algeria, where I design the future.
          </h1>
          <div className="  flex flex-col gap-8">
            {aboutContent.map((p, index) => {
              return (
                <p
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  key={index}
                  className="leading-loose  text-gray-500 dark:text-gray-300 "
                >
                  {p.content}
                </p>
              );
            })}
          </div>
          {/* socialMedia */}
          <div className="flex lg:hidden flex-col gap-8 ">
            {socialMediaIcons.map((icon, index) => {
              const Icon = icon.icon;
              return (
                <Link
                  to={icon.link}
                  key={icon.name}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className="flex gap-4 items-center"
                >
                  <Icon className={`text-xl ${icon.className}`} />
                  <h1 className="  dark:text-gray-300">
                    Follow on {icon.name}{" "}
                  </h1>
                </Link>
              );
            })}
          </div>
        </div>

        {/* right part [image + socialMediaIcons] */}
        <div className="flex flex-col flex-1 lg:pl-16  gap-16 ">
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            className="w-[250px] sm:w-[300px] lg:w-[400px] min-h[300px] rounded-lg overflow-hidden shadow-lg  "
            style={{ transform: "rotate(5deg)" }}
          >
            <img
              className="max-w-full aspect-square object-cover"
              src="/Profile.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:flex flex-col gap-8 ">
            {socialMediaIcons.map((icon, index) => {
              const Icon = icon.icon;
              return (
                <Link
                  to={icon.link}
                  key={icon.name}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className="flex gap-4 items-center"
                >
                  <Icon className={`text-xl ${icon.className}`} />
                  <h1 className="  dark:text-gray-300">
                    Follow on {icon.name}{" "}
                  </h1>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

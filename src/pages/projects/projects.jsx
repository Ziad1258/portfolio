import { projects } from "../../data/data";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Projects() {
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
    <div className="container mx-auto px-4 sm:px-12 py-24 bg-white  dark:bg-dark flex flex-col gap-16">
      <div className="flex flex-col gap-8 md:w-[85%] lg:w-[65%]">
        <h1
          data-aos="fade-up"
          className="font-bold text-3xl  lg:text-5xl  dark:text-gray-300"
        >
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="leading-loose  text-gray-500 dark:text-gray-300 "
        >
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          return (
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              key={index}
            >
              <div className="  flex flex-col gap-4 border dark:border-gray-500 rounded-lg overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-300">
                <div className=" overflow-hidden bg-white dark:bg-dark p-2 drop-shadow-lg  dark:border  dark:border-gray-700 border  w-full  h-72 lg:h-66  ">
                  {project.img && (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-contain  "
                    />
                  )}
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <h1 className="font-bold dark:text-gray-300">
                    {project.name}
                  </h1>
                  <p className=" text-gray-500 dark:text-gray-300">
                    {project.desc}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to={project.demoLink}
                      className="text-gray-500 dark:text-gray-300 flex items-center gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink />
                      <p> {project.name} </p>
                    </Link>
                    <Link
                      to={project.gitHubLink}
                      className="text-gray-500 dark:text-gray-300 flex items-center gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                      <p> repo Link </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

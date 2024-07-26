import { projects } from "../../data/data";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-12 py-24 bg-white  dark:bg-dark flex flex-col gap-16">
      <div className="flex flex-col gap-8 md:w-[85%] lg:w-[65%]">
        <h1 className="font-bold text-3xl  lg:text-5xl  dark:text-gray-300">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="leading-loose  text-gray-500 dark:text-gray-300 ">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project , index) => {
            return (
                <div key={index} className="  flex flex-col gap-4 border dark:border-gray-500 rounded-lg py-4 hover:scale-105 hover:shadow-md transition-all duration-300">
                    <div className=" overflow-hidden bg-white dark:bg-dark p-2 drop-shadow-lg  dark:border  dark:border-gray-700 ">
                    <img src={project.img} alt={project.name} className="w-full md:max-h-44  object-fit " />

                    </div>
                    <div className="p-4 flex flex-col gap-4">
                    <h1 className="font-bold dark:text-gray-300">{project.name}</h1>
                    <p className=" text-gray-500 dark:text-gray-300">{project.desc}</p>
                    <Link to={project.demoLink} className="text-gray-500 dark:text-gray-300 flex items-center gap-2" target="_blank" rel="noreferrer">
                    <FaLink />
                    <p> {project.name} </p>
                    </Link>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
}

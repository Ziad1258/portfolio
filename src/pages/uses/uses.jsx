import { useEffect } from "react";
import { workStationData } from "../../data/data";
import { productivity } from "../../data/data";
import { devTools } from "../../data/data";

import AOS from "aos";
import "aos/dist/aos.css";

const usesData = {
  workStationData,
  productivity,
  devTools,
};

export default function Uses() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease",
      // offset: 100,
      disableMutationObserver: true, // prevents AOS from overriding styles applied via Tailwind
    });
  }, []);
  return (
    <div className="container mx-auto sm:px-12 px-4 py-24 flex flex-col gap-16 bg-white dark:bg-dark ">
      {/* title + into */}
      <div className="flex  flex-col gap-8 md:w-[85%] lg:w-[65%]">
        <h1
          data-aos="fade-left"
          className="font-bold text-3xl  lg:text-5xl  dark:text-gray-300"
        >
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p
          data-aos="fade-right"
          className="leading-loose  text-gray-500 dark:text-gray-300 "
        >
          I get asked a lot about the things I use to build software, stay
          productive, or buy to fool myself into thinking I’m being productive
          when I’m really just procrastinating. Here’s a big list of all of my
          favorite stuff.
        </p>
      </div>

      {/* uses content */}
      <div className="flex flex-col gap-16">
        {["workStationData", "devTools", "productivity"].map((item, index) => {
          const usesSection = usesData[item];
          console.log(usesSection);

          return (
            <div
              style={{ borderBottomWidth: index !== 2 ? "1px" : "" }}
              key={index}
              className="flex flex-col md:flex-row gap-8 pb-8  border-gray-300 dark:border-gray-500"
            >
              <h1
                data-aos="fade-up"
                className="font-bold capitalize dark:text-white text-xl w-[300px] "
              >
                {" "}
                {usesSection[0]}{" "}
              </h1>
              <div className="flex flex-col flex-1 ">
                {usesSection[1].map((section, index) => {
                  return (
                    <div key={index} className="flex mb-8 flex-col gap-4">
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={`${100}`}
                        className="dark:text-gray-300"
                        key={index}
                      >
                        {section.name}
                      </h3>
                      <p
                        data-aos="fade-up"
                        data-aos-delay={`${150 * index}`}
                        className="text-gray-500 dark:gray-300 leading-loose "
                      >
                        {section.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

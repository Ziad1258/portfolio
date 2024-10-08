import { images } from "../data/data";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Images() {
  return (
    <div className=" bg-white dark:bg-dark  ">
      <div className="flex justify-center gap-5 sm:gap-8">
        {images.map((img, index) => {
          return (
            <div
              data-aos={`${index % 2 === 0 ? "fade-up" : "fade-down"}`}
              data-aos-delay={`${index * 200}`}
              key={index}
              style={{
                transform: `rotate(${index % 2 === 0 ? "2deg" : "-2deg"})`,
              }}
              className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 shadow-md shadow-gray-500 dark:shadow-zinc-500"
            >
              <img
                className="h-full w-full object-cover"
                src={img.name}
                alt={img.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Images;

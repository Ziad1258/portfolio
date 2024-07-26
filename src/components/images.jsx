import { images } from '../data/data';
function Images() {
  return (
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
  )
}

export default Images
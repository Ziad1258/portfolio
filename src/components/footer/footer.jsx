import { navbarLinks } from "../../data/data"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <div className="container mx-auto py-12 px-12 flex flex-col sm:flex-row justify-between bg-white
    dark:bg-dark border-t dark:border-gray-500 dark:text-gray-100
    ">
      <div className="flex gap-4">
         {navbarLinks.map((navLink , index) => {
           return (
               <Link className="text-sm font-semibold" key={index} to={navLink.path}>{navLink.title}</Link>
           )
         })}
      </div>
      <p className="text-gray-500 dark:text-gray-300 text-sm">
      © 2024 Spencer Sharp. All rights reserved.
      </p>
       </div>
  )
}

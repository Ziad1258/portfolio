import imageOne from "../assets/Hasib.png";
import imageTwo from "../assets/ZedExpress.png";
import imageThree from "../assets/Saltify.png";
import imageFour from "../assets/soufacademy.png";
import imageFive from "../assets/Sunny.png";

import myImage from "../assets/ferzDev.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import hasib from "../assets/Hasib.png";
import Salatify from "../assets/Saltify.png";
import rakeen from "../assets/ركين للتنمية العقارية.png";
import Sunny from "../assets/Sunny.png";
import zedExpress from "../assets/ZedExpress.png";
import soufacademy from "../assets/soufacademy.png";

export const navbarLinks = [
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Uses",
    path: "/uses",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const socialMediaIcons = [
  {
    name: "Email",
    icon: MdEmail,
    className: "text-blue-500",
    link: "mailto:frdjaneziad9@gmail.com",
  },

  {
    name: "GitHub",
    icon: FaGithub,
    className: "text-gray-700",
    link: "https://github.com/Ziad1258",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    className: "text-green-500",
    link: "https://wa.me/213792926151",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    className: "text-blue-500",
    link: "https://www.linkedin.com/in/ferdjani-ziad-4775a7191/",
  },

  // {
  //   name: "Instagram",
  //   icon: "FaInstagram",
  //   className: "text-red-500",
  //   link: "https://www.instagram.com/fer_ziad/",
  // },
  // {
  //   name: "WhatsApp",
  //   icon: "FaWhatsapp",
  //   className: "text-green-500",
  //   link: "https://wa.me/213792926151",
  // },
  // {
  //   name: "Telegram",
  //   icon: "FaTelegram",
  //   className: "text-blue-500",
  //   link: "https://t.me/ferZiad8",
  // },
];

export const images = [
  { name: imageTwo },
  { name: imageThree },
  { name: imageFour },
  { name: imageOne },
  { name: imageFive },
];

export const workspaces = [
  {
    name: "Freelancer",
    function: "Frontend Developer",
    period: "2024 - present",
    img: "/Profile.jpg",
  },
  {
    name: "hoskaDev",
    function: "Frontend Developer",
    period: "2023 - 2024",
    img: "/hoskadev.jpg",
  },
  {
    name: "hoskaDev",
    function: "Intership",
    period: "2022 — 2023",
    img: "/hoskadev.jpg",
  },
];
export const aboutContent = [
  {
    content:
      "Hi, I’m Ferdjani Ziad, a front-end developer from Algeria with a passion for both mobile and web development. I love diving into the world of programming and software, and I’ve dedicated myself to creating digital experiences that are engaging, easy to use, and efficient.",
  },
  {
    content:
      "I work with a range of front-end technologies, helping me build responsive, visually appealing websites and mobile apps. I always stay up to date with the latest trends in tech, which means I’m constantly learning new things to keep my work modern and innovative.",
  },
  {
    content:
      "I enjoy taking complex ideas and turning them into simple, intuitive user experiences. I pay attention to the small details and bring a creative approach to problem-solving, which makes sure the projects I work on are always high-quality.",
  },
  {
    content:
      "Outside of coding, I’m curious and always eager to learn more. Whether it’s exploring new programming languages, trying out different frameworks, or understanding how software architecture works, I’m driven by a genuine love for technology and a desire to keep pushing my skills further.",
  },
];

export const projects = [
  {
    name: "Alhaseb",
    desc: "dedicated to students, allowing them to calculate their grades across various fields.",
    img: hasib,
    demoLink: "https://alhaseb.vercel.app/",
    gitHubLink: "https://github.com/Ziad1258/Alhaseb",
  },

  {
    name: "zedExpress",
    desc: "An online store that enables users to purchase clothing. It includes all categories: men, women, and children.",
    img: zedExpress,
    demoLink: "https://zedexpress.netlify.app",
    gitHubLink: "https://github.com/Ziad1258/ZedExpress",
  },

  {
    name: "Salatify",
    desc: "An informational Islamic application that provides prayer times and a variety of Sunnah books, among other features.",
    img: Salatify,
    demoLink: "https://salatify.netlify.app/",
    gitHubLink: "https://github.com/Ziad1258/salatify",
  },

  {
    name: "Souf Academy",
    desc: "An informational website for private educational academy",
    img: soufacademy,
    demoLink: "https://souf-academy.vercel.app/",
    gitHubLink: "https://github.com/Ziad1258/soufAcademy",
  },

  {
    name: "Rkeen",
    desc: "An informational website for a real estate company.",
    img: rakeen,
    demoLink: "https://rkeen-eight.vercel.app/",
    gitHubLink: "https://github.com/Ziad1258/rakeen",
  },

  {
    name: "Suuny",
    desc: "A simple weather application I have created , enable user to discover the temperature based on the city or country which he choosed",
    img: Sunny,
    demoLink: "https://sunny-swart.vercel.app/",
    gitHubLink: "https://github.com/Ziad1258/suuny",
  },
];

export const workStationData = [
  "Work Station",
  [
    {
      name: "Lenovo Laptop",
      desc: "A powerful Lenovo laptop with high-performance specifications, ideal for development work and multitasking. Equipped with a fast processor, ample RAM, and a sharp display, it's perfect for coding, designing, and testing applications.",
    },
    {
      name: "HP Laptop",
      desc: "A reliable HP laptop known for its durability and efficiency. This device offers a seamless user experience with a robust build, high-resolution screen, and long battery life, making it an excellent choice for both on-the-go and office work.",
    },
    {
      name: "External Monitor",
      desc: "A 27-inch 4K external monitor that provides crisp and clear visuals, enhancing productivity by offering a larger workspace for coding and designing.",
    },
    {
      name: "Mechanical Keyboard",
      desc: "A high-quality mechanical keyboard that offers tactile feedback and precision, making it comfortable for long hours of coding.",
    },
    {
      name: "Wireless Mouse",
      desc: "An ergonomic wireless mouse that ensures smooth navigation and reduces strain during extended use.",
    },
    {
      name: "Headphones",
      desc: "Noise-canceling headphones that provide an immersive audio experience, perfect for focusing on work without distractions.",
    },
    {
      name: "Docking Station",
      desc: "A versatile docking station that allows easy connectivity of multiple peripherals, ensuring a seamless workflow between devices.",
    },
  ],
];

export const devTools = [
  "Developement Tools",
  [
    {
      name: "Tailwind CSS",
      desc: "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs without ever leaving your HTML. It provides a comprehensive set of pre-built components and utility classes, enabling efficient styling and responsive design.",
    },
    {
      name: "React Native",
      desc: "React Native is Facebook's UI framework for building natively compiled applications for mobile platforms using JavaScript and React. It allows developers to create apps for both iOS and Android from a single codebase. React Native offers fast development cycles, reusable components, and native performance while maintaining flexibility across multiple platforms.",
    },
    {
      name: "React",
      desc: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state efficiently. React's declarative approach makes it easier to build and maintain complex applications.",
    },
    {
      name: "Next.js",
      desc: "Next.js is a React framework that provides server-side rendering, automatic code splitting, and easy configuration. It simplifies the process of building React applications by offering built-in features like routing, API routes, and static site generation.",
    },
  ],
];

export const productivity = [
  "Productivity",
  [
    {
      name: "daily.dev",
      desc: "daily.dev is a community-driven platform that curates and delivers dev news relevant to you. Stay updated with the latest trends, news, and articles from the developer community in one place.",
    },
    {
      name: "Quora",
      desc: "Quora is a question-and-answer platform where people can ask questions, answer them, and explore topics of interest. It's a valuable resource for gaining insights, sharing knowledge, and learning from diverse perspectives.",
    },
  ],
];

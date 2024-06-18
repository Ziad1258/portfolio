import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/about.jsx";
import Footer from "./components/footer/footer.jsx";
import NavbarMobile from "./components/navbar/navbarMobile.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
     <div className="bg-gray-100 dark:bg-black">
        <Navbar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
       <Footer /> 
     </div>
    </Router>
  </React.StrictMode>
);

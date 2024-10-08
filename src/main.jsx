import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/about.jsx";
import Footer from "./components/footer/footer.jsx";
import NavbarMobile from "./components/navbar/navbarMobile.jsx";
import Projects from "./pages/projects/projects.jsx";
import Uses from "./pages/uses/uses.jsx";
import Contact from "./pages/contact/contact.jsx";
import MainProvider from "./context/activeProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainProvider>
        <div className="bg-gray-100 dark:bg-black">
          <Navbar />
          <NavbarMobile />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/uses" element={<Uses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </MainProvider>
    </Router>
  </React.StrictMode>
);

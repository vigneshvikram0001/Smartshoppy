import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import About from "./Components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidShoppingBags } from "react-icons/bi";

AOS.init();

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/Smartshoppy" element={<Home />} />
        <Route path="/Smartshoppy/about" element={<About />} />
        <Route path="/Smartshoppy/categories" element={<Categories />} />
        <Route path="/Smartshoppy/contact" element={<Contact />} />
      </Routes>
      {/* hover-box */}
      <div className="hover-box">
        <BiSolidShoppingBags className="fs-5 mb-2" />
        <h5>Shop Now</h5>
      </div>
      <Footer />
    </div>
  );
}

export default App;

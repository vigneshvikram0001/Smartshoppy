import React from "react";
import {
  RiMenu3Fill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiHomeSmile2Line,
  RiUserLocationLine,
  RiLayoutMasonryFill,
  RiMessage3Line,
  RiCloseFill,
  RiPhoneLine,
} from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [navClass, setNavClass] = useState("navbarText");

  const handleClick = () => {
    setNavClass("navbarText, nav-active");
  };
  const clearClick = () => {
    setNavClass("navbarText");
  };
  const menuClick = () => {
    setNavClass("navbarText");
  };

  // HomeLink
  const [homeNav, setHomeNav] = useState({});

  const menuHandle = () => {
    setHomeNav({ color: "white" });
  };
  const remenuHandle = () => {
    setHomeNav({ color: "#fff000" });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/Smartshoppy">
            <h2 className="h2 text-white">Smart Shoppy</h2>
          </a>
          <button className="navbar-toggler fs-1 text-white" type="button">
            <RiMenu3Fill onClick={handleClick} />
          </button>
          <div id="navbarText" className={navClass}>
            <RiCloseFill
              id="clear"
              className="text-white"
              onClick={clearClick}
            />
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-group">
              <li className="nav-item" onClick={menuClick}>
                <NavLink
                  className="nav-link"
                  to="/Smartshoppy"
                  style={homeNav}
                  onClick={remenuHandle}
                >
                  <RiHomeSmile2Line className="mb-1 me-1" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={menuClick}>
                <NavLink
                  className="nav-link"
                  to="/Smartshoppy/about"
                  onClick={menuHandle}
                >
                  <RiUserLocationLine className="mb-1 me-1" />
                  About
                </NavLink>
              </li>
              <li className="nav-item" onClick={menuClick}>
                <NavLink
                  className="nav-link"
                  to="/Smartshoppy/categories"
                  onClick={menuHandle}
                >
                  <RiLayoutMasonryFill className="mb-1 me-1" />
                  Categories
                </NavLink>
              </li>
              <li className="nav-item" onClick={menuClick}>
                <NavLink
                  className="nav-link"
                  to="/Smartshoppy/contact"
                  onClick={menuHandle}
                >
                  <RiMessage3Line className="mb-1 me-1" />
                  Contact Us
                </NavLink>
              </li>
              <span className="nav-line mt-4"></span>
              <li className="nav-item social-media ms-2 ps-2">
                <ul className="d-flex align-item-center gap-3 m-0 p-0">
                  <li>
                    <a
                      href="/Smartshoppy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <RiFacebookCircleFill className="text-white fs-4 brand-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Smartshoppy"
                      rel="noreferrer"
                    >
                      <RiInstagramFill className="text-white fs-4 brand-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Smartshoppy"
                      rel="noreferrer"
                    >
                      <RiYoutubeFill className="text-white fs-4 brand-icon" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-contact">
                <a className="nav-link fs-6" href="/contact">
                  Contact Details :{" "}
                  <span className="text-white">
                    <RiPhoneLine className="mb-1 me-1" />
                    958****908
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Nav;

import React, { useEffect } from "react";
import "../css/About.css";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
import cat6 from "./images/cat6.jpg";
import cat7 from "./images/cat7.jpg";
import cat8 from "./images/show4.jpg";

function Categories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="categories" id="categories">
      <h2
        className="fw-bold mt-5 text-center sub-head"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        #New Collections
        <span className="h2-line text-center"></span>
      </h2>
      <p
        className="collection-para"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        At Smart Shoppy, we are excited to introduce our brand-new collections
        that redefine fashion and style. As a fashion-forward destination, we
        consistently strive to bring you the freshest looks, the most vibrant
        colors, and the trendiest designs to elevate your wardrobe. Explore our
        latest collections and make a statement that is uniquely yours. <br />{" "}
        <br />
        Our Eveningwear Collection is a celebration of elegance and
        sophistication. Whether you have a special event on the horizon or just
        want to feel glamorous, our meticulously crafted evening gowns, sleek
        tuxedos, and dazzling accessories will make you the star of any
        occasion. It's time to shine.{" "}
      </p>
      <div className="row d-flex align-item-center justify-content-center flex-wrap m-0 mt-4">
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat1}
            className="w-100"
          />
          <span className="btn cloth-btn">Men's T-Shirt</span>
        </div>
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat2}
            className="w-100"
          />
          <span className="btn cloth-btn">Kids Wear</span>
        </div>
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat3}
            className="w-100"
          />
          <span className="btn cloth-btn">Womens Clothes</span>
        </div>
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat4}
            className="w-100"
          />
          <span className="btn cloth-btn">Hoodies</span>
        </div>
      </div>
      <div className="row d-flex align-item-center justify-content-center flex-wrap m-0 mt-4">
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat5}
            className="w-100"
          />
          <span className="btn cloth-btn">Jeans Pants</span>
        </div>
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat6}
            className="w-100"
          />
          <span className="btn cloth-btn">Men's Shirt</span>
        </div>
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat7}
            className="w-100"
          />
          <span className="btn cloth-btn">Chudies</span>
        </div>
        <div
          className="col-md-3 col-6 text-center mt-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img
            alt="Mohans Shoppy Collections Tirupur"
            src={cat8}
            className="w-100"
          />
          <span className="btn cloth-btn">Frogs</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;

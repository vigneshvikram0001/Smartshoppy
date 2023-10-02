import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import about1 from "./images/about-1.jpg";
import about2 from "./images/about-2.jpg";
import about3 from "./images/about-3.jpg";
import img1 from "./images/card2.png";


function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="about">
      <div className="about-row-1 d-flex justify-content-between gap-4">
        <div className="about-gallery d-flex aligns-item-center ">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="row gap-3">
              <div
                className="col-12"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img src={about1} alt="mohans shoppy shop" />
              </div>
            </div>
            <div className="row gap-3">
              <div className="col-12">
                <img
                  src={about2}
                  alt="mohans shoppy shop"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col-12">
                <img
                  src={about3}
                  alt="mohans shoppy shop"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="about-content p-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2
            className="fw-bold mt-5 text-center sub-head"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            About Us
            <span className="h2-line text-center"></span>
          </h2>
          <p className="para">
            At Smart Shoppy, we believe that fashion is not just about clothing;
            it's a reflection of your individuality and a means of expressing
            your unique style. We are your one-stop destination for all things
            fashion, where trend meets affordability, and quality meets comfort.
          </p>
          <p className="para">
            Our curated collection of clothing and accessories showcases the
            latest trends from around the world. Whether you're looking for
            casual wear to elevate your everyday style, formal attire for a
            special occasion, or statement pieces to make heads turn, Smart
            Shoppy has it all. We keep a keen eye on the ever-evolving fashion
            landscape to ensure that our customers are always ahead of the
            curve. Quality is at the heart of everything we do. We source our
            products from trusted suppliers, ensuring that every item in our
            store meets the highest standards. From the softest fabrics to the
            finest craftsmanship, our commitment to quality is unwavering. When
            you shop at Smart Shoppy, you can be confident that you're investing
            in pieces that will stand the test of time.
          </p>
          <Link to="/Smartshoppy/contact" className="mt-5">
            <button className="btn" type="button">
              Contact us <RiArrowRightDoubleFill className="mb-1 fs-4" />
            </button>
          </Link>
        </div>
      </div>
      <div className="home-card">
        <img src={img1} alt="Mohans shoppy Offers" />
      </div>
    </div>
  );
}

export default About;

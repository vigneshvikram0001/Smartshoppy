import React from "react";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import "../css/arrival.css";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function NewArrival() {
  return (
    <div id="newArrival">
      <div className="container">
        <h2
          className="fw-bold mt-5 text-center sub-head"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          #New Arrival
          <span className="h2-line text-center"></span>
        </h2>
        <p className="para" data-aos="fade-right" data-aos-duration="1000">
          Smart Shoppy is excited to unveil our latest arrivals that are sure to
          elevate your style game. From trendy streetwear to elegant evening
          attire, our new collection has something for everyone. Be the first to
          rock the season's hottest looks, from bold patterns to timeless
          classics. Explore the latest in fashion and make a statement that's
          uniquely you. Shop now at Smart Shoppy and stay ahead of the curve.
          Don't miss out on the fashion frenzy!
          <br />
          <br />
          <span data-aos="fade-right" data-aos-duration="1000">
            There are separate floors for each purchase categories which are
            guided by our friendly staff members. For customer convenience and
            hassle-free shopping, recently whatsapp video call order booking is
            introduced for both locations. The customer can use their smartphone
            at shop right from the favorite location and most feel which is
            useful at most times.
          </span>
        </p>
        <div className="row mt-5 pb-5">
          <div className="col" data-aos="zoom-out" data-aos-duration="1000">
            <img alt="Mohans Shoppy New Arrival Dresses" src={one} />
          </div>
          <div
            className="col"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img alt="Mohans Shoppy New Arrival Dresses" src={two} />
          </div>
          <div
            className="col"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <img alt="Mohans Shoppy New Arrival Dresses" src={three} />
          </div>
          <div
            className="col"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <img alt="Mohans Shoppy New Arrival Dresses" src={four} />
          </div>
        </div>
      </div>
      <Link
        to="/Smartshoppy/categories"
        className="d-flex align-item-center justify-content-center mt-5"
      >
        <button className="btn" type="button">
          View More <RiArrowRightDoubleFill className="mb-1 fs-4" />
        </button>
      </Link>
    </div>
  );
}

export default NewArrival;

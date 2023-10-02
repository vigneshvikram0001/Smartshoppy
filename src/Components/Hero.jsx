import React from "react";
import "../css/hero.css";
import car1 from "./images/car1.jpg";
import car2 from "./images/car2.jpg";
import car3 from "./images/car3.jpg";
import show1 from "./images/show1.jpg";
import show2 from "./images/show2.jpg";
import show3 from "./images/show3.jpg";
import show4 from "./images/show4.jpg";

function Hero() {
  return (
    <div>
      {/* hero */}
      <div
        id="carouselMaterialStyle"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner rounded-5 shadow-4-strong">
          <div className="carousel-item active">
            <img
              alt="Mohans Shoppy Tirupur"
              src={car1}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              alt="Mohans Shoppy Tirupur"
              src={car2}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              alt="Mohans Shoppy Tirupur"
              src={car3}
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* hero end */}
      {/* gallery card */}
      <div className="gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-duration="1000">
              <img alt="Mohans Shoppy Tirupur" src={show1} class />
            </div>
          </div>
          <div className="row gallery-min">
            <div className="col" data-aos="flip-right" data-aos-duration="1000">
              <img alt="Mohans Shoppy Tirupur" src={show2} />
            </div>
            <div className="col" data-aos="flip-right" data-aos-duration="1000">
              <img alt="Mohans Shoppy Tirupur" src={show3} />
            </div>
            <div className="col" data-aos="flip-right" data-aos-duration="1000">
              <img alt="Mohans Shoppy Tirupur" src={show4} />
            </div>
          </div>
        </div>
      </div>
      {/* gallery card */}
      
    </div>
  );
}

export default Hero;

import React from "react";
import { RiWhatsappLine, RiPhoneLine, RiMapPinUserLine } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <footer className="text-light">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="w-100 py-3">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <RiPhoneLine className="fs-1 mb-3 footer-icon" />
                  </div>
                  <div className="text">
                    <span>+91 9876****54</span>
                    <br />
                    <span>+91 9876****54</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="w-100 py-3">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <RiWhatsappLine className="fs-1 mb-3 footer-icon" />
                  </div>
                  <div className="text">
                    <span>+91 965*****77</span>
                    <br/>
                    <span>+91 972*****88</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="w-100 py-3">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <RiMapPinUserLine className="fs-1 mb-3 footer-icon" />
                  </div>
                  <div className="text">
                    <span>
                      53, Anna Nagar, 3rd street, Chennai - 600 001
                    </span>
                    <br />
                    <span>
                      134, Peelamedu, Hopes Stop, Coimbatore - 641 001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 border-top w-100">
            <div className="col-12 mb-md-0">
              <p className="copyright mb-0 text-center mt-3 mb-3">
                &copy; Copyright 2023 Smart Shoppy. All rights reserved.
                Powered by{" "}
                <a
                  href="/Smartshoppy"
                  className="text-light fw-bold"
                  rel="noreferrer"
                >
                  Vignesh
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

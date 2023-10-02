import React, { useEffect } from "react";
import "../css/contact.css";
import {
  RiMapPinLine,
  RiWhatsappLine,
  RiShoppingBag3Fill,
  RiPhoneLine,
} from "react-icons/ri";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact mb-5" id="contact">
      <h2
        className="fw-bold mt-5 text-center sub-head"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        Contact Us
        <span className="h2-line text-center"></span>
      </h2>
      <div className="contact-content">
        <div className="contact-1 con">
          <h3 className="fw-bold mb-4">
            Coimbatore Shop Location <RiShoppingBag3Fill className="mb-1" />
          </h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.215993163782!2d77.00526054599604!3d11.034575626083182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85824c7646fcb%3A0x3cbee12a8c82fcb9!2sPeelamedu%2C%20Maheshwari%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1695813194898!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="map1"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-12 col-md-6 mt-4">
              <h4>
                <RiMapPinLine className="mb-2 me-2" />
                Address:
              </h4>
              No 134, Peelamedu, Hopes Stop, Coimbatore - 641 001, Tamilnadu
              <h4 className="mt-5">
                <RiWhatsappLine className="mb-1 me-2" />
                For WhatsApp Video Call Orders :
              </h4>
              +91 9583****98
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contact-1">
          <h3 className="fw-bold pb-3">
            Chennai Shop Location <RiShoppingBag3Fill className="mb-1" />
          </h3>
          <div className="row">
            <div className="col-12 col-md-6 mt-4">
              <h4>
                <RiMapPinLine className="mb-2 me-2" />
                Address:
              </h4>
              53, Anna Nagar, 3rd street, Chennai - 600 001, Tamilnadu
              <h4 className="mt-5">
                <RiPhoneLine className="mb-1 me-2" />
                General Enquiries:
              </h4>
              +91 9962****93
              <h4 className="mt-5">
                <RiWhatsappLine className="mb-1 me-2" />
                For WhatsApp Video Call Orders :
              </h4>
              +91 96930***08
            </div>
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.58337563829!2d80.19728679654331!3d13.089941945780383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695813158660!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="map2"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

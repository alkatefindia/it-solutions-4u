import React from "react";
import "../styles/Footer.css";
import LogoDark from "../images/logo_black.png";
import PayCard from "../images/footer_payment.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
  faTty,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-parent">
      <hr />
      <div className="footer-cover">
        <div className="footer-logo-section">
          <img src={LogoDark} alt="error" />
          <p>
            Al Katef iTsolutions is a global IT solutions company based UAE,
            with over 20 years experience in IT service, printer service,
            digital marketing.
          </p>
          <div class=" soc-med-i d-flex justify-content-between  fs-5 align-items-center">
            <p class="icons"><a href="https://www.facebook.com/people/ITsolutions4uco/100086401916459/">
              <i class="fa-brands fa-facebook"></i></a>
            </p>
            <p class="icons"><a href="https://www.instagram.com/alkatefitsolutions/">
              <i class="fa-brands fa-instagram"></i></a>
            </p>
            <p class="icons">
              <a href="https://www.linkedin.com/company/al-katef-it-solutions/">
              <i class="fa-brands fa-linkedin"></i></a>
            </p>
            <p class="icons"><a href="https://twitter.com/alkatefit">
              <i class="fa-brands fa-x-twitter"></i></a>
            </p>
            <p class="icons"><a href="https://www.reddit.com/user/Alkatef/">
              <i class="fa-brands fa-reddit"></i></a>
            </p>
          </div>
        </div>

        <div className="footer-product-section">
          <p className="footer-section-title">PRODUCTS</p>
          <div className="footer-links-flex">
            <Link className="footer-links-flex-link">Printer</Link>
            <Link className="footer-links-flex-link">CCTV</Link>
            <Link className="footer-links-flex-link">PABX</Link>
            <Link className="footer-links-flex-link">Biometrics</Link>
            <Link className="footer-links-flex-link">Flat Panel</Link>
          </div>
        </div>
        <div className="footer-links-section">
          <p className="footer-section-title">USEFUL LINKS</p>
          <div className="footer-links-flex">
            <Link className="footer-links-flex-link">Rental</Link>
            <Link to="/terms-and-conditions" className="footer-links-flex-link">
              T&Cs
            </Link>
            <Link className="footer-links-flex-link">Sitemap</Link>
            <Link to="/privacy-and-policy" className="footer-links-flex-link">
              Privacy and Policies
            </Link>
            <Link to="/contact" className="footer-links-flex-link">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer-contact-section">
          <p className="footer-section-title">CONTACT US</p>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faHouse} /> Mussafah, Abu Dhabi, UAE
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faEnvelope} /> sales@itsolutions4u.co
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faPhone} /> +971 55 644 9916
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faTty} /> +971 2 552 4336
          </div>
          <img className="" src={PayCard} alt="ERR" />
        </div>
      </div>
      <div className="footer-line-parent">
        <hr className="footer-line" />
      </div>
      <div className="footer-copyright-section">
        <p>
          &copy; 2023 itsolutions4u.co All rights reserved. Designed by AL KATEF
          IT SOLUTIONS
        </p>
      </div>
    </div>
  );
}

export default Footer;

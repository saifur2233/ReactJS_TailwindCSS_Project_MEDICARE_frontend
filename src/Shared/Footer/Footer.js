import React from "react";
import { Link } from "react-router-dom";
import FooterImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-12 p-10 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Branding
          </Link>
          <Link to="" className="link link-hover">
            Design
          </Link>
          <Link to="" className="link link-hover">
            Marketing
          </Link>
          <Link to="" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="link link-hover">
            About us
          </Link>
          <Link to="" className="link link-hover">
            Contact
          </Link>
          <Link to="" className="link link-hover">
            Jobs
          </Link>
          <Link to="" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover">
            Terms of use
          </Link>
          <Link to="" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <div
        style={{ background: `url(${FooterImg})` }}
        className="p-6 text-center"
      >
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </>
  );
};

export default Footer;

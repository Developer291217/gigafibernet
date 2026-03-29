import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer id="footer" className="footer position-relative dark-background">

  <div className="container footer-top">
    <div className="row gy-4 align-items-start">

            <div className="col-lg-4 col-md-6 footer-about">
        <Link to="/">
          <img className="logo-img" src="assets/img/misc/Logo.jpg" alt="" />
        </Link>

        <div className="footer-contact pt-3">
          <p align="justify">
            We are providing a high-speed fiber broadband service provider delivering
            reliable, stable, and unlimited internet connectivity for homes and
            businesses through advanced fiber infrastructure.
          </p>
        </div>
      </div>

         <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><Link to="/Broadband">Broadband</Link></li>
          <li><Link to="/Ill">ILL</Link></li>
          <li><Link to="/Networking">Networking</Link></li>
          <li><Link to="/Cctv">CCTV</Link></li>
        </ul>
      </div>

      
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Plans</h4>
        <ul>
          <li><Link to="/OttPlans">OTT Plans</Link></li>
          <li><Link to="/RegularPlans">Regular Plans</Link></li>
          <li><Link to="/BusinessPlans">Business Plans</Link></li>
        </ul>
      </div>

    </div>
  </div>

  <div className="container copyright text-center mt-4">
    <p>
      © <span>GIGA FIBERNET All Rights Reserved. &nbsp;|&nbsp;
      <a href="#">Terms of service</a> &nbsp;|&nbsp;
      <a href="#">Privacy policy</a></span>
    </p>
  </div>

</footer>
  );
};

export default Footer;
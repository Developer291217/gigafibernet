import React from 'react';

const Footer = () => {
  return (
   <footer id="footer" className="footer position-relative dark-background">

  <div className="container footer-top">
    <div className="row gy-4 align-items-start">

            <div className="col-lg-4 col-md-6 footer-about">
        <a href="index.html" >
          <img className="logo-img" src="assets/img/misc/Logo.jpg" alt="" />
        </a>

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
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#">Broadband</a></li>
          <li><a href="#">ILL</a></li>
          <li><a href="#">Networking</a></li>
          <li><a href="#">CCTV</a></li>
        </ul>
      </div>

      
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Plans</h4>
        <ul>
          <li><a href="#">OTT Plans</a></li>
          <li><a href="#">Regular Plans</a></li>
          <li><a href="#">Business Plans</a></li>
        </ul>
      </div>

    </div>
  </div>

  <div className="container copyright text-center mt-4">
    <p>
      © <span>GIGA FIBERNET All Rights Reserved. |
      <a href="#">Terms of service</a> |
      <a href="#">Privacy policy</a></span>
    </p>
  </div>

</footer>
  );
};

export default Footer;
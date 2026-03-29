import React from 'react';
 import { useRef, useEffect } from 'react';
 import { Link } from "react-router-dom";


const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 100) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header id="header" className="header fixed-top dark-background">

    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a
              href=""><span className="__cf_email__"
                >siva@gigafibernet.co.in</span></a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 99493 29002</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-whatsapp"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div className="branding d-flex align-items-center dark-background">

      <div className="container position-relative d-flex align-items-center justify-content-between dark-background">
        <Link to="/" className="logo d-flex align-items-center">
          <img className="Logo" src="/assets/img/misc/Logo.jpg" alt="Logo" />
         </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active"><strong>Home</strong></Link></li>
            <li><a href="#about"><strong>About</strong></a></li>
           <li className="dropdown"><a href="#"><span><strong>Our Plans</strong></span> <i
                  className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li> <Link to="/OttPlans">OTT Plans</Link></li>
                <li><Link to="/RegularPlans">Regular Plans</Link></li>
                <li><Link to ="/BusinessPlans">Business Plans</Link></li>
              </ul>
            </li>
            
            <li className="dropdown"><a href="#"><span><strong>Services</strong></span> <i
                  className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Broadband</a></li>
                <li><Link to="/Ill">ILL</Link></li>
                <li><Link to ="/Networking">NetWorking</Link></li>
                <li><Link to ="/CCTV">CCTV</Link></li>
              </ul>
            </li>
             <li><Link to="/Contact"><strong>Contact</strong></Link></li>

            <li className="nav-btn">
              <Link to="/Contact" className="btn btn-primary get-connection-btn">
                Get New Connection
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>
  );
};

export default Header;
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <main className="main">
 <section id="hero" className="banner-carousel">

      <div className="carousel-container">

         <div className="carousel-slide active">
          <img src="assets/img/misc/sample1.jpg" className="banner-img" />

          <div className="banner-overlay">
            <div className="banner-content">
              <h3 style={{marginBottom: "2px"}}>Welcome to </h3>
             <h2>
  <span style={{ backgroundColor: "red", margin: "0px" }}>GIGA FIBERNET</span>
</h2>
<h4 style={{ marginBottom: "20px", marginTop: "-10px" }}>
  Ultra-Fast Fiber Built for Real Life
</h4>
              <p>
                GIGA FIBERNET delivers next-generation fiber broadband with lightning speeds, unlimited data, and
                rock-solid reliability. Stream, work, game, and connect without buffering or interruptions
              </p>

              <div className="hero-buttons">
                <Link to="/Contact" className="btn btn-primary">Get New Connection</Link>
                <Link to="/OttPlans" className="btn btn-primary">View Plans</Link>
              </div>
            </div>
          </div>
        </div>

         <div className="carousel-slide">
          <img src="assets/img/misc/sample2.jpg" className="banner-img" />

          <div className="banner-overlay">
            <div className="banner-content">
              <h2 align="center" className="text-center">20+ OTT Platforms <br/> One Fiber Connection</h2>
             <p style={{ fontSize: "15px" }}>GIGA FIBERNET brings you access to 20+ popular OTT platforms, all powered by
                our high-speed pure fiber network. Stream movies, TV shows, live sports, and originals seamlessly in HD
                and 4K—without buffering or interruptions.<br/>Enjoy uninterrupted entertainment for the whole family
                with unlimited data, stable speeds, and reliable connectivity</p>


              <div className="hero-buttons">
                <Link to="/Contact" className="btn btn-primary">Get New Connection</Link>
                <Link to="/OttPlans" className="btn btn-primary">View Plans</Link>
              </div>

            </div>

          </div>
        </div>

         <div className="carousel-slide">
          <img src="assets/img/misc/sample3.jpg" className="banner-img" />

          <div className="banner-overlay">
            <div className="banner-content">
              <h2>Local Support <br/> You Can Trust</h2>
              <p>ELURU-based team ready to help you 24/7.</p>

              <div className="hero-buttons">
                <a href="#" className="btn btn-primary">Get New Connection</a>
                <a href="#" className="btn btn-primary">View Plans</a>
              </div>

            </div>
          </div>
        </div>

        <div className="carousel-dots">
          <span className="dot active" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>

              <div className="hero-waves">
                
                  <path className="wave wave1" d="M0,30 C360,60 720,0 1080,40 C1260,60 1380,20 1440,30 
                       C1800,60 2160,0 2520,40 C2700,60 2820,20 2880,30 
                       L2880,80 L0,80 Z"></path>
              
                  <path className="wave wave2" d="M0,40 C360,10 720,70 1080,30 C1260,10 1380,50 1440,40
                       C1800,10 2160,70 2520,30 C2700,10 2820,50 2880,40
                       L2880,80 L0,80 Z"></path>
              
                  <path className="wave wave3" d="M0,45 
                     C360,25 720,45 1080,30 
                     C1260,22 1380,40 1440,35
                     C1800,25 2160,45 2520,30 
                     C2700,22 2820,40 2880,35
                     L2880,80 L0,80 Z">
                  </path>
               
              </div>
              </div>
    </section>

    

     <section className="elementor-section elementor-top-section elementor-element elementor-element-85a5293 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="85a5293" data-element_type="section" data-settings='{"background_background":"classic"}'>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fe37d1d"
          data-id="fe37d1d" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-d294135 elementor-widget elementor-widget-telnet_brand elh-el telnet_brand"
              data-id="d294135" data-element_type="widget" data-settings='{"design_style":"style_2"}'
              data-widget_type="telnet_brand.default">
              <div className="elementor-widget-container">
                <div className="tna-partner-1-area">
                  <div className="tna-partner-1-wrap">
                    <h5 className="tna-heading-1 title txa-split-text txa-split-in-up"></h5>
                      <h3 style={{
  marginTop: "-60px",
  color: "red",
  fontFamily: "Quicksand, sans-serif"
}}>20+ Free OTTs</h3>
                    <div className="tna-partner-1-logo-wrap">
                      <div className="tna-partner-1-logo">
                        <img decoding="async" src="./assets/img/OTTs/Aha.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/Prime.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/Etvwin.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/Disney.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/ott play.png" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/sony.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/Zee5.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/youtube.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/sun nxt.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/Alt.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/discovery.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/voot.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/timesplay.png" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/vr.webp" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/runntv.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/distrotv.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/omtv.jpg" alt="" />
                        <img decoding="async" src="./assets/img/OTTs/ottlive.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 

    

    <section id="about" style= {{ marginTop: "-70px" }} class="about section">

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-5 align-items-center">

          <div class="col-lg-5 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
            <div class="content">
              <h2>About GIGA FIBERNET</h2>
              <p align = "justify">GIGA FIBERNET is a high-speed fiber broadband service provider dedicated
                to delivering reliable, stable, and uninterrupted internet connectivity. Built on pure fiber
                infrastructure, we focus on performance, consistency, and quality to meet the digital needs of modern
                homes and businesses.</p>
             

              <ul class="features-list">
                <li><i class="bi bi-check-circle-fill"></i><span>High-speed fiber internet for homes and
                    businesses.</span></li>
                <li><i class="bi bi-check-circle-fill"></i><span>Smooth browsing, streaming, and online work.</span>
                </li>
                <li><i class="bi bi-check-circle-fill"></i><span>Unlimited data with stable and reliable speeds.</span>
                </li>
                <li><i class="bi bi-check-circle-fill"></i><span>Supports multiple devices without interruption.</span>
                </li>
                <li><i class="bi bi-check-circle-fill"></i><span>Transparent plans with reliable local support.</span>
                </li>

              </ul>

              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>

          <div class="col-lg-7 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
            <div class="image-composition">
              <div class="image-main">
                <img src="assets/img/about/About3.jpg" alt="Modern office with a team working" class="img-fluid" loading="lazy" />
              </div>
              <div class="image-secondary">
                <img src="assets/img/about/About2.jpg" alt="Collaborative discussion" class="img-fluid" loading="lazy" />
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>



      <section id="portfolio" class="portfolio section">

     
      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Why Choose GIGA FIBERNET..?</h2>
        <p style={{ color: "#666" }}>Internet Services Built for Everyday Use</p>
      </div> 

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
           

          <div class="row gy-4 isotope-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" style={{ position: "relative" , height: "907.666px" }}>
            <div class="col-xl-4 col-lg-6 portfolio-item isotope-item filter-web" style={{ position: "absolute" , left: "0px" , top: "0px" }}>
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio1.png" alt="Creative Web Project" class="img-fluid" loading="lazy" />
                  <div class="portfolio-hover">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio1.png" class="glightbox action-btn preview-btn" title="Preview Project">
                        <i class="bi bi-eye"></i>
                      </a>
                      <a href="#" class="action-btn details-btn" title="View Details">
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">  
                  <h3>High Speed Fiber Internet</h3>
                  <p>Experience fast and stable fiber connectivity designed for smooth browsing, streaming, and everyday digital use.</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 portfolio-item isotope-item filter-mobile" style={{ position: "absolute" , left: "379.99px" , top: "0px" }}>
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio2.jpg" alt="Mobile App Project" class="img-fluid" loading="lazy" />
                  <div class="portfolio-hover">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio2.jpg" class="glightbox action-btn preview-btn" title="Preview Project">
                        <i class="bi bi-eye"></i>
                      </a>
                      <a href="#" class="action-btn details-btn" title="View Details">
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <h3>Fiber to the Home</h3>
                  <p>Direct fiber connection to your home ensures consistent speeds and improved network reliability.</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 portfolio-item isotope-item filter-branding" style={{ position: "absolute" , left: "759.98px" , top: "0px" }}>
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio3.jpg" alt="Branding Project" class="img-fluid" loading="lazy" />
                  <div class="portfolio-hover">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio3.jpg" class="glightbox action-btn preview-btn" title="Preview Project">
                        <i class="bi bi-eye"></i>
                      </a>
                      <a href="#" class="action-btn details-btn" title="View Details">
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <h3>Unlimited Data</h3>
                  <p>Browse, stream, and download without worrying about limits or slowdowns so Enjoy truly unlimited internet.</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 portfolio-item isotope-item filter-ui" style={{ position: "absolute" , left: "0px" , top: "464.333px" }}>
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio4.jpg" alt="UI/UX Project" class="img-fluid" loading="lazy" />
                  <div class="portfolio-hover">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio4.jpg" class="glightbox action-btn preview-btn" title="Preview Project">
                        <i class="bi bi-eye"></i>
                      </a>
                      <a href="#" class="action-btn details-btn" title="View Details">
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <h3>Seamless Wi-Fi</h3>
                  <p>Enjoy reliable Wi-Fi coverage across your home with smooth performance on multiple devices.</p> 
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 portfolio-item isotope-item filter-web" style={{ position: "absolute" , left: "379.99px" , top: "464.333px" }}>
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio5.jpg" alt="E-commerce Platform" class="img-fluid" loading="lazy" />
                  <div class="portfolio-hover">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio5.jpg" class="glightbox action-btn preview-btn" title="Preview Project">
                        <i class="bi bi-eye"></i>
                      </a>
                      <a href="#" class="action-btn details-btn" title="View Details">
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content"> 
                  <h3>OTT and Live TV Services</h3>
                  <p>Access live TV channels and popular OTT platforms through convenient add-on services.</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 portfolio-item isotope-item filter-mobile" style={{ position: "absolute", left: "759.98px" , top: "464.333px" }}>
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio6.jpg" alt="Fintech Mobile App" class="img-fluid" loading="lazy" />
                  <div class="portfolio-hover">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio6.jpg" class="glightbox action-btn preview-btn" title="Preview Project">
                        <i class="bi bi-eye"></i>
                      </a>
                      <a href="#" class="action-btn details-btn" title="View Details">
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <h3>Local Customer Support</h3>
                  <p>Receive prompt assistance from our dedicated local support team whenever you need help.</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

    </section>
    

    <section className="plans-section">
  <div className="plans-container">

    <h2 className="plans-title">Choose Your Perfect Plan</h2>
    <p className="plans-sub">Flexible plans designed for every home and business</p>

    <div className="plans-grid">

       <div className="plan-card">
        <div className="plan-icon">
          <i className="bi bi-tv"></i>
        </div>

        <h3>OTT Bundled Plans</h3>
        <p className="plan-desc">
          Get premium OTT platforms bundled with your broadband connection.
          Enjoy unlimited entertainment with more 20+ OTT platforms.
        </p>

        <ul className="plan-features">
          <li>Multiple OTT platforms included</li>
          <li>Starting from ₹599*/month</li>
          <li>Speeds from 60 Mbps to 500 Mbps</li>
        </ul>

        <Link to="/OttPlans" className="plan-btn">View OTT Plans →</Link>
      </div>

       <div className="plan-card">
        <div className="plan-icon">
          <i className="bi bi-wifi"></i>
        </div>

        <h3>Regular Broadband Plans</h3>
        <p className="plan-desc">
          High-speed internet with flexible billing options.
          Choose from monthly, quarterly, or yearly plans.
        </p>

        <ul className="plan-features">
          <li>Flexible billing cycles</li>
          <li>Starting from ₹424*/month</li>
          <li>Speeds from 40 Mbps to 500 Mbps</li>
        </ul>

        <Link to="/RegularPlans" className="plan-btn">View Regular Plans →</Link>
      </div>

       <div className="plan-card">
        <div className="plan-icon">
          <i className="bi bi-briefcase"></i>
        </div>

        <h3>Business Plans</h3>
        <p className="plan-desc">
          Dedicated internet solutions for businesses with priority support
          and enterprise-grade reliability.
        </p>

        <ul className="plan-features">
          <li>Priority technical support</li>
          <li>Static IP available</li>
          <li>SLA guaranteed uptime</li>
          <li>Custom enterprise plans</li>
        </ul>

        <Link to="/BusinessPlans" className="plan-btn">View Business Plans →</Link>
      </div>

    </div>
  </div>
</section>


    


    

    <section className="section-ptd">
      <div className="container">
        <div className="entertaiment-wrapper">
          <div className="entertaiment-left">
            <h2 className="heading56">Enjoy unlimited <span>Entertainment </span></h2>
            <p>Enjoy 400+ live TV channels and multiple OTT apps as optional add-ons with GIGA FIBERNET</p>
            <br/> <Link to="/Contact" className="btn btn-danger text-uppercase d-lg-block d-none mg-t-48 act_fibernetNCform"
              data-bs-toggle="modal" data-bs-target="#checkAbailabilityModal">
              Get a connection </Link>
          </div>
          <div className="entertaiment-right">
            <div className="entertaiment-img-wrapper">
              <picture>
                <source media="(min-width: 768px)" srcset="assets/img/about/Ent.jpg" />
                <source media="(min-width: 320px)" srcset="assets/img/about/Ent.jpg" />
                <img src="assets/img/about/Ent.jpg" alt="" width="697" height="394" loading="lazy" />
              </picture>
            </div>
            <br/>ton <button className="btn btn-danger text-uppercase w-100 d-block d-lg-none act_fibernetNCform"
              data-bs-toggle="modal" data-bs-target="#checkAbailabilityModal">
              Get a connection </button>
          </div>
        </div>
      </div>
    </section>


    



    <section className="stats-strip">
  <div className="stats-container">

    <div className="stat-box">
      <div className="stat-icon">
        <i className="bi bi-rocket"></i>
      </div>
      <div className="stat-text">
        <h2>50+</h2>
        <p> BUSINESS CONNECTIONS</p>
      </div>
    </div>

    <div className="stat-box">
      <div className="stat-icon">
        <i className="bi bi-geo-alt"></i>
      </div>
      <div className="stat-text">
        <h2>20+</h2>
        <p>AREAS (ELURU)</p>
      </div>
    </div>

    <div className="stat-box">
      <div className="stat-icon">
        <i className="bi bi-broadcast"></i>
      </div>
      <div className="stat-text">
        <h2>99%</h2>
        <p>UPTIME RELIABILITY</p>
      </div>
    </div>

  </div>
</section>


   
    <section id="team" class="team section">

      
      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Executive Leadership</h2>
        <p style= {{ color: "#666" }}>Leading with purpose and building the future.</p>
      </div> 

      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-4">

          <div class="col-lg-6">
            <div class="team-intro aos-init aos-animate" data-aos="fade-right" data-aos-delay="150">
              <div class="intro-content">
                <h3>Meet Our Exceptional Team</h3>
                <p>Our team is made up of dedicated professionals committed to delivering reliable internet services and excellent customer support. Together, we work to ensure seamless connectivity, innovation, and customer satisfaction every day.</p>
                <div class="stats-row">
                  <div class="stat-item">
                    <span class="stat-number">10+</span>
                    <span class="stat-label">Team Members</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">15+</span>
                    <span class="stat-label">LCO's</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">20+</span>
                    <span class="stat-label">Areas (Eluru)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="team-grid aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
              <div class="member-hexagon aos-init aos-animate" data-aos="zoom-in" data-aos-delay="250">
                <div class="hexagon-inner">
                  <img src="assets/img/person/siva.png" alt="Team member" />
                  <div class="member-overlay">
                    <h5>T Siva</h5>
                    <span>Founder &amp; MD</span>
                    <div class="social-icons">
                      <a href="#"><i class="bi bi-linkedin"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="member-hexagon aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                <div class="hexagon-inner">
                  <img src="assets/img/person/mahesh.png" alt="Team member" />
                  <div class="member-overlay">
                    <h5>D Mahesh</h5>
                    <span>Manager</span>
                    <div class="social-icons">
                      <a href="#"><i class="bi bi-github"></i></a>
                      <a href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="member-hexagon aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">
                <div class="hexagon-inner">
                  <img src="assets/img/person/ravi.jpg" alt="Team member" />
                  <div class="member-overlay">
                    <h5>T Ravi Kumar</h5>
                    <span>Manager</span>
                    <div class="social-icons">
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-dribbble"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
   <section id="contact" className="contact section">
  {/* Section Title */}
  <div
    className="container section-title aos-init aos-animate"
    data-aos="fade-up"
  >
    <h2>Contact</h2>
    <p style={{ color: "#666" }}>
      Let’s connect. Share your query and our team will get back to you soon.
    </p>
  </div>
  {/* End Section Title */}
  <div
    className="container aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <div className="row align-items-center">
      <div
        className="col-lg-5 aos-init aos-animate"
        data-aos="fade-right"
        data-aos-delay={200}
      >
        <div className="contact-form-card">
          <div className="form-header">
            <div className="header-icon">
              <i className="bi bi-chat-dots-fill" />
            </div>
            <h5>Start Your New Connection Today</h5>
            <p>Share your details and we’ll contact you soon...</p>
          </div>
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Mobile Number"
                  required=""
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Enter your Area/Location?"
                required=""
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control"
                name="message"
                rows={4}
                placeholder="Any Additional Information or Question..."
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <button type="submit" className="submit-btn">
              <span>Send Request</span>
              <i className="bi bi-send-fill" />
            </button>
          </form>
        </div>
      </div>
      <div
        className="col-lg-7 aos-init aos-animate"
        data-aos="fade-left"
        data-aos-delay={200}
      >
        <div className="contact-info-area">
          <div className="contact-methods">
            <div
              className="method-card aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay={250}
            >
              <div className="card-icon">
                <i className="bi bi-envelope-at" />
              </div>
              <div className="card-content">
                <h5>Email Us</h5>
                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    style={{ color: "white" }}
                    className="__cf_email__"
                    data-cfemail="c1a9a4adadae81b1b3aea5b4a2b5a5a4acaeefa2aeac"
                  >
                    siva@gigafibernet.co.in
                  </a>
                </p>
                {/* <span class="response-time">Response in 2-4 hours</span> */}
              </div>
            </div>
            <div
              className="method-card aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="card-icon">
                <i className="bi bi-telephone" />
              </div>
              <div className="card-content">
                <h5>Contact Us</h5>
                <p>T Ravi: +91 99493 29002</p>
                <p>D Mahesh: +91 94400 74351</p>
                <p>T Siva: +91 83744 93331</p>
                <span className="response-time">Available 9AM - 6PM IST</span>
              </div>
            </div>
            <div
              className="method-card aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay={350}
            >
              <div className="card-icon">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="card-content">
                <h5>GIGA FIBERNET Office</h5>
                <p>
                  Bosubomma Road, Near Koppavelama Kalyana Mandapam,
                  <br /> Power Pet Area, Eluru, Andhra Pradesh, Pincode-534001
                </p>
                <span className="response-time">Open Monday - Saturday</span>
              </div>
            </div>
          </div>
          <br />
          <div
            className="additional-info mt-10 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="info-stats">
              <div className="stat-item">
                <div className="stat-number">24h</div>
                <div className="stat-label">Average Response</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default Home;
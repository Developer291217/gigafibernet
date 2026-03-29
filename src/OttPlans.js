import React from 'react';
 import { useRef, useEffect } from 'react';
 import { Link } from "react-router-dom";


const OttPlans = () => {
   
  return (
  <>
  <section className="network-hero-section">
  <div className="network-hero-content">
    <h1 className="network-hero-title">OTT Plans</h1>
     
  </div>
</section>
  <section className="plans-section">
    <div className="container">
      <div className="section-intro">
        <h2 className="section-title">Choose Your Entertainment Plan</h2>
        <p className="section-subtitle">
          Get premium OTT platforms bundled with high-speed broadband. Enjoy
          unlimited streaming with your favorite shows and movies.
        </p>
      </div>
      <div className="row" id="ott-plans">
        <div className="col-md-1" />
        <div
          className="col-md-5 plan-card"
          style={{ transform: "translateY(0px) scale(1)" }}
        >
          <div className="plan-speed">50 Mbps</div>
          <div className="plan-price">
            ₹524 + GST<span>/month</span>
          </div>
          <div className="plan-ott">
            <div className="plan-ott-label">OTT Platforms Included:</div>
            <div className="ott-logos">
              <img
                src="./assets/img/OTTs/sun nxt.jpg"
                alt="Sun NXT"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/sun nxt.jpg"
              />
              <img
                src="./assets/img/OTTs/Etvwin.jpg"
                alt="Etv Win"
                className="ott-logo"
                onerror="this.src='Etvwin.jpg"
              />
              <img
                src="./assets/img/OTTs/Zee5.jpg"
                alt="Zee5"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/Zee5.jpg"
              />
              <img
                src="../assets/img/OTTs/Aha.jpg"
                alt="AHA"
                className="ott-logo"
                onerror="this.src='../assets/img/OTTs/Aha.jpg"
              />
              <img
                src="../assets/img/OTTs/sony.jpg"
                alt="Sony"
                className="ott-logo"
                onerror="this.src='../assets/img/OTTs/sony.jpg"
              />{" "}
              + 8
            </div>
          </div>
          <Link to="/Contact"
            className="btn btn-primary get-connection-btn"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              background: "linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)"
            }}
          >
            Select Plan
          </Link>
        </div>
        <div
          className="col-md-5 plan-card"
          style={{ transform: "translateY(0px) scale(1)" }}
        >
          <div className="plan-speed">75 Mbps</div>
          <div className="plan-price">
            ₹699 + GST<span>/month</span>
          </div>
          <div className="plan-ott">
            <div className="plan-ott-label">OTT Platforms Included:</div>
            <div className="ott-logos">
              <img
                src="./assets/img/OTTs/hotstar.jpg"
                alt="Hot Star"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/hotstar.jpg"
              />
              <img
                src="./assets/img/OTTs/sony.jpg"
                alt="Sony"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/sony.jpg"
              />
              <img
                src="./assets/img/OTTs/Zee5.jpg"
                alt="Zee5"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/Zee5.jpg"
              />
              <img
                src="../assets/img/OTTs/Aha.jpg"
                alt="AHA"
                className="ott-logo"
                onerror="this.src='../assets/img/OTTs/Aha.jpg"
              />
              <img
                src="../assets/img/OTTs/Etvwin.jpg"
                alt="ETV WIN"
                className="ott-logo"
                onerror="this.src='../assets/img/OTTs/Etvwin.jpg"
              />{" "}
              + 9
            </div>
          </div>
          <Link to="Contact"
            className="btn btn-primary get-connection-btn"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              background: "linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)"
            }}
          >
            Select Plan
          </Link>
        </div>
        <div className="col-md-1" />
        <hr />
        <div className="col-md-1" />
        <div
          className="col-md-5 plan-card"
          style={{ transform: "translateY(0px) scale(1)" }}
        >
          <div className="plan-speed">100 Mbps</div>
          <div className="plan-price">
            ₹949 + GST<span>/month</span>
          </div>
          <div className="plan-ott">
            <div className="plan-ott-label">OTT Platforms Included:</div>
            <div className="ott-logos">
              <img
                src="./assets/img/OTTs/Prime.jpg"
                alt="PRIME"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/Prime.jpg"
              />
              <img
                src="./assets/img/OTTs/hotstar.jpg"
                alt="Hot Star"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/hotstar.jpg"
              />
              <img
                src="./assets/img/OTTs/sun nxt.jpg"
                alt="Sun NXT"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/sun nxt.jpg"
              />
              <img
                src="./assets/img/OTTs/Zee5.jpg"
                alt="Zee5"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/Zee5.jpg"
              />
              <img
                src="../assets/img/OTTs/Aha.jpg"
                alt="AHA"
                className="ott-logo"
                onerror="this.src='../assets/img/OTTs/Aha.jpg"
              />{" "}
              + 10
            </div>
          </div>
          <Link to="Contact"
            className="btn btn-primary get-connection-btn"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              background: "linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)"
            }}
          >
            Select Plan
          </Link>
        </div>
        <div
          className="col-md-5 plan-card"
          style={{ transform: "translateY(0px) scale(1)" }}
        >
          <div className="plan-speed">150 Mbps</div>
          <div className="plan-price">
            ₹1049 + GST<span>/month</span>
          </div>
          <div className="plan-ott">
            <div className="plan-ott-label">OTT Platforms Included:</div>
            <div className="ott-logos">
              <img
                src="./assets/img/OTTs/Prime.jpg"
                alt="PRIME"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/Prime.jpg"
              />
              <img
                src="./assets/img/OTTs/hotstar.jpg"
                alt="Hot Star"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/hotstar.jpg"
              />
              <img
                src="./assets/img/OTTs/sun nxt.jpg"
                alt="Sun NXT"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/sun nxt.jpg"
              />
              <img
                src="./assets/img/OTTs/Zee5.jpg"
                alt="Zee5"
                className="ott-logo"
                onerror="this.src='./assets/img/OTTs/Zee5.jpg"
              />
              <img
                src="../assets/img/OTTs/Aha.jpg"
                alt="AHA"
                className="ott-logo"
                onerror="this.src='../assets/img/OTTs/Aha.jpg"
              />{" "}
              + 10
            </div>
          </div>
          <Link to="/Contact"
            className="btn btn-primary get-connection-btn"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              background: "linear-gradient(135deg, #0066cc 0%, #00a8e8 100%)"
            }}
          >
            Select Plan
          </Link>
        </div>
        <div className="col-md-1" />
      </div>
      <div className="plan-notes">
        <p>
          <i className="fas fa-info-circle" /> <strong>Note:</strong> GST Extra
          | Router Free on 6 months plan &amp; above 50 mbps only | Conditions
          Apply
        </p>
      </div>
      {/* OTT Apps Info */}
      <div className="ott-info-section">
        <h3 className="section-title">Included OTT Platforms</h3>
        <p className="section-subtitle">
          Access to premium entertainment platforms with your broadband
          connection
        </p>
        <div className="ott-apps-grid">
          <div className="ott-app-card">
            <img
              src="assets/img/OTTs/amazon.png"
              alt="Amazon Prime Video"
              className="ott-app-logo"
            />
            <h4>Amazon Prime Video</h4>
            <p>Stream thousands of movies, TV shows, and original content</p>
          </div>
          <div className="ott-app-card">
            <img
              src="assets/img/OTTs/jiohotstar.png"
              alt="Disney+ Hotstar"
              className="ott-app-logo"
            />
            <h4>Jiohotstar</h4>
            <p>Watch Disney, Marvel, Star Wars, and live sports</p>
          </div>
          <div className="ott-app-card">
            <img
              src="assets/img/OTTs/Sonyliv.png"
              alt="Sony LIV"
              className="ott-app-logo"
            />
            <h4>Sony LIV</h4>
            <p>Indian entertainment with movies, TV shows, and live TV</p>
          </div>
          <div className="ott-app-card">
            <img
              src="assets/img/OTTs/Z5.png"
              alt="ZEE5"
              className="ott-app-logo"
            />
            <h4>ZEE5</h4>
            <p>Regional and Hindi content with live TV channels</p>
          </div>
          {/* <div class="ott-app-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Hungama_logo.svg" alt="Hungama" class="ott-app-logo">
              <h4>Hungama</h4>
              <p>Music and video streaming platform</p> */}
          {/* </div> */}
          <div className="ott-app-card">
            <img
              src="assets/img/OTTs/sunnxt.png"
              alt="Sun NXT"
              className="ott-app-logo"
            />
            <h4>Sun NXT</h4>
            <p>South Indian movies and TV shows</p>
          </div>
          {/* <div class="ott-app-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Lionsgate_Play_logo.svg" alt="Lionsgate Play" class="ott-app-logo">
              <h4>Lionsgate Play</h4>
              <p>Hollywood movies and TV series</p>
          </div>
      </div> */}
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link
              to="/OttPlans"
              className="btn btn-primary get-connection-btn"
            >
              View All OTT Apps Details <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="benefits-section">
    <div className="container">
      <h2 className="section-title">Why Choose OTT Bundled Plans?</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <i className="fas fa-money-bill-wave" />
          <h3>Save Money</h3>
          <p>
            Get OTT subscriptions worth thousands bundled with your broadband at
            no extra cost
          </p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-tv" />
          <h3>Multiple Platforms</h3>
          <p>
            Access 7+ premium OTT platforms with a single broadband connection
          </p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-infinity" />
          <h3>Unlimited Streaming</h3>
          <p>
            Stream as much as you want with unlimited data and no speed
            throttling
          </p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-users" />
          <h3>Family Entertainment</h3>
          <p>Perfect for families with content for all ages and preferences</p>
        </div>
      </div>
    </div>
  </section>
  <section className="cta-section">
    <div className="container">
      <div align="center" className="cta-content">
        <h2>Ready to Get Your OTT Bundled Plan?</h2>
        <p>Choose your plan and start streaming today</p>
        <Link to="/Contact" className="btn btn-primary get-connection-btn">
          Get New Connection
        </Link>
      </div>
    </div>
  </section>
  <div />
</>

  );
};

export default OttPlans;
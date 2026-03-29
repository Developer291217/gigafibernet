const Cctv = () => {
  return (
    <>
  {/* HERO SECTION */}
  <section className="cctv-hero-section">
    <div className="cctv-hero-content">
      <h1 className="cctv-hero-title">CCTV Surveillance Solutions</h1>
      <p className="cctv-hero-subtitle">
        End-to-end CCTV surveillance systems for corporate offices, factories,
        schools, colleges, universities, and campuses with complete planning,
        installation, configuration, and support using modern IP-based
        technology.
      </p>
    </div>
  </section>
  {/* INTRO SECTION */}
  <section className="cctv-intro-section">
    <div className="cctv-intro-container">
      <h2 className="cctv-intro-title">Modern IP-Based CCTV Technology</h2>
      <p className="cctv-intro-text">
        Our solutions enhance safety, security, monitoring, and compliance,
        delivering reliable 24×7 surveillance for businesses and institutions.
      </p>
    </div>
  </section>
  {/* SERVICES SECTION */}
  <section className="cctv-feature-section">
    <h2 className="cctv-feature-title">Our CCTV Services</h2>
    <div className="cctv-feature-container">
      {/* Camera Types */}
      <div className="cctv-feature-card">
        <div className="cctv-feature-icon">
          <i className="fas fa-video" />
        </div>
        <h3>Types of CCTV Cameras</h3>
        <ul className="cctv-feature-points">
          <li>IP Cameras (HD / 4MP / 8MP)</li>
          <li>Dome Cameras – indoor use</li>
          <li>Bullet Cameras – outdoor</li>
          <li>PTZ Cameras – zoom control</li>
          <li>Night Vision / Infrared</li>
          <li>AI Smart Cameras (optional)</li>
        </ul>
      </div>
      {/* Corporate Applications */}
      <div className="cctv-feature-card">
        <div className="cctv-feature-icon">
          <i className="fas fa-building" />
        </div>
        <h3>Corporate &amp; Industrial Projects</h3>
        <ul className="cctv-feature-points">
          <li>Corporate offices &amp; IT parks</li>
          <li>Manufacturing &amp; warehouses</li>
          <li>Banks &amp; financial institutions</li>
          <li>Retail chains &amp; malls</li>
          <li>Hospitals &amp; commercial buildings</li>
        </ul>
      </div>
      {/* Coverage Areas */}
      <div className="cctv-feature-card">
        <div className="cctv-feature-icon">
          <i className="fas fa-map-marker-alt" />
        </div>
        <h3>Coverage Areas</h3>
        <ul className="cctv-feature-points">
          <li>Entry &amp; exit points</li>
          <li>Office floors &amp; workspaces</li>
          <li>Server rooms &amp; data centers</li>
          <li>Parking areas</li>
          <li>Warehouses &amp; loading bays</li>
        </ul>
      </div>
      {/* Corporate Benefits */}
      <div className="cctv-feature-card">
        <div className="cctv-feature-icon">
          <i className="fas fa-shield-alt" />
        </div>
        <h3>Benefits for Companies</h3>
        <ul className="cctv-feature-points">
          <li>24×7 surveillance recording</li>
          <li>Theft prevention &amp; protection</li>
          <li>Employee safety monitoring</li>
          <li>Audit &amp; investigation support</li>
          <li>Remote mobile &amp; web monitoring</li>
        </ul>
      </div>
      {/* Education Institutions */}
      <div className="cctv-feature-card">
        <div className="cctv-feature-icon">
          <i className="fas fa-graduation-cap" />
        </div>
        <h3>Educational Institutions</h3>
        <ul className="cctv-feature-points">
          <li>Schools</li>
          <li>Colleges &amp; universities</li>
          <li>Coaching centers</li>
          <li>Hostels &amp; residential campuses</li>
        </ul>
      </div>
      {/* Education Benefits */}
      <div className="cctv-feature-card">
        <div className="cctv-feature-icon">
          <i className="fas fa-user-shield" />
        </div>
        <h3>Benefits for Education Sector</h3>
        <ul className="cctv-feature-points">
          <li>Student &amp; staff safety</li>
          <li>Unauthorized access prevention</li>
          <li>Exam monitoring</li>
          <li>Discipline &amp; incident control</li>
          <li>Parent &amp; management assurance</li>
        </ul>
      </div>
    </div>
  </section>
</>

  );
};
export default Cctv;
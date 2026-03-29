const Networking = () => {
  return (
    <>
  {/* HERO SECTION */}
  <section className="network-hero-section">
    <div className="network-hero-content">
      <h1 className="network-hero-title">Networking</h1>
      <p className="network-hero-subtitle">
        Networking &amp; IT Infrastructure Solutions designed to deliver secure,
        scalable, and high-performance connectivity for enterprises, campuses,
        corporate offices, and industrial environments.
      </p>
    </div>
  </section>
  {/* INTRO SECTION */}
  <section className="network-intro-section">
    <div className="network-intro-container">
      <div className="network-intro-content">
        <h2 className="network-intro-title">
          Complete Networking &amp; IT Infrastructure Services
        </h2>
        <p className="network-intro-text">
          We provide end-to-end networking solutions including server rack
          installation, biometric access systems, enterprise Wi-Fi deployment,
          and advanced network security management.
        </p>
      </div>
    </div>
  </section>
  {/* SERVICES SECTION */}
  <section className="network-feature-section">
    <h2 className="network-feature-title">Our Networking Services</h2>
    <div className="network-feature-container">
      <div className="network-feature-card">
        <div className="network-feature-icon">
          <i className="fas fa-server" />
        </div>
        <h3>Server &amp; Rack Installation</h3>
        <ul className="network-feature-points">
          <li>19"–42" rack installation</li>
          <li>Wall &amp; floor mount solutions</li>
          <li>Cable management &amp; labeling</li>
          <li>PDU &amp; grounding</li>
          <li>Cooling &amp; ventilation setup</li>
        </ul>
      </div>
      <div className="network-feature-card">
        <div className="network-feature-icon">
          <i className="fas fa-fingerprint" />
        </div>
        <h3>Biometric &amp; Access Control</h3>
        <ul className="network-feature-points">
          <li>Fingerprint &amp; facial recognition</li>
          <li>RFID / smart card systems</li>
          <li>Door access integration</li>
          <li>Attendance integration</li>
          <li>Multi-location connectivity</li>
        </ul>
      </div>
      <div className="network-feature-card">
        <div className="network-feature-icon">
          <i className="fas fa-wifi" />
        </div>
        <h3>Campus Wi-Fi Solutions</h3>
        <ul className="network-feature-points">
          <li>High-density user support</li>
          <li>Seamless roaming</li>
          <li>Centralized management</li>
          <li>Guest Wi-Fi portal</li>
          <li>Bandwidth control</li>
        </ul>
      </div>
      <div className="network-feature-card">
        <div className="network-feature-icon">
          <i className="fas fa-broadcast-tower" />
        </div>
        <h3>Enterprise Wi-Fi APs</h3>
        <ul className="network-feature-points">
          <li>Indoor &amp; outdoor AP deployment</li>
          <li>Wi-Fi 5 / 6 / 6E solutions</li>
          <li>Heat-map planning</li>
          <li>Load balancing</li>
          <li>Firewall integration</li>
        </ul>
      </div>
      <div className="network-feature-card">
        <div className="network-feature-icon">
          <i className="fas fa-shield-halved" />
        </div>
        <h3>Network Security</h3>
        <ul className="network-feature-points">
          <li>Firewall configuration</li>
          <li>VLAN segmentation</li>
          <li>VPN setup</li>
          <li>Bandwidth monitoring</li>
          <li>24×7 monitoring</li>
        </ul>
      </div>
      <div className="network-feature-card">
        <div className="network-feature-icon">
          <i className="fas fa-building" />
        </div>
        <h3>Industries We Serve</h3>
        <ul className="network-feature-points">
          <li>Corporate Offices</li>
          <li>Educational Institutions</li>
          <li>Hospitals</li>
          <li>IT Parks</li>
          <li>Manufacturing Units</li>
        </ul>
      </div>
    </div>
  </section>
</>

  );
};
export default Networking;
const Ill = () => {
  return (
   <main className="main">
  {/* HERO SECTION */}
  <section className="ill-hero-section">
    <div className="ill-hero-content">
      <h1 className="ill-hero-title">ILL</h1>
      <p className="ill-hero-subtitle">
        A Leased Line is a dedicated, high-capacity, symmetric internet
        connection exclusively provided to a single customer. Unlike shared
        broadband, the bandwidth of a leased line is notshared with other users,
        ensuring consistent speed, low latency, and maximum reliability.
      </p>
    </div>
  </section>
  {/* RELIABLE SECTION */}
  <section className="ill-reliable-section">
    <div className="ill-reliable-container">
      <div className="ill-left-content">
        <h2 className="ill-reliable-title">
          Reliable Internet for Your Business
        </h2>
        <p className="ill-reliable-text">
          Leased lines are primarily designed for businesses, enterprises, data
          centers, banks, IT parks, hospitals, educational institutions, and
          government organizations that require uninterrupted and secure
          internet access.
        </p>
      </div>
    </div>
  </section>
  <section className="key-feature-section">
    <h2 className="key-feature-title">Key Features of Leased Line Internet</h2>
    <div className="key-feature-container">
      <div className="key-feature-card">
        <div className="key-feature-icon">
          <i className="fas fa-network-wired" />
        </div>
        <h3>Dedicated Bandwidth</h3>
        <ul className="key-feature-points">
          <li>100% exclusive bandwidth</li>
          <li>Guaranteed speeds at all times</li>
          <li>No congestion during peak hours</li>
        </ul>
      </div>
      <div className="key-feature-card">
        <div className="key-feature-icon">
          <i className="fas fa-arrows-alt-h" />
        </div>
        <h3>Symmetric Speeds</h3>
        <ul className="key-feature-points">
          <li>Equal upload &amp; download speeds</li>
          <li>
            Ideal for cloud hosting, VPNs, video conferencing, data backups, and
            servers
          </li>
        </ul>
      </div>
      <div className="key-feature-card">
        <div className="key-feature-icon">
          <i className="fas fa-tachometer-alt" />
        </div>
        <h3>Ultra-Low Latency</h3>
        <ul className="key-feature-points">
          <li>Optimized routing</li>
          <li>
            Essential for VoIP, financial trading, real-time applications, and
            gaming studios
          </li>
        </ul>
      </div>
      <div className="key-feature-card">
        <div className="key-feature-icon">
          <i className="fas fa-shield-alt" />
        </div>
        <h3>High Reliability</h3>
        <ul className="key-feature-points">
          <li>Enterprise-grade fiber</li>
          <li>Optional redundant paths / backup links</li>
          <li>24×7 network monitoring</li>
        </ul>
      </div>
      <div className="key-feature-card">
        <div className="key-feature-icon">
          <i className="fas fa-file-contract" />
        </div>
        <h3>SLA-Backed Service</h3>
        <ul className="key-feature-points">
          <li>Typical uptime: 99.5% – 99.99%</li>
          <li>Committed fault resolution time (FRT)</li>
          <li>Priority technical support</li>
        </ul>
      </div>
    </div>
  </section>
</main>

  );
};
export default Ill;
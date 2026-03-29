import { Link } from "react-router-dom";
const BusinessPlans = () => {
  return (
<>
   <section className="network-hero-section">
  <div className="network-hero-content">
    <h1 className="network-hero-title">Business Plans</h1>
  </div>
</section>


   <section style={{ background: "#fff" }}>
  <div className="container py-5">
    {/* WHY CHOOSE */}
    <h3 className="section-title">Why Choose Business Broadband?</h3>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="bi bi-headset" />
          </div>
          <b>Priority Support</b>
          <p>Dedicated support team with priority response time.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="bi bi-hdd-network" />
          </div>
          <b>Static IP Address</b>
          <p>Ideal for hosting servers and remote access.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="bi bi-shield-check" />
          </div>
          <b>SLA Guarantee</b>
          <p>99.5% uptime with service-level agreements.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="bi bi-speedometer2" />
          </div>
          <b>Guaranteed Speeds</b>
          <p>No throttling or speed degradation.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="bi bi-people-fill" />
          </div>
          <b>Multiple Users</b>
          <p>Supports multiple devices seamlessly.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-card">
          <div className="icon-circle">
            <i className="bi bi-tools" />
          </div>
          <b>Professional Installation</b>
          <p>Expert setup and configuration support.</p>
        </div>
      </div>
    </div>
    {/* TABLE */}
    <h3 className="section-title mt-5">Business vs Home Plans</h3>
    <div className="table-responsive custom-table">
      <table className="table mb-0">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Home Plans</th>
            <th>Business Plans</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Support Priority</td>
            <td>Standard</td>
            <td>✔ Priority</td>
          </tr>
          <tr>
            <td>Static IP</td>
            <td>✖ No</td>
            <td>✔ Available</td>
          </tr>
          <tr>
            <td>SLA Guarantee</td>
            <td>✖ No</td>
            <td>✔ 99.5%</td>
          </tr>
          <tr>
            <td>Peak Performance</td>
            <td>Shared</td>
            <td>✔ Dedicated</td>
          </tr>
          <tr>
            <td>On-site Support</td>
            <td>✖ Limited</td>
            <td>✔ Available</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* PERFECT FOR */}
    <h3 className="section-title mt-5">Perfect For</h3>
    <div className="row g-4">
      <div className="col-md-3">
        <div className="small-card">
          <i className="bi bi-building" />
          <b>Small Offices</b>
          <p>Ideal for small businesses needing stable internet.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="small-card">
          <i className="bi bi-shop" />
          <b>Retail Stores</b>
          <p>Perfect for POS systems and inventory tracking.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="small-card">
          <i className="bi bi-laptop" />
          <b>IT Companies</b>
          <p>High-speed internet for development teams.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="small-card">
          <i className="bi bi-mortarboard" />
          <b>Education</b>
          <p>Reliable connectivity for schools &amp; colleges.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="cta-section">
    <div className="container">
      <div align="center" className="cta-content">
        <h2>Ready to Upgrade Your Business Internet?</h2>
        <p>Contact us for a customized quote and consultation</p>
        <Link to="/Contact" className="btn btn-primary get-connection-btn">
          Get Business Connection
        </Link>
      </div>
    </div>
  </div>
</section>
</>
  );
};
export default BusinessPlans;
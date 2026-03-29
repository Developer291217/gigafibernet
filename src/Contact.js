const Contact = () => {
  return (
    <>
    <section className="network-hero-section">
  <div className="network-hero-content">
    <h1 className="network-hero-title">&nbsp;</h1>
     
  </div>
</section>
     <section id="contact" className="contact section">
  {/* Section Title */}
   
  {/* End Section Title */}
  <div
    className="container aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay={100}
  >
    <div className="row align-items-center">
      <div
        className="col-lg-2"></div>
      <div
        className="col-lg-8 aos-init aos-animate"
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
         <form id="leadForm" className="lead-form">
  <div className="form-group">
    <label htmlFor="name">
      Full Name <span className="required">*</span>
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required=""
      placeholder="Enter your full name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="phone">
      Mobile Number <span className="required">*</span>
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      required=""
      placeholder="Enter your mobile number"
      pattern="[0-9]{10}"
    />
  </div>
  <div className="form-group">
    <label htmlFor="area">
      Area / Locality (Bangalore) <span className="required">*</span>
    </label>
    <input
      type="text"
      id="area"
      name="area"
      required=""
      placeholder="Enter your area/locality"
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email (Optional)</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
    />
  </div>
  <div className="form-group">
    <label htmlFor="plan">Interested Plan</label>
    <select id="plan" name="plan">
      <option value="">Select a plan</option>
      <optgroup label="OTT Bundled Plans">
        <option value="30 Mbps OTT - ₹399">30 Mbps OTT - ₹399</option>
        <option value="50 Mbps OTT - ₹499">50 Mbps OTT - ₹499</option>
        <option value="75 Mbps OTT - ₹599">75 Mbps OTT - ₹599</option>
        <option value="100 Mbps OTT - ₹799">100 Mbps OTT - ₹799</option>
        <option value="150 Mbps OTT - ₹899">150 Mbps OTT - ₹899</option>
        <option value="200 Mbps OTT - ₹999">200 Mbps OTT - ₹999</option>
        <option value="300 Mbps OTT - ₹1199">300 Mbps OTT - ₹1199</option>
        <option value="500 Mbps OTT - ₹1999">500 Mbps OTT - ₹1999</option>
      </optgroup>
      <optgroup label="Regular Broadband Plans">
        <option value="30 Mbps - ₹299/month">30 Mbps - ₹299/month</option>
        <option value="50 Mbps - ₹399/month">50 Mbps - ₹399/month</option>
        <option value="75 Mbps - ₹499/month">75 Mbps - ₹499/month</option>
        <option value="100 Mbps - ₹599/month">100 Mbps - ₹599/month</option>
        <option value="150 Mbps - ₹699/month">150 Mbps - ₹699/month</option>
        <option value="200 Mbps - ₹799/month">200 Mbps - ₹799/month</option>
        <option value="300 Mbps - ₹999/month">300 Mbps - ₹999/month</option>
        <option value="500 Mbps - ₹1999/month">500 Mbps - ₹1999/month</option>
      </optgroup>
      <optgroup label="Business Plans">
        <option value="Business Starter - 100 Mbps">
          Business Starter - 100 Mbps
        </option>
        <option value="Business Professional - 200 Mbps">
          Business Professional - 200 Mbps
        </option>
        <option value="Business Enterprise - 500 Mbps">
          Business Enterprise - 500 Mbps
        </option>
      </optgroup>
      <optgroup label="Leased Line">
        <option value="Leased Line - 10 Mbps">Leased Line - 10 Mbps</option>
        <option value="Leased Line - 50 Mbps">Leased Line - 50 Mbps</option>
        <option value="Leased Line - 100 Mbps">Leased Line - 100 Mbps</option>
        <option value="Leased Line - Custom">Leased Line - Custom</option>
      </optgroup>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="message">Message (Optional)</label>
    <textarea
      id="message"
      name="message"
      rows={4}
      placeholder="Any additional information or questions..."
      defaultValue={""}
    />
  </div>
  <button type="submit" className="btn-primary btn-large btn-submit">
    <i className="fas fa-paper-plane" /> Submit Request
  </button>
</form>

        </div>
      </div>
	  <div
        className="col-lg-2"></div>
    </div>
  </div>
</section>
</>
  );
};
export default Contact;
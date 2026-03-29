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
      <optgroup label="OTT Plans">
        <option value="50 Mbps - ₹524">50 Mbps - ₹524</option>
        <option value="75 Mbps - ₹699">75 Mbps - ₹699</option>
        <option value="100 Mbps - ₹949">100 Mbps - ₹949</option>
        <option value="150 Mbps - ₹1049">150 Mbps - ₹1049</option>
        </optgroup>
      <optgroup label="Regular Plans R Monthly">
        <option value="30 Mbps - ₹399/month">30 Mbps - ₹399/Monthly</option>
        <option value="50 Mbps - 2544/month">50 Mbps - 2544/Monthly</option>
        <option value="75 Mbps - ₹549/month">75 Mbps - ₹549/Monthly</option>
        <option value="100 Mbps - ₹699/month">100 Mbps - ₹699/Monthly</option>
        <option value="150 Mbps - ₹799/month">150 Mbps - ₹799/Monthly</option>
        <option value="200 Mbps - ₹999/month">200 Mbps - ₹999/Monthly</option>
        <option value="300 Mbps - ₹1299/month">300 Mbps - ₹1299/Monthly</option>
       </optgroup>
         <optgroup label="Regular Plans R Half Yearly">
        <option value="30 Mbps - ₹2034/Half Yearly">30 Mbps - ₹2034/Half Yearly</option>
        <option value="50 Mbps - ₹2544/Half Yearly">50 Mbps - ₹2544/Half Yearly</option>
        <option value="75 Mbps - ₹3294/Half Yearly">75 Mbps - ₹3294/Half Yearly</option>
        <option value="100 Mbps - ₹4194/Half Yearly">100 Mbps - ₹4194/Half Yearly</option>
        <option value="150 Mbps - ₹4794/Half Yearly">150 Mbps - ₹4794/Half Yearly</option>
        <option value="200 Mbps - ₹5994/Half Yearly">200 Mbps - ₹5994/Half Yearly</option>
        <option value="300 Mbps - ₹7794/Half Yearly">300 Mbps - ₹7794/Half Yearly</option>
       </optgroup>
        <optgroup label="Regular Plans R Yearly">
        <option value="30 Mbps - ₹499/Yearly">30 Mbps - ₹4068/Yearly</option>
        <option value="50 Mbps - ₹599/Yearly">50 Mbps - ₹5088/Yearly</option>
        <option value="75 Mbps - ₹699/Yearly">75 Mbps - ₹6588/Yearly</option>
        <option value="100 Mbps - ₹849/Yearly">100 Mbps - ₹8388/Yearly</option>
        <option value="150 Mbps - ₹949/Yearly">150 Mbps - ₹9588/Yearly</option>
        <option value="200 Mbps - ₹1149/Yearly">200 Mbps - ₹11988/Yearly</option>
        <option value="300 Mbps - ₹1449/Yearly">300 Mbps - ₹15588/Yearly</option>
       </optgroup>

         <optgroup label="Regular Plans R + TV Monthly">
        <option value="30 Mbps - ₹499/Monthly">30 Mbps - ₹499/Monthly</option>
        <option value="50 Mbps - ₹599/Monthly">50 Mbps - ₹599/Monthly</option>
        <option value="75 Mbps - ₹699/Monthly">75 Mbps - ₹699/Monthly</option>
        <option value="100 Mbps - ₹849/Monthly">100 Mbps - ₹849/Monthly</option>
        <option value="150 Mbps - ₹949/Monthly">150 Mbps - ₹949/Monthly</option>
        <option value="200 Mbps - ₹1149/Monthly">200 Mbps - ₹1149/Monthly</option>
        <option value="300 Mbps - ₹1449/Monthly">300 Mbps - ₹1449/Monthly</option>
       </optgroup>

       <optgroup label="Regular Plans R + TV Half Yearly">
        <option value="30 Mbps - ₹2994/Half Yearly">30 Mbps - ₹2994/Half Yearly</option>
        <option value="50 Mbps - ₹3594/Half Yearly">50 Mbps - ₹3594/Half Yearly</option>
        <option value="75 Mbps - ₹4194/Half Yearly">75 Mbps - ₹4194/Half Yearly</option>
        <option value="100 Mbps - ₹5094/Half Yearly">100 Mbps - ₹5094/Half Yearly</option>
        <option value="150 Mbps - ₹5694/Half Yearly">150 Mbps - ₹5694/Half Yearly</option>
        <option value="200 Mbps - ₹6894/Half Yearly">200 Mbps - ₹6894/Half Yearly</option>
        <option value="300 Mbps - ₹8694/Half Yearly">300 Mbps - ₹8694/Half Yearly</option>
       </optgroup>

        <optgroup label="Regular Plans R + TV Yearly">
        <option value="30 Mbps - ₹5988/Yearly">30 Mbps - ₹5988/Yearly</option>
        <option value="50 Mbps - ₹7188/Yearly">50 Mbps - ₹7188/Yearly</option>
        <option value="75 Mbps - ₹8388/Yearly">75 Mbps - ₹8388/Yearly</option>
        <option value="100 Mbps - ₹10188/Yearly">100 Mbps - ₹10188/Yearly</option>
        <option value="150 Mbps - ₹11388/Yearly">150 Mbps - ₹11388/Yearly</option>
        <option value="200 Mbps - ₹13788/Yearly">200 Mbps - ₹13788/Yearly</option>
        <option value="300 Mbps - ₹17388/Yearly">300 Mbps - ₹17388/Yearly</option>
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
import React from 'react';

const RegularPlans = () => {
  return (
   <main className="main">
  {/* HERO SECTION */}
  <section className="network-hero-section">
    <div className="network-hero-content">
      <h1 className="network-hero-title">Regular Plans</h1>
    </div>
  </section>
  {/* INTRO SECTION */}
  {/* Portfolio Section */}
  <section style={{ background: "#fff" }}>
    <div className="container">
      <div className="section-intro">
        <h2 className="section-title">Choose Your Regulars Plan</h2>
        <p className="section-subtitle">
          Get Regulars Plan platforms bundled with high-speed broadband. Enjoy
          unlimited streaming with your favorite shows and movies.
        </p>
      </div>
    </div>
    <div className="container mt-5">
      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center" id="planTabs">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#r"
          >
            <b>R</b>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#rtv"
          >
            <b>R + TV</b>
          </button>
        </li>
      </ul>
      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* R Plans */}
        <div className="tab-pane fade show active" id="r">
          <div className="plan-card">
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Speed</th>
                    <th>Monthly</th>
                    <th>Half Yearly</th>
                    <th>Yearly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30 MBPS</td>
                    <td>399</td>
                    <td>2034</td>
                    <td>4068</td>
                  </tr>
                  <tr>
                    <td>50 MBPS</td>
                    <td>424</td>
                    <td>2544</td>
                    <td>5088</td>
                  </tr>
                  <tr>
                    <td>75 MBPS</td>
                    <td>549</td>
                    <td>3294</td>
                    <td>5088</td>
                  </tr>
                  <tr>
                    <td>100 MBPS</td>
                    <td>699</td>
                    <td>4194</td>
                    <td>8388</td>
                  </tr>
                  <tr>
                    <td>150 MBPS</td>
                    <td>799</td>
                    <td>4794</td>
                    <td>9588</td>
                  </tr>
                  <tr>
                    <td>200 MBPS</td>
                    <td>999</td>
                    <td>5994</td>
                    <td>11988</td>
                  </tr>
                  <tr>
                    <td>300 MBPS</td>
                    <td>1299</td>
                    <td>7794</td>
                    <td>15588</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* R+TV Plans */}
        <div className="tab-pane fade" id="rtv">
          <div className="plan-card">
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Speed</th>
                    <th>Monthly</th>
                    <th>Half Yearly</th>
                    <th>Yearly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30 MBPS</td>
                    <td>499</td>
                    <td>2994</td>
                    <td>5988</td>
                  </tr>
                  <tr>
                    <td>50 MBPS</td>
                    <td>599</td>
                    <td>3594</td>
                    <td>7188</td>
                  </tr>
                  <tr>
                    <td>75 MBPS</td>
                    <td>699</td>
                    <td>4194</td>
                    <td>8388</td>
                  </tr>
                  <tr>
                    <td>100 MBPS</td>
                    <td>849</td>
                    <td>5094</td>
                    <td>10188</td>
                  </tr>
                  <tr>
                    <td>150 MBPS</td>
                    <td>949</td>
                    <td>5694</td>
                    <td>11388</td>
                  </tr>
                  <tr>
                    <td>200 MBPS</td>
                    <td>1149</td>
                    <td>6894</td>
                    <td>13788</td>
                  </tr>
                  <tr>
                    <td>300 MBPS</td>
                    <td>1449</td>
                    <td>8694</td>
                    <td>17388</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="plan-notes">
      <p>
        <i className="fas fa-info-circle" /> <strong>Note:</strong> GST Extra |
        Router Free on 6 months plan &amp; above 50 mbps only | Conditions Apply
      </p>
    </div>
  </section>
</main>

  );
};
export default RegularPlans;
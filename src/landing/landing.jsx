
import './landing.css';
import React from 'react';
import shape from './images/bg.png'
import feature1 from './images/feature-1.png';
import feature2 from './images/feature-2.png';
import aboutBanner from './images/about-banner.png';
const Landing = () => {
  return (
    <div>
      {/* HEADER */}

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">Your full-funnel growth agency</h1>
            <p className="hero-text">
              Capture and retrieve your lists across devices to help you stay organized at work, home, and on the go.
            </p>
            <button className="btn btn-primary">Get started</button>
          </div>
          <div className="hero-banner"></div>
        </div>
        <img src={shape} alt="shape" className="shape-content" />
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-top">
            <h2 className="h2 section-title">What we do</h2>
            <p className="section-text">
              Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
              development of the asset through its charitable foundation.
            </p>
            <ul className="about-list">
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="briefcase-outline"></ion-icon>
                  </div>
                  <h3 className="h3 card-title">Paid Search and Social Management</h3>
                  <p className="card-text">
                    Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
                  </p>
                </div>
              </li>
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                  </div>
                  <h3 className="h3 card-title">Direct Response Content</h3>
                  <p className="card-text">
                    Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
                  </p>
                </div>
              </li>
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>
                  <h3 className="h3 card-title">CRO and Retention Optimizations</h3>
                  <p className="card-text">
                    Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-bottom">
            <figure className="about-bottom-banner">
              <img src={aboutBanner}alt="about banner" className="about-banner" />
            </figure>
            <div className="about-bottom-content">
              <h2 className="h2 section-title">We're obsessed with growth</h2>
              <p className="section-text">
                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                development of the asset through its charitable foundation.
              </p>
              <button className="btn btn-secondary">Sign Up For Free</button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features" id="features">
        <div className="container">
          <h2 className="h2 section-title">Our team is made up of all different backgrounds from all over the world.</h2>
          <p className="section-text">
            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
            development of the asset through its charitable foundation.
          </p>
          <ul className="features-list">
            <li className="features-item">
              <figure className="features-item-banner">
                <img src={feature1} alt="feature banner" />
              </figure>
              <div className="feature-item-content">
                <h3 className="h2 item-title">Cover your everyday expenses</h3>
                <p className="item-text">
                  Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </li>
            <li className="features-item">
              <figure className="features-item-banner">
                <img src={feature2}alt="feature banner" />
              </figure>
              <div className="feature-item-content">
                <h3 className="h2 item-title">We offer low fees that are transparent</h3>
                <p className="item-text">
                  Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                  development of the asset through its charitable foundation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
    </div>
  );
};

export default Landing;
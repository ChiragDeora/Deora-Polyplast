import React from "react";
import homepage from "./images/homepage.jpg";

function SectionMain() {
  return (
    <section id="Main">
      <div className="image-slide-show">
        <img src={homepage} alt="Homepage" />
        <img src={homepage} alt="Homepage" />
        <img src={homepage} alt="Homepage" />
      </div>
      <div className="about-us-container">
        <div className="about-us text">
          <h2>About Us</h2>
          <p>
            At DPPL, we design premium packaging solutions primarily serving the
            food industry. With a strong focus on innovation and quality, we
            deliver customized solutions to our customers across various
            sectors. We understand that packaging plays a crucial role in
            preserving product integrity and enhancing brand value. Our
            dedicated team works diligently to exceed your expectations,
            providing exceptional products tailored to your unique requirements.
          </p>
        </div>
        <div className="technology-mission-container">
          <div className="technology text">
            <h2>Our Technology</h2>
            <p>
              We leverage cutting-edge technologies such as Injection Moulding
              and In-Mould Labeling (IML) to enhance the visual appeal and
              branding opportunities of our packaging, giving your products a
              competitive edge in the market. Additionally, sustainability is at
              the core of our values. We prioritize eco-friendly manufacturing
              processes and responsibly sourced materials to reduce our
              environmental footprint.
            </p>
          </div>
          <div className="mission text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide innovative and sustainable packaging
              solutions that meet the evolving needs of our customers. We are
              committed to quality, efficiency, and environmental responsibility
              in all our operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMain;

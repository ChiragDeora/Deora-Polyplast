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
      <div className="section-container">
        <div className="section">
          <div className="text">
            <h2>About Us</h2>
            <p className="text">
              We design premium packaging solutions primarily catering to the
              food industry. With our strong focus on innovation and quality, we
              deliver customized solutions for our customers in various
              industries. Our dedicated team and extensive experience enable us
              to meet unique requirements and exceed expectations.
            </p>
          </div>
          <div className="text">
            <h2>Our History</h2>
            <p>
              Founded in 1990, our company has grown to become a leading
              provider of packaging solutions. We have continually invested in
              the latest technologies and have built a team of highly skilled
              professionals dedicated to delivering excellence.
            </p>
          </div>
          <div className="text">
            <h2>Our Mission</h2>
            <p className="text">
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

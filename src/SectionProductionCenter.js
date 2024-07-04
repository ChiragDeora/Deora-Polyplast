import React from "react";
import productionCenter from "./images/production-center.jpg";

function SectionProductionCenter() {
  return (
    <div id="Our-Production-Center">
      <div className="container">
        <h2 className="header">Our Production Center</h2>
      </div>
      <div className="image-container">
        <img src={productionCenter} alt="Production Center" />
      </div>
      <div className="container">
        <p>
          Our state-of-the-art production center is equipped with advanced
          machinery and technology to ensure the highest standards of quality
          and efficiency. With a focus on innovation and sustainability, we
          strive to lead the industry in delivering superior packaging
          solutions.
        </p>
      </div>
    </div>
  );
}

export default SectionProductionCenter;

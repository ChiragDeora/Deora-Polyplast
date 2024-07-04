import React from "react";
import productionCenterImage from "./images/production-center.jpg";
import cleanRoomImage from "./images/production.jpg"; // Adjust the path as per your project structure

function SectionProductionCenter() {
  return (
    <div id="Our-Production-Center">
      <div className="container">
        <h2 className="header">Our Production Center</h2>
      </div>
      <div className="image-container">
        <img src={productionCenterImage} alt="Production Center" />
      </div>
      <div className="container">
        <p>
          Our state-of-the-art production center is equipped with advanced
          machinery and technology to ensure the highest standards of quality
          and efficiency. With a focus on innovation and sustainability, we
          strive to lead the industry in delivering superior packaging
          solutions.
        </p>
        <div className="image-container">
          <img src={cleanRoomImage} alt="Clean Room" />
        </div>
        <p>
          At our facility, we prioritize quality and hygiene. Our dedicated
          clean room adheres to strict cleanliness standards for food and
          pharmaceutical packaging. With a controlled environment, we
          manufacture solutions that comply with stringent regulations. Our
          commitment to excellence and innovation drives us to invest in
          advanced technology, automation, and infrastructure, enabling us to
          provide customers with superior packaging solutions.
        </p>
      </div>
    </div>
  );
}

export default SectionProductionCenter;

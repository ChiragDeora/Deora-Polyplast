import React from "react";
import service2 from "./images/service-2.jpg";
import service3 from "./images/service-3.png";
import services from "./images/services.jpg";

function SectionCollaborations() {
  return (
    <div id="Our-Collaborations">
      <div className="container">
        <h2 className="header">Our Collaborations</h2>
      </div>
      <div className="collaborations">
        <Collaboration imgSrc={service2} name="Collaboration 1" />
        <Collaboration imgSrc={service3} name="Collaboration 2" />
        <Collaboration imgSrc={services} name="Collaboration 3" />
      </div>
    </div>
  );
}

function Collaboration({ imgSrc, name }) {
  return (
    <div className="collaboration">
      <img src={imgSrc} alt={name} />
      <div className="container">
        <h3 className="subheader">{name}</h3>
      </div>
    </div>
  );
}

export default SectionCollaborations;

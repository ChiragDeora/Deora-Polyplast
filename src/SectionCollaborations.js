import React from "react";
import client1 from "./images/client-1.png";
import client2 from "./images/client-2.png";
import client3 from "./images/client-3.png";

function SectionCollaborations() {
  return (
    <div id="Our-Collaborations">
      <div className="container">
        <h2 className="header">Our Collaborations</h2>
      </div>
      <div className="collaborations">
        <Collaboration
          imgSrc={client1}
          name="Rajshree Polypack Ltd."
          description="DPPL takes pride in serving valued customers like RPPL, a leading packaging company catering to renowned brands in the food and dairy industry. Our partnership with RPPL supports their packaging needs, contributing to their success. As an RPPL customer, they benefit from our high-quality products, enabling them to deliver reliable solutions to esteemed brands. We prioritize customer satisfaction and long-term partnerships. We closely collaborate with RPPL, providing responsive support at every stage. Together, we aim to set new industry standards and deliver exceptional packaging solutions."
        />
        <Collaboration imgSrc={client2} name="Client 2" />
        <Collaboration imgSrc={client3} name="Client 3" />
      </div>
    </div>
  );
}

function Collaboration({ imgSrc, name, description }) {
  return (
    <div className="collaboration">
      <img src={imgSrc} alt={name} />
      <div className="container">
        <h3 className="subheader">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionCollaborations;

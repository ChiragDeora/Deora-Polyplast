import React from "react";

function SectionVisionMission() {
  return (
    <div id="Our-Vision-and-Mission">
      <div className="container">
        <h2 className="header">Our Vision and Mission</h2>
      </div>
      <VisionMission
        title="Our Vision"
        description="Our vision at Deora Polyplast LLP (DPPL) is to be a global leader in providing innovative and sustainable packaging solutions. We strive to revolutionize the packaging industry by constantly pushing the boundaries of technology, design, and functionality. Our vision is to create packaging that not only protects and preserves products but also adds value to our customers' brands. We envision a future where our packaging solutions contribute to a greener and more sustainable planet."
      />
      <VisionMission
        title="Our Mission"
        description="Our mission is to exceed customer and partner expectations by delivering superior packaging solutions. With a focus on understanding unique needs, we provide tailored solutions that enhance product quality, safety, and market appeal. Committed to innovation, we invest in research and development to stay ahead. Our vision is to be a reliable partner, delivering exceptional service, quality, and sustainable packaging worldwide. Through our passion for excellence, sustainability, and customer satisfaction, we aim to make a positive impact on the industry and communities we serve."
      />
    </div>
  );
}

function VisionMission({ title, description }) {
  return (
    <div className="vision-mission">
      <div className="container">
        <h3>{title}</h3>
      </div>
      <div className="container">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionVisionMission;

import React from "react";

function SectionManagementTeam() {
  return (
    <div id="Our-Management-Team">
      <div className="container">
        <h2 className="header">Our Management Team</h2>
      </div>
      <ManagementTeamMember
        name="Sudhir Deora"
        description="Drives business excellence across diverse industries. Under his inspiring leadership, our group of companies has achieved significant milestones, surpassing Rs. 100 crores in combined revenue. Sudhir's strategic mindset, integrity, and innovation foster a culture of excellence. Committed to social responsibility, he ensures the companies deliver unmatched value, reliability, and continued growth in the dynamic business landscape."
      />
      <ManagementTeamMember
        name="Yogesh Deora"
        description="Drives Deora Polyplast LLP (DPPL) with expertise and passion for premium packaging solutions. Embracing innovation and cutting-edge technologies, Yogesh ensures DPPL's position as a trusted provider in food and pharmaceutical packaging. His commitment to excellence inspires continuous improvement, delivering high-quality, sustainable, and aesthetically pleasing solutions that exceed customer expectations."
      />
    </div>
  );
}

function ManagementTeamMember({ name, description }) {
  return (
    <div className="management-team-member">
      <div className="container">
        <h3 className="subheader">{name}</h3>
      </div>
      <div className="container">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionManagementTeam;

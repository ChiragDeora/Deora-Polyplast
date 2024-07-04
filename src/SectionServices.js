import React from "react";
import service1 from "./images/services.jpg";
import service2 from "./images/service-2.jpg";
import service3 from "./images/service-3.png";

function SectionServices() {
  const services = [
    {
      imgSrc: service1,
      name: "Food & Dairy Packaging",
      description:
        "With an extensive range of food packaging containers, we are poised to serve the food and dairy industry comprehensively. Our containers are meticulously designed to preserve the freshness, quality, and integrity of various food products, including dairy items, sweets, oils, and more. By adhering to stringent quality standards and industry regulations, we ensure the utmost safety and compliance of our food packaging solutions.",
    },
    {
      imgSrc: service2,
      name: "Pharmaceutical Packaging",
      description:
        "Expanding into the pharmaceutical sector, we aim to provide secure and compliant packaging solutions for a wide range of medical products. Our containers are specifically designed for blood collection tubes, medicine caps, bottles, and other pharmaceutical applications. By prioritizing durability, temperature resistance, and product integrity, we offer reliable packaging options that safeguard the potency and safety of pharmaceutical items.",
    },
    {
      imgSrc: service3,
      name: "Lubricants & Paints Packaging",
      description:
        "To cater to the specialized needs of the lubricant and paint industry, we introduce containers that guarantee secure storage and transportation. Our leak-proof packaging solutions prevent any leakage, spillage, or contamination, maintaining the integrity and quality of lubricants and paints. With customizable options and various sizes available, we aim to provide packaging solutions that meet industry standards.",
    },
  ];

  return (
    <div id="Our-Services">
      <div className="container">
        <h2 className="header">Our Services</h2>
        <p>
          We are currently diversifying into: Food & Dairy Packaging,
          Pharmaceutical Packaging, Lubricants & Paints Packaging. Our goal is
          to provide innovative packaging solutions that meet the evolving needs
          of various industries. With a focus on quality, sustainability, and
          compliance, we strive to exceed customer expectations and establish
          long-term partnerships.
        </p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <Service
            key={index}
            imgSrc={service.imgSrc}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

function Service({ imgSrc, name, description }) {
  return (
    <div className="service">
      <img src={imgSrc} alt={name} />
      <div className="container">
        <h3 className="subheader">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionServices;

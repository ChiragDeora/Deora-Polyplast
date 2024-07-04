import React from "react";
import group2 from "./images/group-2.png";
import group3 from "./images/group-3.png";

function SectionCompanies() {
  return (
    <div id="Our-Group-of-Companies">
      <div className="container">
        <h2 className="header">Our Group of Companies</h2>
      </div>
      <div className="container">
        <p>
          Under the visionary leadership of Mr. Sudhir Deora, Deora Polyplast
          LLP (DPPL) is part of a dynamic group of specialized companies.
          Together, they form a powerful network, leveraging expertise and
          resources to deliver exceptional products and services. Our esteemed
          group of companies:
        </p>
      </div>
      <div className="container groupsofcompanies">
        <CompanyInfo
          imgSrc={group3}
          title="Spares & Components Co."
          description="Spares and Components Co (SPCO) is India's leading distributor of top bearing brands worldwide like NTN, Lobo, SKF etc. Our, pan India presence enables us to serve prominent customers like Aditya Birla, JSW, IOCL, and more belonging to various industries like steel, automobile and refinery etc."
        />
        <CompanyInfo
          imgSrc={group2}
          title="JDS Blue Opticals LLP"
          description="As part of our strategic growth, we are venturing into the consumer market to diversify our group. JDS Blue Opticals LLP is a provider of cutting-edge optical solutions. Their range encompasses lenses, frames, and specialized products for diverse applications. With precision and excellence."
        />
      </div>
    </div>
  );
}

function CompanyInfo({ imgSrc, title, description }) {
  return (
    <div className="company">
      <img src={imgSrc} alt={title} />
      <div className="container">
        <h3 className="subheader">{title}</h3>
      </div>
      <div className="container">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionCompanies;

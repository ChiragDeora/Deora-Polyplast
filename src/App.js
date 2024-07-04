import React from "react";
import Navbar from "./Navbar";
import SectionMain from "./SectionMain";
import SectionCompanies from "./SectionCompanies";
import SectionManagementTeam from "./SectionManagementTeam";
import SectionVisionMission from "./SectionVisionMission";
import SectionProductionCenter from "./SectionProductionCenter";
import SectionProducts from "./SectionProducts";
import SectionCollaborations from "./SectionCollaborations";
import SectionContact from "./SectionContact";
import SectionServices from "./SectionServices";
import "./App.css";

function App() {
  return (
    <div id="root">
      <h1 hidden aria-hidden>
        DEORA POLYPLAST LLP
      </h1>
      <Navbar />
      <main>
        <SectionMain />
        <SectionCompanies />
        <SectionManagementTeam />
        <SectionVisionMission />
        <SectionProductionCenter />
        <SectionProducts />
        <SectionServices />
        <SectionCollaborations />
        <SectionContact />
      </main>
    </div>
  );
}

export default App;

import React from 'react'
import ArchitectureImg from "../../assets/Semiconductor_Chip_Design/semiconductors architecture semiconductirs chip services cilkencave-min.jpg"

function Architecture() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Architecture</p>
          <div className="homeContainerHeadingH2">
            <h2>Idea to SPEC</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={ArchitectureImg}
            alt="Cilkencave Architecture"
            className="homeDeliveringRightMain"
          ></img>
          <div className="homeDeliveringRightContent">
            <h3>Empowering Innovation</h3>
            <p>
              Our advanced solutions help industries grow and adapt to new
              technologies.
            </p>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            As a leading global chip design consultancy, we excel in analyzing
            new chip concepts and delivering comprehensive Architectural Study
            reports. These reports guide project realization and provide precise
            cost estimates. With extensive experience in designing numerous
            chips, we offer viable strategies, necessary technologies, and
            per-chip cost breakdowns. Our rapid cost assessments during early
            conceptualization give valuable insights into project feasibility.
            Cilkencave's detailed cost plans help companies refine specs and
            meet pricing goals. In the complex world of SoC design, traditional
            tools often fail, leading to costly redesigns. Platform Architect
            addresses this by streamlining architecture design, reducing delays,
            and ensuring timely delivery.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={ArchitectureImg}
          alt="Cilkencave Architecture"
          className="homeDeliveringRightMain"
        ></img>
        <div className="homeDeliveringRightContent">
          <h3>Empowering Innovation</h3>
          <p>
            Our advanced solutions help industries grow and adapt to new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Architecture

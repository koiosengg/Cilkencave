import React from "react";
import RTL2GDSImg from "../../assets/Semiconductor_Chip_Design/RTL2GDS-min.jpg";
import KeyFeatureArrow from "/KeyFeatureArrow.svg";

function RTL2GDS() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>RTL2GDS</p>
            <div className="homeContainerHeadingH2">
              <h2>Best PPA & First Pass</h2>
            </div>
          </div>
          <div className="homeDeliveringContent">
            <p className="homeDeliveringContentPara">
              At Cilkencave Solutions, our team of technical experts spans the
              entire spectrum from RTL to GDSII, ensuring comprehensive support
              at every stage of SoC development. With well-established internal
              processes, methodologies, and workflows, we’re equipped to tackle
              any specification or existing design, delivering end-to-end
              services from RTL integration to physical design and tape-out.{" "}
              <br />
              Quality and functional integrity are paramount in our approach. To
              uphold these standards, we have dedicated processes, an
              experienced project management team, and a skilled senior core
              team, supported by one of the industry’s finest engineering teams
              with a proven track record of successfully taping out multiple
              designs.
            </p>
          </div>
        </div>
        <div className="homeDeliveringRight">
          <img src={RTL2GDSImg} className="homeDeliveringRightMain"></img>
          <div className="homeDeliveringRightContent">
            <h3>Empowering Innovation</h3>
            <p>
              Our advanced solutions help industries grow and adapt to new
              technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="KeyFeatures">
        <h3>Key Features</h3>
        <div className="KeyFeaturesContainer TwoColumns">
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>
              Comprehensive services covering RTL integration, IP and SoC
              verification, STA and Synthesis, Physical Design, and DFT
            </p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>
              A team of seasoned technical experts proficient across all stages
              from RTL to GDSII
            </p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>
              Established internal workflows and best practices, ensuring
              efficiency and high-quality results
            </p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Implementing Hierarchical Design with multiple Partitions</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Ownership and Development of Constraints</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>STA and Timing Closure Across Multiple Modes/Corners</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Integration of Power Collapsible Blocks (Power Gates, UPF)</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Strategies for Crosstalk Immune Bus Routing and Optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RTL2GDS;

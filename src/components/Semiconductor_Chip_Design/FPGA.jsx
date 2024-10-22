import React from "react";
import FPGAImg from "../../assets/Semiconductor_Chip_Design/FPGAImg.jpg";
import KeyFeatureArrow from "/KeyFeatureArrow.svg";
function FPGA() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>Board & FPGA Design</p>
            <div className="homeContainerHeadingH2">
              <h2>Left Shift Verification</h2>
            </div>
          </div>
          <div className="homeDeliveringContent">
            <p className="homeDeliveringContentPara">
              As part of our Post-Silicon Validation (PSV) services, Cilk n Cave
              develops comprehensive High-level Test Plans, reviewed by design
              engineers for accuracy. We craft algorithms for test flow design
              and code, applying software validation techniques to streamline
              schedules and enhance coverage.
              <br /> Our expertise spans the entire silicon realization process,
              offering a broad range of validation services aimed at reducing
              cost and time while ensuring functional coverage. We provide
              certification marks tailored to meet diverse needs, including IPs
              for AI applications, such as specialized DSPs that boost computing
              efficiency through parallel data processing.
            </p>
          </div>
        </div>
        <div className="homeDeliveringRight">
          <img src={FPGAImg} className="homeDeliveringRightMain"></img>
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
        <div className="KeyFeaturesContainer">
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>High-Speed Data Acquisition (ADC/DAC)</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Digital Signal Processing (DSPs)</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Video Processing</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Pre & Post Silicon Validation</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>ASIC Proof of Concept (POC)</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>High-Speed Bus Interfaces & Transceiver-based designs</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>AI/ML Applications</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Complex designs spanning multi-million gates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FPGA;

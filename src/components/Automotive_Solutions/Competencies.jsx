import React from "react";
import CompetenciesImg from "../../assets/Automotive_Solutions/core competncies.jpg"
import VerificationAndValidationImg from "../../assets/Automotive_Solutions/VerificationAndValidationImg.svg"
import EVandPowertrainImg from "../../assets/Automotive_Solutions/EVandPowertrainImg.svg"
import ISO26262Img from "../../assets/Automotive_Solutions/ISO26262Img.svg"

function Competencies() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>
              Our Core
              <br />
              Competencies
            </p>
            <div className="homeContainerHeadingH2">
              <h2>Our Expertise</h2>
            </div>
          </div>
          <div className="homeDeliveringContent">
            <p className="homeDeliveringContentPara">
              Deep domain expertise is the cornerstone of automotive
              engineering. We bring in-depth understanding of connected cars,
              autonomous vehicles, safety & security and electrification (CASE).
              With vehicles becoming more complex and software driven, system
              integration and communication between several sub-systems becomes
              important. Cross functional competencies across automotive
              electronics including hardware, software and systems is necessary
              to integrate advanced features such as ADAS, In-vehicle
              Infotainment systems, connectivity and mobility solutions.
            </p>
          </div>
        </div>
        <div className="homeDeliveringRight">
          <img src={CompetenciesImg} className="homeDeliveringRightMain"></img>
         
        </div>
      </div>
      <div className="KeyFeatures">
        <div className="KeyFeaturesContainer">
          <div className="homeServiceSetText">
            <div className="heading">
              <img
                src={VerificationAndValidationImg}
                alt="Verification & Validation Cilkencave"
              />
              <h3>Verification & Validation</h3>
            </div>
            <p>Unit Testing, Integration Testing</p>
          </div>
          <div className="homeServiceSetText">
            <div className="heading">
              <img src={EVandPowertrainImg} alt="EV & Powertrain Cilkencave" />
              <h3>EV & Powertrain</h3>
            </div>
            <p>Power electronics, Control SW, Testing & Validation</p>
          </div>
          <div className="homeServiceSetText">
            <div className="heading">
              <img src={ISO26262Img} alt="ISO26262 Cilkencave" />
              <h3>ISO26262</h3>
            </div>
            <p>Steering, Braking, Suspension & Damping</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competencies;

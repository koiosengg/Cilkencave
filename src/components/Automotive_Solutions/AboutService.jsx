import React from "react";
import MainImg from "../../assets/Automotive_Solutions/MainImg.jfif";
import AutomotiveTestImg from "../../assets/Automotive_Solutions/AutomotiveTestImg.jfif";

function AboutService() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures AboutService">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>Automotive Solutions</p>
            <div className="homeContainerHeadingH2">
              <h2>Your Trusted Partner for Automotive Electronics Solutions</h2>
            </div>
          </div>
          <div className="homeDeliveringContent">
            <p className="homeDeliveringContentPara">
              SmartSoC is a global engineering technology partner with strong
              industry experience in semiconductor design and automotive
              solutions. Our Automotive business unit has a strong customer
              focus and provides engineering services & solutions for top
              Automotive Tier-1 suppliers and OEMs.
              <br /> As a value partner in the automotive solutions industry, we
              constantly leverage the software and hardware integration
              expertise to provide end-to-end turnkey solutions for our
              customers. With deep automotive electronics capabilities, we
              consistently deliver to our customer requirements using
              established industry processes and standards. 
            </p>
          </div>
        </div>
        <div className="homeDeliveringRight">
          <img src={MainImg} className="homeDeliveringRightMain"></img>
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
        <div className="KeyFeaturesContainer">
          <div className="homeTTMContent">
            <img src={AutomotiveTestImg} alt="" />
            <h4>
              Embedded <br />
              Software
            </h4>
          </div>
          <div className="homeTTMContent">
            <img src={AutomotiveTestImg} alt="" />
            <h4>
              Automatic Platform
              <br /> Software (AUTO SAR)
            </h4>
          </div>
          <div className="homeTTMContent">
            <img src={AutomotiveTestImg} alt="" />
            <h4>
              Verification &<br />
              Validation
            </h4>
          </div>
          <div className="homeTTMContent">
            <img src={AutomotiveTestImg} alt="" />
            <h4>
              ADAS & IN - Vehicle <br />
              Infotainemnet
            </h4>
          </div>
          <div className="homeTTMContent">
            <img src={AutomotiveTestImg} alt="" />
            <h4>
              Autonomous Driving &
              <br />
              Connected Cars
            </h4>
          </div>
          <div className="homeTTMContent">
            <img src={AutomotiveTestImg} alt="" />
            <h4>
              Safety & <br />
              Security
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutService;
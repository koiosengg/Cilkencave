import React from "react";
import EnablerImg from "../../assets/System_Design/EnablerImg.jfif";
import KeyFeatureArrow from "/KeyFeatureArrow.svg";

function Enabler() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>
              Enabler In System <br />
              Design
            </p>
            <div className="homeContainerHeadingH2">
              <h2>Experience of time to market</h2>
            </div>
          </div>
          <div className="homeDeliveringContent">
            <p className="homeDeliveringContentPara">
              Cilkencave focuses on delivering next-gen IoT solutions to our
              local and global customers, with end-to-end product ownership. As
              a leading engineering service provider having in-depth knowledge
              of system design across various segments, we help develop your
              product keeping in mind the emerging and disruptive technologies
              with at most industry focus. <br />
              <br />
              Leveraging on our maturity and strong industry reputation for
              SoC/hardware design and embedded SW/FW across varied wireless and
              networking technologies, we drive product development process
              based on organising your workflow with standard practices
              (starting from initial strategy to MVP release).
            </p>
          </div>
        </div>
        <div className="homeDeliveringRight">
          <img
            src={EnablerImg}
            className="homeDeliveringRightMain"
            style={{ height: "100%" }}
          ></img>
        </div>
      </div>
      <div className="KeyFeatures">
        <h3>Key Features</h3>
        <div
          className="KeyFeaturesContainer"
        >
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Delivering Next-Gen IoT solutions</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Complete end-to-end product ownership</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Innovation in cutting-edge technologies</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Reputation for excellence & contribution</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Collaborative approach to problem-solving</p>
          </div>
          <div className="KeyFeatureSet">
            <img src={KeyFeatureArrow}></img>
            <p>Strategic customer engagement models</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enabler;

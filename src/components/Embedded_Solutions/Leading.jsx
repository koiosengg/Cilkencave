import React from "react";
import PlatformSupportImg from "../../assets/Embedded_Solutions/PlatformSupportImg.svg";
import EngineeringImg from "../../assets/Embedded_Solutions/EngineeringImg.svg";
import TestingImg from "../../assets/Embedded_Solutions/TestingImg.svg";

function Leading() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>
              Leading the Way in
              <br /> Semiconductor Industries
            </p>
            <div className="homeContainerHeadingH2">
              <h2>Our Expertise</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="KeyFeatures">
        <div className="KeyFeaturesContainer">
          <div className="homeServiceSetText">
            <div className="heading">
              <img src={PlatformSupportImg} alt="Platform Support Cilkencave" />
              <h3>Platform Support</h3>
            </div>
            <p>
              We provide platform support across various technologies, including
              Embedded Linux and Android. Additionally, we offer expertise in
              Mentor, Keil, ARM, Microchip, Atmel, Intel, and PPC platforms.
            </p>
          </div>
          <div className="homeServiceSetText">
            <div className="heading">
              <img src={EngineeringImg} alt="Engineering Cilkencave" />
              <h3>Engineering</h3>
            </div>
            <p>
              We provide end-to-end product development services, including
              device drivers, BSPs, communication protocols, firmware
              development, and board bring-up. Our expertise extends to RTOS
              porting, customization, and IDE development.
            </p>
          </div>
          <div className="homeServiceSetText">
            <div className="heading">
              <img src={TestingImg} alt="Testing Cilkencave" />
              <h3>Testing</h3>
            </div>
            <p>
              We offer comprehensive testing services, including system
              integration, performance, interoperability, regression, stress,
              and functional testing. Our expertise also covers sanity testing
              and unit testing with code coverage analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leading;

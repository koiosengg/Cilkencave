import React from "react";
import RTLImg from "../../assets/Semiconductor_Chip_Design/RTL VERIFICATION AND DESIGN SEMICONDUCTOR CHIP SERVICES-min.jpg";

function RTL() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>RTL Design & Verification</p>
          <div className="homeContainerHeadingH2">
            <h2>Spec to bug-free HDLs</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={RTLImg}
            alt="Cilkencave RTL Design & Verification "
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
            CilkenCave’s RTL design engineers bring expertise across various
            facets of RTL design flow, serving industries such as networking,
            processors, multimedia, mobile, and automotive. With experience
            ranging from 2 to 10 years, our team skillfully manages designs up
            to multi-million gates, making us a trusted partner for complex
            semiconductor projects. <br /> Collaborating closely with the
            architecture team, we define micro-architectures and develop RTL for
            multiple logic blocks and subsystems, seamlessly integrating them
            into SoCs. Our engineers ensure linting and clock domain crossing
            compliance using advanced frontend tools. <br /> We work with the
            physical design team to set design constraints and achieve timing
            closure, while also collaborating with the low-power team to
            optimize power consumption. Our verification team contributes to
            robust test plans, coverage analysis, and closure. With deep
            expertise in Design Verification, SoC verification, ASIC
            prototyping, and post-silicon validation, CilkenCave helps clients
            craft error-free designs and accelerate time-to-market. We’ve
            established dedicated design and verification ODCs for semiconductor
            product companies worldwide.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={RTLImg}
          alt="Cilkencave RTL Design & Verification "
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

export default RTL;

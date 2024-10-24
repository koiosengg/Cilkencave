import React from "react";
import MainImg from "../../assets/System_Design/System Design Engineering.jpg";

function AboutService() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>System Design Engineering</p>
          <div className="homeContainerHeadingH2">
            <h2>From Vision to Certification, Innovating Success</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            Cilkencave is a global engineering technology partner with strong
            industry experience and expertise to deliver end-to-end product
            development solutions. <br /> Our comprehensive hardware and
            software engineering services can help build products from concept
            to prototype.
            <br /> We design hardware platforms using cutting-edge technologies
            for different application requirements, and our very well-defined
            design methodology and collaborative approach helps in reducing
            time-to-market with accelerated development.
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
  );
}

export default AboutService;

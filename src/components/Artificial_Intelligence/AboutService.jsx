import React from "react";
import MainImg from "../../assets/Artificial_Intelligence/Data Science & ML.jpeg";

function AboutService() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Data Science & ML</p>
          <div className="homeContainerHeadingH2">
            <h2>Focused on Delivering Exceptional value to Our Customers</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            In today’s dynamic digital environment, effectively processing vast
            datasets swiftly and accurately, all while ensuring they align with
            strategic goals through suitable methodologies, is imperative.
            Having a trusted ally to guide you in implementing AI-powered
            analytics across various business realms, establishing a resilient
            data strategy, and embracing customized platforms is essential.
            <br /> At Cilkencave our expertise goes beyond traditional
            analytics. We excel in implementing cutting-edge machine learning
            algorithms across diverse business functions, enabling you to
            extract valuable insights and drive informed decision-making.
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

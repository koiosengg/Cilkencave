import React from "react";
import DigitalSolutionsImg from "../../assets/Artificial_Intelligence/Digital Solutions.jpeg";

function DigitalSolutions() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Digital Solutions</p>
          <div className="homeContainerHeadingH2">
            <h2>We Craft your Digital Transformation</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={DigitalSolutionsImg}
            alt="Cilkencave Digital Solutions"
            className="homeDeliveringRightMain"
            style={{height:"100%"}}
          ></img>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            With a strong focus on Digital Innovation, we specialize in crafting
            AI-enabled custom applications for mobile and web leveraging
            microservices architecture. We develop bespoke solutions that
            leverage the power of artificial intelligence. Our team of skilled
            developers and AI experts collaborates closely with clients to
            understand their unique requirements and deliver tailored
            applications that meet their specific needs.
            <br /> Whether you’re looking to enhance user experiences, optimize
            processes or unlock new insights from data; we have the expertise
            and capabilities to bring your vision to life.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={DigitalSolutionsImg}
          alt="Cilkencave Digital Solutions"
          className="homeDeliveringRightMain"
        ></img>
      </div>
    </div>
  );
}

export default DigitalSolutions;

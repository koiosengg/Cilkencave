import React from "react";
import UniquenessImg from "../../assets/AboutUs/defining excellence about us cilkencave.webp";

function AboutUsUniqueness() {
  return (
    <div className="homeContainer homeUniqueness">
      <div className="homeContainerHeading">
        <p>Defining Distinct Excellence</p>
        <div className="homeContainerHeadingH2">
          <h2>Our Uniqueness</h2>
        </div>
      </div>
      <div className="homeUniquenessContainer">
        <div className="homeUniquenessSet">
          <span>01</span>
          <div className="info">
            <h3>Global Engineering Leaders</h3>
            <p>
              Cilkencave semiconductor is emerging as a leader in providing
              engineering solutions worldwide.
            </p>
          </div>
        </div>
        <div className="homeUniquenessSet">
          <span>02</span>
          <div className="info">
            <h3>Empowering Innovation</h3>
            <p>
              We empower innovation by providing cutting-edge solutions that
              drive creativity and unlock new possibilities for our clients.
            </p>
          </div>
        </div>
        <div className="homeUniquenessSet">
          <span>03</span>
          <div className="info">
            <h3>Integrated Design Solutions</h3>
            <p>
              We offer end-to-end Semiconductor, Embedded, Automotive and System
              Design to design and build next-generation leadership products
              under one roof. And allowing clients to achieve both quick wins
              and long-term results.
            </p>
          </div>
        </div>
        <div className="homeUniquenessSet">
          <span>04</span>
          <div className="info">
            <h3>Cost-Effective Productization</h3>
            <p>
              Our goal is to be an extended arm of engineering product and IT
              companies and ensure good quality productization cost-effectively.
            </p>
          </div>
        </div>
        <div className="homeUniquenessSet">
          <span>05</span>
          <div className="info">
            <h3>Prioritizing Transparency</h3>
            <p>
              We prioritize transparency to foster trust and ensure clear
              communication throughout every stage of our process.
            </p>
          </div>
        </div>
        <div className="homeUniquenessSet">
          <span>06</span>
          <div className="info">
            <h3>Seamless Execution</h3>
            <p>Guiding customers from concept to completion</p>
          </div>
        </div>
        <img src={UniquenessImg} alt="Cilkencave Uniqueness Img"></img>
      </div>
    </div>
  );
}

export default AboutUsUniqueness;

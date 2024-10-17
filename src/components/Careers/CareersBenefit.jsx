import React from "react";
import InnovativeEnvironment from "../../assets/Careers/CareersMainPage/InnovativeEnvironment.svg";
import CareerGrowthOppurtunities from "../../assets/Careers/CareersMainPage/CareerGrowthOppurtunities.svg";
import CollaborativeTeamCulture from "../../assets/Careers/CareersMainPage/CollaborativeTeamCulture.svg";

function CareersBenefit() {
  return (
    <div className="homeContainer careersBenefit">
      <div className="homeContainerHeading">
        <p>Join Our Team and Thrive</p>
        <div className="homeContainerHeadingH2">
          <h2>Why you Should Join Us</h2>
        </div>
      </div>
      <div className="careersBenefitContainer">
        <div className="careersBenefitSet">
          <img
            src={InnovativeEnvironment}
            alt="Cilkencave Innovative Environment Careers "
          ></img>
          <div className="text">
            <h3>
              Innovative
              <br /> Environment
            </h3>
            <p>
              At our company, we foster a culture of innovation, where your
              ideas and creativity are encouraged. You'll have the opportunity
              to work on cutting-edge projects that challenge you to think
              outside the box and grow professionally.
            </p>
          </div>
        </div>
        <div className="careersBenefitSet">
          <img
            src={CareerGrowthOppurtunities}
            alt="Cilkencave Career Growth Oppurtunities  Careers "
          ></img>
          <div className="text">
            <h3>
              Career Growth
              <br /> Oppurtunities
            </h3>
            <p>
              At our company, we foster a culture of innovation, where your
              ideas and creativity are encouraged. You'll have the opportunity
              to work on cutting-edge projects that challenge you to think
              outside the box and grow professionally.
            </p>
          </div>
        </div>
        <div className="careersBenefitSet">
          <img
            src={CollaborativeTeamCulture}
            alt="Cilkencave Collaborative Team Culture Careers "
          ></img>
          <div className="text">
            <h3>
              Collaborative
              <br />
              Team Culture
            </h3>
            <p>
              At our company, we foster a culture of innovation, where your
              ideas and creativity are encouraged. You'll have the opportunity
              to work on cutting-edge projects that challenge you to think
              outside the box and grow professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersBenefit;

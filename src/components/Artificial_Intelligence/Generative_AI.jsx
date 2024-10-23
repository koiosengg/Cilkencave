import React from "react";
import Generative_AI_Img from "../../assets/Artificial_Intelligence/Generative_AI_Img.jfif";

function Generative_AI() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Generative AI</p>
          <div className="homeContainerHeadingH2">
            <h2>Our Disruption is the fuel for your Transformation</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            The majority of multinational enterprises have dabbled in AI to
            varying extents. However, achieving sustainable competitive
            advantage demands persistent attention to two critical fronts:
            harnessing state-of-the-art AI algorithms as they evolve and
            implementing them on a broad scale to unlock substantial value. Our
            deep expertise in Gen AI and LLMs allows us to develop bespoke
            business solutions that push the boundaries of innovation. Whether
            it’s automated code generation or synthetic data, personalized
            customer experiences, generating insights at lightning speed, or
            automating intricate business processes, we leverage our
            comprehensive understanding of these technologies to drive
            transformative outcomes for your organization.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight">
        <img src={Generative_AI_Img} className="homeDeliveringRightMain"></img>
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

export default Generative_AI;

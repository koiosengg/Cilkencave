import React from "react";
import DataServicesImg from "../../assets/Artificial_Intelligence/DataServicesImg.svg";
import CodeGenerationImg from "../../assets/Artificial_Intelligence/CodeGenerationImg.svg";
import AIinTestImg from "../../assets/Artificial_Intelligence/AIinTestImg.svg";

function Disruption() {
  return (
    <div className="homeContainer homeDelivering homeContainerWithKeyFeatures">
      <div className="homeContainerDiv">
        <div className="homeDeliveringLeft">
          <div className="homeContainerHeading">
            <p>
              Our Disruption is the Fuel
              <br /> for your Transformation
            </p>
            <div className="homeContainerHeadingH2">
              <h2>Generative AI</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="KeyFeatures">
        <div className="KeyFeaturesContainer">
          <div className="ThreeFeatureSet">
            <div className="heading">
              <img src={DataServicesImg}></img>
              <h3>Data Services</h3>
            </div>
            <p>
              Our expertise with SOTA LLMs allows us to create top quality
              customized Synthetic data, Automated Annotation & large Datasets
              for CV / NLP tasks.
            </p>
          </div>
          <div className="ThreeFeatureSet">
            <div className="heading">
              <img src={CodeGenerationImg}></img>
              <h3>Code Generation</h3>
            </div>
            <p>
              Auto-generation of Embedded C/C++ code specific to your SoC
              utilizing our custom LLMs enhances your TTM with high quality code
              on device.
            </p>
          </div>
          <div className="ThreeFeatureSet">
            <div className="heading">
              <img src={AIinTestImg}></img>
              <h3>AI in Test</h3>
            </div>
            <p>
              We leverage Gen AI to perform Test Augmentation by enhancing your
              Test Case KB, Test Data augmentation and automated Test execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disruption;

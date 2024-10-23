import React from "react";
import ExpertSvg from "/Expert.svg";
import CheckSvg from "/Check.svg";

function OurFocus() {
  return (
    <div className="homeContainer">
      <div className="homeContainerHeading">
        <p>Our Focus Areas</p>
        <div className="homeContainerHeadingH2">
          <h2>Our Focus Areas</h2>
        </div>
      </div>
      <div className="FeatureListContainer">
        <div className="FeatureListRow">
          <div className="FeatureListRowHeading">
            <h3>
              ADAS <br />
              Autonomous
            </h3>
            <div className="FeatureListRowIcon">
              <img src={ExpertSvg}></img>
            </div>
          </div>
          <div className="FeatureListRowContent">
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Perception</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Localization</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Vehicle Control</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>AI/ML/DL</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Assisted Driving</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Connected Features</p>
            </div>
          </div>
        </div>
        <div className="FeatureListRow">
          <div className="FeatureListRowHeading">
            <h3>
              Connected
              <br />
              Cars
            </h3>
            <div className="FeatureListRowIcon">
              <img src={ExpertSvg}></img>
            </div>
          </div>
          <div className="FeatureListRowContent">
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Digital Cockpit</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Telematics</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>V2X, App Dev</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>V2X Integration</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>5G Integration</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Extended Cars</p>
            </div>
          </div>
        </div>
        <div className="FeatureListRow">
          <div className="FeatureListRowHeading">
            <h3>
              Infotainment
              <br />
              System
            </h3>
            <div className="FeatureListRowIcon">
              <img src={ExpertSvg}></img>
            </div>
          </div>
          <div className="FeatureListRowContent">
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>HMI & Application Software</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Hardware and Mechanical</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Testing & Validation</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Vehicle Interfacing</p>
            </div>
          </div>
        </div>
        <div className="FeatureListRow">
          <div className="FeatureListRowHeading">
            <h3>
              EV &<br />
              Powertrain
            </h3>
            <div className="FeatureListRowIcon">
              <img src={ExpertSvg}></img>
            </div>
          </div>
          <div className="FeatureListRowContent">
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Battery Management System</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Powertrain Architecture</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Charging Electronics</p>
            </div>
            <div className="FeatureListSet">
              <img src={CheckSvg}></img>
              <p>Engine Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFocus;

import React from "react";
import ADDMImg from "../../assets/System_Design/ADDM Simplifying IoT Edge Management.jpg";

function ADDM() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>
            ADDM: Simplifying IoT
            <br /> Edge Management
          </p>
          <div className="homeContainerHeadingH2">
            <h2>Empowering IoT Infrastructure Management</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={ADDMImg}
            className="homeDeliveringRightMain"
            alt="Cilkencave   ADDM: Simplifying IoT
            Edge Management"
            style={{ height: "100%" }}
          ></img>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            With a passion for technology and a commitment to excellence, we
            empower businesses to thrive in the digital landscape. Cilkencave’s
            ADDM is dedicated to crafting tech solutions that revolutionize the
            way businesses operate. Our product-based solution simplifies IoT
            Edge Infrastructure management, empowering organizations with
            seamless control and agility.
            <br /> Our cutting-edge solution is tailored specifically for IoT
            deployments, providing unparalleled provisioning and control over
            Edge & Fog infrastructure. With the ADDM controller (ADDMCon) at its
            core, ADDM streamlines application orchestration, simplifies
            provisioning with single-click functionality, and ensures efficient
            configuration management. This accelerates IoT deployments,
            fostering agility within Edge and Fog networks. Moreover, ADDMCon’s
            machine-assisted troubleshooting and debugging capabilities empower
            staff to swiftly identify and rectify infrastructure issues. We are
            dedicated to realizing this vision and eliminating barriers to IoT
            adoption.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={ADDMImg}
          className="homeDeliveringRightMain"
          alt="Cilkencave   ADDM: Simplifying IoT
            Edge Management"
          style={{ height: "100%" }}
        ></img>
      </div>
    </div>
  );
}

export default ADDM;

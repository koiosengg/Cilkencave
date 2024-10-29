import React from "react";
import AnalogImg from "../../assets/Semiconductor_Chip_Design/Analog Design and Layout-min.jpg";

function Analog() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>
            Analog Design & <br className="notMobile" />
            Layout
          </p>
          <div className="homeContainerHeadingH2">
            <h2>Bring Realty into Digital</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={AnalogImg}
            alt="Cilkencave Analog Design & Layout"
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
            Cilkencave stands out as a premier ASIC analog design service
            provider, renowned for its excellence in analog mixed-signal design
            services. Our team of designers possesses extensive expertise
            spanning various analog domains, including RF design, power
            management, high-speed communications, data converters, clock
            generation, reference generation, and temperature sensors. Our
            breadth of experience encompasses a wide range of technologies,
            covering bulk CMOS, Bi-CMOS, FinFET, and SOI processes sourced from
            multiple foundries. Additionally, we are adept at working with
            leading-edge feature sizes, ensuring that our designs meet the
            highest industry standards and performance requirements.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={AnalogImg}
          alt="Cilkencave Analog Design & Layout"
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

export default Analog;

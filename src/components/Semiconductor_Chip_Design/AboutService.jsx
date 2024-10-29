import React from "react";
import MainImg from "../../assets/Semiconductor_Chip_Design/silicon engineering semiconductor chip design service page.webp";

function AboutService() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Silicon Engineering</p>
          <div className="homeContainerHeadingH2">
            <h2>Customized ASIC & SOC Solutions with Optimized Cost</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={MainImg}
            alt="Cilkencave Silicon Engineering"
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
            At Cilk n Cave Semiconductor, we specialize in advanced Silicon
            Engineering services, providing end-to-end solutions tailored to
            meet diverse client needs. Our experienced engineers and
            cutting-edge infrastructure ensure comprehensive support throughout
            the silicon design and development process. <br /> We’re not just a
            service provider but a collaborative partner, committed to
            delivering customized solutions and assisting clients at every stage
            of their silicon engineering projects. As new technology drivers
            like AI and IoT fuel demand for connected electronics, chipmakers
            face increasing challenges in production and supply, often leading
            to delays. <br /> Our expertise helps modernize the semiconductor
            space with smart product engineering, silicon, embedded technology,
            and data analytics. We enhance fabs with IoT, 5G, digital twins, and
            more, taking the guesswork out of large-scale chip-making. From SOC
            development and prototyping to IC testing, validation, and board
            design, we cover all semiconductor production needs, driving
            customer transformation in the era of next-gen technology.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={MainImg}
          alt="Cilkencave Silicon Engineering"
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

export default AboutService;

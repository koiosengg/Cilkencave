import React from "react";
import MainImg from "../../assets/Embedded_Solutions/Embedded Solutions.jpg";

function AboutService() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Embedded Solutions</p>
          <div className="homeContainerHeadingH2">
            <h2>Driving Embedded Excellence</h2>
          </div>
        </div>
        <div className="homeDeliveringRight mobile">
          <img
            src={MainImg}
            alt="Cilkencave Embedded Solutions"
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
            Cilkencave is your trusted partner for end-to-end support in
            embedded  solutions development. We specialize in guiding you
            through every phase of your project, starting from the initial idea
            all the way to the rigorous conformance testing stage. <br />
            Our team boasts extensive experience across a wide array of hardware
            platforms and processor architectures, as well as proficiency in
            real-time operating systems. This expertise allows us to offer
            tailored solutions that meet your specific requirements and ensure
            the seamless development of embedded systems.
            <br /> Whether it’s hardware design, software development, or the
            critical integration of hardware and software components, cilkencave
            is here to provide the expertise and support you need. With our
            meticulous attention to detail and commitment to efficiency, we’ll
            help you bring your embedded projects to fruition successfully.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight notMobile">
        <img
          src={MainImg}
          alt="Cilkencave Embedded Solutions"
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

import React from "react";
import CareersAboutImg from "../../assets/Careers/CareersMainPage/Careers About.jfif";
import Accelerating from "../../assets/Careers/CareersMainPage/Accelerating the Future of Semiconductors.png";
import Endless from "../../assets/Careers/CareersMainPage/endless growth-min.jpg";
import Positions from "../../assets/Careers/CareersMainPage/Open-Positions-min.jpg";

function CareersAbout() {
  return (
    <div>
      <div className="careerAbout">
        <img src={Accelerating} className="notMobile"></img>
        <div className="careerAboutText">
          <div className="homeContainerHeading">
            <p>
              Accelerating the Future <br /> of Semiconductors
            </p>
            <div className="homeContainerHeadingH2">
              <h2>From Startup to Industry Leader</h2>
            </div>
          </div>
          <img src={Accelerating} className="mobile"></img>
          <div className="careerAboutInfo">
            <p className="careerAboutInfoPara">
              Join us as we take you behind the scenes of Cilkencave, where
              speed isn’t just a preference, it’s a way of life. Cilkencave is
              setting the benchmark for speed and growth in the semiconductor
              industry. The company’s commitment to excellence is evident in
              every facet of its operations. Meet the dynamic individuals behind
              Cilkencave’s success, who emphasize the company’s unique approach
              of moving fast in small teams, avoiding bureaucracy, and fostering
              a culture of continuous growth. <br /> Hear firsthand from team
              members who started as interns or recruiters and have now risen to
              leadership positions, showcasing the company’s commitment to
              nurturing talent. Witness the journey of Cilkencave through the
              eyes of employees who have been with the company for around a
              century collectively. From its humble beginnings as a startup to
              becoming India’s fastest-growing Semiconductor Service Provider,
              Cilkencave’s story is nothing short of inspiring.
            </p>
          </div>
        </div>
      </div>
      <div className="careerAbout">
        <div className="careerAboutText">
          <div className="homeContainerHeading">
            <p>
              We have endless <br /> Inspiring growth <br />
              possibilities
            </p>
            <div className="homeContainerHeadingH2">
              <h2>Be a Part of People-Centric Work Culture</h2>
            </div>
          </div>
          <img src={Endless} className="mobile"></img>
          <div className="careerAboutInfo">
            <div className="careerAboutInfoSet">
              <h3 className="careerAboutInfoHeading">Hiring Freshers :</h3>
              <p className="careerAboutInfoPara ">
                We're experts in nurturing talent and believe in empowering our
                employees to excel. At Cilkencave, we embrace the diverse
                talents of our team and foster a collaborative, creative, and
                innovative environment. Join Cilkencave and watch your career
                take off. With our support and your talent, the possibilities
                are endless.
              </p>
            </div>
            <div className="careerAboutInfoSet">
              <h3 className="careerAboutInfoHeading">
                Hiring Experienced Candidates :
              </h3>
              <p className="careerAboutInfoPara ">
                Join our team at Cilkencave where we collaborate with global
                clients in various industries. You'll be part of a team crafting
                innovative solutions for the future. We prioritize your overall
                growth, offering opportunities to learn about cutting-edge
                technologies, innovative approaches, and leadership development.
              </p>
            </div>
          </div>
        </div>
        <img src={Endless} className="notMobile"></img>
      </div>
      <div className="careerAbout">
        <img src={Positions} className="notMobile"></img>
        <div className="careerAboutText">
          <div className="homeContainerHeading">
            <p>Open Positions</p>
            <div className="homeContainerHeadingH2">
              <h2>We are ready for you. Are you too?</h2>
            </div>
          </div>
          <img src={Positions} className="mobile"></img>
          <div className="careerAboutInfo">
            <p className="careerAboutInfoPara">
              At Cilkencave, we are dedicated to cultivating a workplace culture
              that embraces and honors diversity in its entirety. We firmly
              believe that diverse teams are the catalysts for innovation,
              creativity, and triumph. Our commitment lies in establishing an
              inclusive atmosphere where every employee, irrespective of their
              race, ethnicity, religion, gender, gender identity or expression,
              sexual orientation, nationality, genetic makeup, disability, age,
              or veteran status, feels appreciated and esteemed. We advocate for
              fair and impartial treatment for all our employees, striving to
              dismantle any prejudices or obstacles that could impede their
              personal or professional development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersAbout;

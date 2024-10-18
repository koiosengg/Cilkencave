import React from "react";
import { Link } from "react-router-dom";
import CareerLinkImg from "../../assets/Home/HomeCardLink/CareerLinkImg.svg";

function HomeCareerLink() {
  return (
    <div className="homeCardContainer">
      <div className="linkCard Green">
        <img className="linkCardBackground" src={CareerLinkImg}></img>
        <div className="heading">
          <h4>
            <span>Apply Now</span> and
            <br /> Grow with Us!
          </h4>
          <p>Check out exciting Job Opportunities with us.</p>
        </div>
        <Link to="/careers" className="linkCardButton">
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default HomeCareerLink;

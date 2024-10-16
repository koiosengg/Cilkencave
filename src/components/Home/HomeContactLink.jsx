import React from "react";
import { Link } from "react-router-dom";
import ContactLinkImg from "../../assets/Home/HomeCardLink/ContactLinkImg.svg";

function HomeContactLink() {
  return (
    <div className="homeCardContainer">
      <div className="linkCard Blue">
        <img className="linkCardBackground" src={ContactLinkImg}></img>
        <div className="heading">
          <h4>
            <span>Reach Out,</span> <br /> We’d Love to Hear from You!
          </h4>
          <p>Tell us your requirements.</p>
        </div>
        <Link to="/contact" className="linkCardButton">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default HomeContactLink;

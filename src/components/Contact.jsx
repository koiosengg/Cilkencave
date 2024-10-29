import React, { useRef } from "react";
import ContactBanner from "../assets/Contact/ContactBanner.svg";
import MobileContactBanner from "../assets/Contact/MobileContactBanner.svg";
import ContactImg1 from "../assets/Contact/ContactImg1 Cilkencave.jfif";
import ContactImg2 from "../assets/Contact/ContactImg2 Cilkencave.svg";
import ContactImg3 from "../assets/Contact/ContactImg3 Cilkencave.svg";
import { Link } from "react-router-dom";

function Contact() {
  const contactFormRef = useRef(null);

  // Function to handle the scroll when button is clicked
  const scrollToForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact">
      <div className="contactBanner">
        <img
          src={ContactBanner}
          className="notMobile"
          alt="Contact Banner"
        ></img>
        <img
          src={MobileContactBanner}
          className="mobile"
          alt="Contact Banner"
        ></img>
        <div className="contactBannerContent">
          <h1>
            We're Just a <br /> Message Away
          </h1>
          <div className="contactBannerButton" onClick={scrollToForm}>
            Contact Us
          </div>
        </div>
      </div>
      <div className="contactFormContainer" ref={contactFormRef}>
        <form className="contactForm">
          <div className="contactFormName">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email address" required />
          <input type="tel" placeholder="Mobile number" required />
          <select required>
            <option value="" disabled selected>
              Select the service
            </option>
            <option>Chip Manufacturing</option>
            <option>Chip Repair</option>
            <option>Circuit Testing</option>
          </select>
          <textarea placeholder="Message" style={{ resize: "none" }}></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="contactInfo">
          <a href="tel:9902978741" className="contactInfoSet">
            <div className="heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                  fill="#4DB122"
                />
              </svg>
              <h2>Contact Us</h2>
            </div>
            <p>+91 9902978741</p>
          </a>
          <a href="/" className="contactInfoSet">
            <div className="heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
              >
                <path
                  d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                  fill="#4DB122"
                />
              </svg>
              <h2>Our Head Office</h2>
            </div>
            <p>
              4th Floor,No.309, Sy.No. 5/5,VMR
              <br className="notMobile" /> Complex,Varthur Main
              <br className="notMobile" />
              Road,Thubarahalli,Bengaluru <br className="notMobile" />{" "}
              Urban,Karnataka <br /> PINCODE : 560066
            </p>
          </a>
          <a
            href="mailto:hr@cilkencave.com"
            target="_blank"
            className="contactInfoSet"
          >
            <div className="heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
              >
                <path
                  d="M2.5 16C1.95 16 1.47933 15.8043 1.088 15.413C0.696667 15.0217 0.500667 14.5507 0.5 14V2C0.5 1.45 0.696 0.979333 1.088 0.588C1.48 0.196666 1.95067 0.000666667 2.5 0H18.5C19.05 0 19.521 0.196 19.913 0.588C20.305 0.98 20.5007 1.45067 20.5 2V14C20.5 14.55 20.3043 15.021 19.913 15.413C19.5217 15.805 19.0507 16.0007 18.5 16H2.5ZM10.5 9L18.5 4V2L10.5 7L2.5 2V4L10.5 9Z"
                  fill="#4DB122"
                />
              </svg>
              <h2>E-Mail </h2>
            </div>
            <p>hr@cilkencave.com</p>
          </a>
        </div>
      </div>
      <div className="contactBusiness">
        <div className="info">
          <div className="heading">
            <h2>Grow your Business with Our Expertise</h2>
            <a onClick={scrollToForm}>
              <p>Contact Us</p>
            </a>
          </div>
          <div className="linkCard mobile">
            <img className="linkCardBackground " src={ContactImg1}></img>
          </div>
          <p>
            We understand the importance of approaching each work integrally and
            believe in the power of simple.
          </p>
        </div>
        <div className="linkCard notMobile">
          <img className="linkCardBackground " src={ContactImg1}></img>
        </div>
      </div>
      <div className="contactCardsContainer">
        <div className="linkCard Blue">
          <img className="linkCardBackground" src={ContactImg2}></img>
          <div className="heading">
            <h4>
              <span>Reach Out,</span> <br /> Let’s Hear from You!
            </h4>
            <p>Let’s Start a Conversation</p>
          </div>
          <Link to="/" className="linkCardButton">
            Contact Us
          </Link>
        </div>
        <div className="linkCard Green">
          <img className="linkCardBackground" src={ContactImg3}></img>
          <div className="heading">
            <h4>
              <span>Apply Now</span> and
              <br /> Grow with Us!
            </h4>
            <p>Check out exciting Job Opportunities with us.</p>
          </div>
          <Link to="/" className="linkCardButton">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
